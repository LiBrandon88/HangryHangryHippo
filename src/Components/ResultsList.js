import React, {useState} from 'react';
import {View, Text, StyleSheet, Flatlist} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetails from './ResultsDetail';

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style = {styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal = {true}
                data = {results}
                keyExtractor = {(results) => results.id}
                renderItem = {({item}) => {
                    return <ResultsDetails result={item} />;
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }


});

export default ResultsList;