import React, { useState, useEffect  } from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState('');

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