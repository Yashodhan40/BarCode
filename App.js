
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation';
import ScanScreen from './screens/ScanScreen';

export default function App() {
  return (
    <View>
      <ScanScreen/>
      <AppContainer/>
        </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  a:{screen:ScanScreen}
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
