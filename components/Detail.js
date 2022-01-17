import React from "react";
import {View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Home from "./Home";

const Detail = ({navigation}) => {
    return(
        <ScrollView>
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