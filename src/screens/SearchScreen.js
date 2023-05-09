import React, { useState, useEffect  } from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrroMessage] = useState('');

    const searchApi = async searchTerm => {
      console.log('Hi there');
      try {
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term: searchTerm,
            location: 'San Jose'
        }
      })

      setResults(response.data.businesses);
    } catch (err) {
      setErrroMessage('Something went wrong');

    }
  }

    // Call searchApi when component is first rendered
    useEffect (() => {
      searchApi('pasta');
    }, []);
  
    return (
    <View>
        <SearchBar 
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}/>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results</Text>
        <Text>{term}</Text>
    </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;