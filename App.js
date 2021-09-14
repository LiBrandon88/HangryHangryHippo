import {createAppContainer} from 'react-navigation';
import {createStackNavigator}from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import CardScreen from './src/screens/CardScreen';
import React, { Component } from "react";


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const navigator = createStackNavigator(
  {
   Search: SearchScreen,
   Card: CardScreen
  }, 
{
  initialRouteName: 'Card',
  defaultNavigationOptions:  {
   title: 'Business Search'
  }

});

const AppContainer = createAppContainer(navigator);
