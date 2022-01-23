import React from "react";
import {View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Home from "./Home";

const Detail = ({navigation}) => {
    return(
        <ScrollView style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.headerText}>MOC</Text>
            </View>
            <View>
                <Text>DetailsScreen</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text>Click me to home </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text>Click me to login </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
 
        
        
    )
}

export default Detail;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
    },  
    headerText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'rgb(203,162,0)',
    }, 
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(8,26,59)',
    },
})