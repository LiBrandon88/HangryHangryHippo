import React, { Component } from "react";
import {Animated, Dimensions,StyleSheet,Image,View, PanResponder, Text} from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import useResults from "../hooks/useResults";
import {useEffect, useState} from 'react';
import CardClass from '../Components/CardClass';

const CardScreen = () => {
    const Profiles = [
        { id: "1", image_url: require('../../assets/food.jpg'), name: "Resturaunt 1"},
        { id: "2", image_url: require('../../assets/food2.jpg'), name: "Resturaunt 2"}, 
        { id: "3", image_url: require('../../assets/food3.jpg'), name: "Resturaunt 3"}
    ]

    const [searchApi, results, errorMessage] = useResults();
    
 /*   
    This works and returns a list of resturaunt names
    return results.map((item, i) => {
        return <Text>{item.name}</Text>
    });
 */   
    return (
        <View style={{flex:1}}>
          <View style = {{height:60}}>
          </View>
          <View style = {{flex:1}}>
            <CardClass profiles = { results }/>
          </View>
          <View style = {{height:60}}>
          </View>
        </View>
    ); 
};

// This works 
//<Text>{results[0].name}</Text>
// <Image style = {styles.image} source ={{ uri: results[0].image_url }} />

const styles = StyleSheet.create({
image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardScreen;