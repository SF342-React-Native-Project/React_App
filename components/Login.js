import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { authentication } from "../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignInUser = () => {
        signInWithEmailAndPassword(authentication, email, password)
        .then((res) => {
            console.log(res)
            navigation.navigate('Home');
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <SafeAreaView style={styles.body}>
            <TouchableOpacity style={{
                backgroundColor: '#083370',
                padding: 10,
                borderRadius: 10,
                marginLeft: 200,
                marginTop: 20,
            }}
            onPress={()=> navigation.navigate('Home')}>
                <Text style={{color: '#FFF', fontWeight: 'bold'}}>SKIP TO MAIN APP</Text>
            </TouchableOpacity>
            <View style={styles.header}>
                <Image source={require('./img/moc2.png')} style={styles.logo} />
                <View style={styles.textContainer}>
                    <Text style={styles.textHeader}>กระทรวงพาณิชย์</Text>
                    <Text style={styles.textHeader2}>Ministry of Commerce</Text>
                </View>
            </View>

            <View style={styles.sectionContainer}>
                <View style={styles.topSection}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 30 }}>LOG IN</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.textInput}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <Text style={styles.textInput}>Password</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
                    />
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.loginContainer}>
                    <Text style={styles.loginText} onPress={SignInUser}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.createAccountContainer} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.createAccountText}>
                        Create a new Account
                    </Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>



    )
}

export default Login;

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
        marginBottom: 10,
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
        marginBottom: 3,
        marginTop: 5,
    },
    sectionContainer: {
        marginTop: 40,
        backgroundColor: '#083370',
        width: 300,
        height: 220,
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
        justifyContent: 'flex-start',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
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