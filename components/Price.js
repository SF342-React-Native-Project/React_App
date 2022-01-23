import * as React from 'react';
import { View, Text, StyleSheet, Row, Platform, Button, TextInput, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Meat from './Meat';

const meatList = ['เนื้อเซอร์ลอยน์', 'เนื้อเทนเดอร์ลอยน์', 'สตริปลอยน์', 'ทีโบนสเต็ก', 'เนื้อริบอาย', 'ไพร์มริบ', 'โทมาฮอว์ค'];

var forLoopMeat = [];

for(let i = 0; i < meatList.length; i++){
  forLoopMeat.push(
    <TouchableOpacity style={{ paddingHorizontal: 20 }}>
      <Meat text={meatList[i]} /> 
    </TouchableOpacity>
  )
}

const FirstRoute = () => (
  <ScrollView style={styles.first}>
    <View style={{ paddingTop: 20 }}></View>
    <View>
      {forLoopMeat}
    </View>
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView style={styles.second}>
    <View>
      <Text>Hi</Text>
    </View>
  </ScrollView>
);

const ThirdRoute = () => (
  <ScrollView style={styles.third}>
        <View>
            <Text>Hello Hi</Text>
        </View>
    </ScrollView>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'เนื้อสัตว์' },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'third' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

const styles = StyleSheet.create({
  first: {
    flex: 1, 
    backgroundColor: '#ff4081',
  },
  second: {
    flex: 1, 
    backgroundColor: '#673ab7',
  },
  third: {
    flex: 1, 
    backgroundColor: '#414141',
  }
});
