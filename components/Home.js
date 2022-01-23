import React from "react";
import { View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Detail from "./Detail";
import PriceChart from "./PriceChart";

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
    return (




        <Tab.Navigator
            initialRouteName="Detail"
            tabBarOptions={{
                activeTintColor: '#000000',
                activeBackgroundColor: 'grey',
                inactiveBackgroundColor: 'grey',
                inactiveTintColor: '#ffffff',
                labelStyle: { fontSize: 14, paddingBottom: 7 },

            }}

        >
            <Tab.Screen
                name="Detail"
                component={Detail}
                options={{
                    tabBarLabel: 'Detail',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="PriceChart"
                component={PriceChart}
                options={{
                    tabBarLabel: 'PriceChart',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="virus" color={color} size={size} />
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