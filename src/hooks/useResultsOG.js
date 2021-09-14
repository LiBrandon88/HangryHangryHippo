import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
        const respone = await yelp.get('/search', {
            params: {
                limit: 50,
                term: 'food',
                categories: searchTerm,
                latitude: 34.0754, //userLocation.latitude
                longitude: -84.2941 //userLocation.longitude
            }
        });
        setResults(respone.data.businesses);
        }
        catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    //Call search api when component is rendered
    //UseEffect used to run code a limitted amount of times.
    useEffect(()=> {
        searchApi('food');
    }, []);

    return [searchApi, results, errorMessage];
};