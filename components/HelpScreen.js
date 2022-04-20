import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { launchImageLibrary } from 'react-native-image-picker';

const Help = ({ navigation }) => {

    const [imageUri, setimageUri] = useState('');
    const [imagUpload, setImageUpload] = useState('');
    const [detail, setDetail] = useState('');

    const selectImage = async () => {
        const options = {
            noData: true
        }

        await launchImageLibrary(options, response => {
            if (true) {
                console.log("IMAGE")
                console.log(response.assets[0].uri)
                setimageUri(response.assets[0].uri)
                console.log("This is IMage URI", imageUri)
                
            }
        })
    }

    const sendMail = async () => {
        console.log('kuy :',imageUri)
        await Linking.openURL(`mailto:macchayaphol@hotmail.com?subject=ร้องเรียนปัญหา&body=${detail}<br><a href=''>รูปที่แนบมา<a/>`)
    }

    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backLogo} onPress={() => navigation.navigate("Home")}>
                    <Ionicons name="chevron-back-outline" color={'#083370'} size={42} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Help</Text>
            </View>
            <View style={styles.bodyContainer}>
                {/* Image */}
                <Image source={require('./img/add-contact.png')} style={styles.imgUser} />

                {/* ร้องเรียน */}
                <TouchableOpacity style={styles.textBottomImg} >
                    <View style={styles.startText}>
                        <Text style={styles.text}>เรื่องที่ต้องการร้องเรียน</Text>
                    </View>

                    <View style={styles.endLogo}>
                        <Entypo name="triangle-down" color={'grey'} size={22} />
                    </View>
                </TouchableOpacity>

                <View style={styles.inputContainer}>
                    <View style={styles.inputHeader}>
                        <Text style={styles.text}>รายละเอียด</Text>
                    </View>
                    <View >
                        <TextInput
                            style={styles.inputBody}
                            multiline
                            onChangeText={text => setDetail(text)}
                        />
                    </View>
                </View>

                {/* <View style={styles.chosefileContainer}>
                    <View style={styles.inputHeader}>
                        <Text style={styles.text}>file or picture</Text>
                    </View>

                    <View style={styles.chosefile} >
                        <TouchableOpacity style={styles.buttonChoseFile} onPress={selectImage}>
                            <Text style={styles.textC}>Choose</Text>
                        </TouchableOpacity>
                        <View style={styles.startText}>
                            <Text style={styles.text}>{imagUpload}</Text>
                        </View>
                    </View>
                </View> */}
{/* 
                <View>
                    <Image source={{uri: imageUri}} style={{width: 25, height: 25}}  />
                </View> */}

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={sendMail}>
                        <Text style={styles.sendText}>
                            SEND
                        </Text>
                    </TouchableOpacity>
                </View> 

            </View>
        </SafeAreaView>

    )
}

export default Help;

const styles = StyleSheet.create({
    sendText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },  
    buttonContainer: {
        marginTop: 30,
        backgroundColor: '#083370',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },  
    buttonChoseFile: {
        backgroundColor: 'grey',
        borderRadius: 5,
        padding: 5,
        marginLeft: 0,
    },
    textC: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 'bold',
    },
    chosefile: {
        marginTop: 5,
        flexDirection: 'row',
        width: 300,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
    },
    chosefileContainer: {
        marginTop: 15,
    },
    inputBody: {
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        marginTop: 5,
        height: 100,
        paddingLeft: 10,
        textAlignVertical: 'top',

    },
    inputHeader: {
        flexDirection: 'row',
        width: 297,
    },
    inputContainer: {
        marginTop: 15,
        flexDirection: 'column',
    },
    bodyContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    startText: {
        flex: 1,
        marginLeft: 5,
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    textBottomImg: {
        marginTop: 30,
        flexDirection: 'row',
        width: 300,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
    },
    endLogo: {
        justifyContent: 'center',
    },
    backLogo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        padding: 20,
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#083370',
    },
    imgUser: {
        margin: 10,
        height: 150,
        width: 150,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})