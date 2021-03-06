import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        //price === '$' || '$$' || '$$$'
        return results.filter(results => {
            return results.price === price;
        });
    };
    return (
        <View>
            <SearchBar 
                term = {term} 
                onTermChange = {setTerm}
                onTermSubmit = {() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResultsList results = {filterResultsByPrice('$')} title = "Cost Effective"/>
            <ResultsList results = {filterResultsByPrice('$$')} title = "Bit Pricier"/>
            <ResultsList results = {filterResultsByPrice('$$$')} title = "Boujee AF" />
        </View>
    );

};

const styles = StyleSheet.create({});

export default SearchScreen;