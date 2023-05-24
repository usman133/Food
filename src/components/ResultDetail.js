import React from "react";
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';

const ResultDetail = ({ result }) => {
    return (
    <View>
        <Image style={styles.image} source={{uri: result.image_url}} />
        <Text>{result.name}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width:250,
        borderRadius:4,
        height:120
    }
});

export default ResultDetail;