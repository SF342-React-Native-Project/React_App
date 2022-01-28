import React from "react";
import {View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({navigation}) => {
    return(
        <SafeAreaView style={styles.body}>
            <View style={styles.header}>

            </View>

        </SafeAreaView>
 
    
        
    )
}

export default Login;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})