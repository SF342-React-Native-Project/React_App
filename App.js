// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// // Import components here
// import Test2 from "./components/Test2"


// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <View style={{backgroundColor: isDarkMode ? Colors.black : Colors.white,}}>

//             {/* use component here */}
//             <Text>Test</Text>
//             <Test2/>

//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;


// In App.js in a new project

// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from './components/Detail';
import Home from './components/Home'
import Login from './components/Login';
import PriceChart from './components/PriceChart';
import AcccountScreen from './components/AccountScreen';
import HelpScreen from './components/HelpScreen';
import Register from './components/RegisterScreen';
import DetailPrice from './components/DetailPrice';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Login" component={Login} options={{ header: () => null }} />
        <Stack.Screen name="Home" component={Home} options={{ header: () => null }} />
        <Stack.Screen name="Detail" component={Detail} options={{ header: () => null }} />
        <Stack.Screen name="Register" component={Register} options={{ header: () => null }} />
        <Stack.Screen name="PriceChart" component={PriceChart} options={{ header: () => null }} />
        <Stack.Screen name="Account" component={AcccountScreen} options={{ header: () => null }} />
        <Stack.Screen name="Help" component={HelpScreen} options={{ header: () => null }} />
        <Stack.Screen name="DetailPrice" component={DetailPrice}  options={{ header: () => null }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;