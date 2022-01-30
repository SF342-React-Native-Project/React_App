import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Detail from "./Detail";

const DetailPrice = ({ route, navigation }) => {
  const { URLs } = route.params;

  return(
    <ScrollView>
      <View>
        <Text> Hello {URLs}</Text>
      </View>
    </ScrollView> 
  )
}

// const styles = StyleSheet.create({

// });

export default DetailPrice;