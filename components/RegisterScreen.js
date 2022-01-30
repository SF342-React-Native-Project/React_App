import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.header}>
                <Image source={require('./img/kspn.jpg')} style={styles.logo} />
                <View style={styles.textContainer}>
                    <Text style={styles.textHeader}>กระทรวงพาณิชย์</Text>
                    <Text style={styles.textHeader2}>Ministry of Commerce</Text>
                </View>
            </View>

            <View style={styles.sectionContainer}>
                <View style={styles.topSection}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 30 }}>REGISTER</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.textInput}>NAME</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.textInput}>EMAIL</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.textInput}>PASSWORD</Text>
                    <TextInput
                        style={styles.input}
                    />
                    <Text style={styles.textInput}>CONFIRM PASSWORD</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.loginContainer}>
                    <Text style={styles.loginText}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.createAccountContainer} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.createAccountText}>
                        Go to LOGIN
                    </Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>



    )
}

export default Register;

const styles = StyleSheet.create({
    createAccountText: {
        fontSize: 14,
        color: '#083370',
    },  
    createAccountContainer: {
        margin: 5,
        padding: 5,
    },
    loginText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        
    },
    loginContainer:{
        
        backgroundColor: '#083370',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 10,
    },  
    footer: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },  
    inputContainer: {
        alignItems: 'center',
    },
    input: {
        marginTop: 5,
        backgroundColor: '#FFF',
        width: 230,
        height: 30,
        borderRadius: 5,
        color: '#000',
        fontSize: 13,
        padding: 5,
    },
    textInput: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'flex-start',
        marginLeft: 35,
        marginTop: 5,
    },
    topSection: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 5,
        marginTop: 5,
    },
    sectionContainer: {
        marginTop: 40,
        backgroundColor: '#083370',
        width: 300,
        height: 350,
        borderRadius: 15,
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 130,
        height: 130,
    },
    textHeader: {
        fontWeight: 'bold',
        color: '#083370',
        fontSize: 24,
        
    },
    textHeader2: {
        fontWeight: 'bold',
        color: '#083370',
        fontSize: 16,
        marginRight: 15,
    },
})