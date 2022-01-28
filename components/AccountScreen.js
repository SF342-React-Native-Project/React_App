import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"

const Account = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.headerText}>ACCOUNT</Text>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('./img/user.png')} style={styles.imgUser} />
                </View>
                <View style={styles.textBottomImg}>
                    <Text style={styles.nameText}>NAME</Text>
                </View>
                <View style={styles.textBottomImg2}>
                    <Text>example@gmail.com</Text>
                </View>


                <View style={styles.mainSection}>
                    <TouchableOpacity style={styles.sectionHelp} onPress={()=> navigation.navigate("Help")}>
                        <View style={styles.logoText}>
                            <View style={styles.startLogo}>
                                <FontAwesome5 name="phone-alt" color={'grey'} size={16} />
                            </View>
                            <Text style={styles.accountText}>Help</Text>
                        </View>
                        <View style={styles.endLogo}>
                            <Entypo name="triangle-right" color={'grey'} size={22} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.sectionHelp, { marginTop: 20, }]}>
                        <View style={styles.logoText}>
                            <View style={styles.startLogo}>
                                <Ionicons name="ios-settings-sharp" color={'grey'} size={16} />
                            </View>
                            <Text style={styles.accountText}>Change Password</Text>
                        </View>
                        <View style={styles.endLogo}>
                            <Entypo name="triangle-right" color={'grey'} size={22} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.logout}>
                        <Text style={styles.logoutText}>Log out</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </SafeAreaView>



    )
}

export default Account;

const styles = StyleSheet.create({
    logoutText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },  
    logout: {
        backgroundColor: 'rgb(8,26,59)',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        
    },  
    accountText: {
        color: 'grey',
        fontWeight: 'bold',
    },
    logoText: {
        flexDirection: 'row',
        flex: 1,
    },
    endLogo: {
        justifyContent: 'center',
    },
    startLogo: {
        marginHorizontal: 7,
        justifyContent: 'center',
    },
    footer: {
        marginTop: 10,
    },
    sectionHelp: {
        flexDirection: 'row',
        width: 250,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
    },
    mainSection: {
        padding: 10,
    },
    textBottomImg: {
        margin: 5,
    },
    textBottomImg2: {
        marginBottom: 10,
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    bodyContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    header: {
        padding: 20,
        alignItems: 'flex-start',
        marginLeft: 15,
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'rgb(8,26,59)',
    },
    imgUser: {
        margin: 10,
        height: 150,
        width: 150,
    },
    nameText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'

    },
})