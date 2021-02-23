import * as React from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';


export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state={
            cameraPermit:null,
            scanned:false,
            scanData:'',
            buttonState:'normal'
        }
    }

    getCameraPermission =async()=>{
            const {status} = await Permissions.askAsync(Permissions.CAMERA);
            
            this.setState({
                cameraPermit:status==='granted',
                buttonState:'clicked',
                scanned:false
            })
    }
    handleData =async({type,data})=>{
            this.setState({
                scanned:true,
                scanData:data,
                buttonState:'normal'
            })
    }
    render(){
        const cameraPermit=this.state.cameraPermit;
        const scanned=this.state.scanned;
        const buttonState=this.state.buttonState;

        if (buttonState==='clicked' && cameraPermit){
            return(
                <BarCodeScanner onBarCodeScanned={scanned?undefined:this.handleData} />
            )
        }else if(buttonState==='normal'){
        return(
            <View style={styles.text}>
                <TouchableOpacity 
                onPress={this.getCameraPermission}
                //title="Bar Code Scanner"
                ><Text style={styles.body}>Scan Bar Code</Text>
                
                    </TouchableOpacity>
            </View>
        )
        }
    }
}

const styles=StyleSheet.create({
    body:{
        color:'blue',
        fontWeight:'bold',
        fontSize:25,
        backgroundColor:'pink',
        borderRadius:3,
        borderWidth:2,
        borderColor:'black',
        marginTop:280,
        alignSelf:'center',
        textAlign:'center'
    },
    text:{
        borderRadius:2
    }
})