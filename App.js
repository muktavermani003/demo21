
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import {Text,View} from 'react-native';
import Screen1 from "./HomeScreen"
import Screen2 from "./Details"






const DetailScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'yellow' }}>
      <Text style={{fontSize:23}}>Welcome</Text>
    </View>
  );
};
const Stack = createStackNavigator();
const App = createStackNavigator({
HomeScreen:{screen:Screen1},
Details:{screen:Screen2}
}) ;
export default createAppContainer(app)
  



