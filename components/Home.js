import React from "react";
import {View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

// import Detail from "./Detail";
// import PriceChart from "./PriceChart";

const Home = ({navigation}) => {
    return(
        <ScrollView>
            <View>
                <Text>Home Screen</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                    <Text>Click me to detail </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text>Click me to login </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PriceChart')}>
                    <Text>Click me to PriceChart </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Home;