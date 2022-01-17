import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const Test2: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';
  
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
  
              {/* use component here */}
              <Text>test2</Text>
  
  
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };

export default Test2;