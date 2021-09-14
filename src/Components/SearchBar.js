import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 


const SearchBar= ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style = {styles.background}>
            <Feather 
                name="search" 
                style = {styles.iconStyle} />
            <TextInput 
                style = {styles.inputStyle}
                placeholder = "Search" 
                autoCapitalize = "none"
                autoCorrect = {false}
                value = {term}
                onChangeText = {onTermChange}
                onEndEditing = {onTermSubmit}
  
            />

        </View>
    );

};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginTop: 15,
        borderRadius: 5,
        flexDirection: "row",
        marginHorizontal: 15,
    },

    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }


});

export default SearchBar;