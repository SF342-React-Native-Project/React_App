import React from "react";
import { View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'


import Detail from "./Detail";
import PriceChart from "./PriceChart";
import Account from "./AccountScreen";

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
    return (




        <Tab.Navigator
            initialRouteName="Detail"
            tabBarOptions={{
                activeTintColor: '#FFFFFF',
                activeBackgroundColor: '#083370',
                inactiveBackgroundColor: '#083370',
                inactiveTintColor: 'grey',
                  style: {
                    height: 67,
                  },
                }}
                
            

        >
            <Tab.Screen
                name="Detail"
                component={Detail}
                options={{
                    tabBarLabel:() => {return null},
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={36} />
                    ),
                }}
            />
            {/* <Tab.Screen
                name="PriceChart"
                component={PriceChart}
                options={{
                    tabBarLabel:() => {return null},
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="line-graph" color={color} size={32} />
                    ),
                }}
            /> */}
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel:() => {return null},
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="user" color={color} size={32} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Home;

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Detail from './Detail';
// import PriceChart from './PriceChart';

// const Tab = createBottomTabNavigator();

// const Main = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Feed"
//       tabBarOptions={{
//         activeTintColor: '#e91e63',
//       }}
//     >
//       <Tab.Screen
//         name="Feed"
//         component={Detail}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={PriceChart}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={size} />
//           ),
//           tabBarBadge: 3,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default Main;