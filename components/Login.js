import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


import { authentication } from "../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

/* Google SignIn */
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {

    GoogleSignin.configure({
        webClientId: '136185337852-7a00mgbstaklop2ohm6n12gf2ct08klo.apps.googleusercontent.com',
    });

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

    const GoogleSignInAsync = async () => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user_sign_in = auth().signInWithCredential(googleCredential);

        user_sign_in
            .then((user) => {
                console.log(user)
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
                onPress={() => navigation.navigate('Home')}>
                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>SKIP TO MAIN APP</Text>
            </TouchableOpacity>
            <View style={styles.header}>
                <Image source={require('./img/moc2.png')} style={styles.logo} />
                <View style={styles.textContainer}>
                    <Text style={styles.textHeader}>กระทรวงพาณิชย์</Text>
                    <Text style={styles.textHeader2}>Ministry of Commerce</Text>
                </View>
            </View>


            {/* Login Container */}
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
                    {/* <GoogleSigninButton
                        style={{ width: 192, height: 48, marginVertical: 5, borderRadius: 10, }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Light}
                        onPress={GoogleSignInAsync}
                    /> */}

                </View>
            </View>

            <View style={styles.footer}>

                <TouchableOpacity style={styles.loginContainer}>
                    <Text style={styles.loginText} onPress={SignInUser}>Log in</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row'}}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: -5, color: '#707070' }}>---------------------------------------</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#707070' }}> or </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: -5, color: '#707070' }}>---------------------------------------</Text>
                </View>

                <TouchableOpacity style={styles.GoogleLoginContainer}>
                    <Image source={require('./img/google.png')} style={styles.googleLogo} />
                    <Text style={styles.loginGoogleText} onPress={GoogleSignInAsync}>Signin with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.GoogleLoginContainer}>
                    <Image source={require('./img/facebook.png')} style={styles.googleLogo} />
                    <Text style={styles.loginGoogleText}>Signin with Facebook</Text>
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
    loginContainer: {
        marginBottom: 5,
        backgroundColor: '#083370',
        paddingHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 10,
    
    },
    footer: {
        marginTop: 20,
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
        marginTop: 30,
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
    GoogleLoginContainer: {
        backgroundColor: '#FFFFFF',
        width: 240,
        height: 35,
        padding: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        elevation: 5,
    },
    loginGoogleText: {
        color: '#707070',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 20
    },
    googleLogo: {
        width: 20,
        height: 20,
        marginLeft: 15,
    }
})