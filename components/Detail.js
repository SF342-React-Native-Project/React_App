import * as React from 'react';
import { View, Text, StyleSheet, Row, Platform, Button, TextInput, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Entypo from 'react-native-vector-icons/Entypo'

import Meat from './Meat';

const meatList = ['เนื้อเซอร์ลอยน์', 'เนื้อเทนเดอร์ลอยน์', 'สตริปลอยน์', 'ทีโบนสเต็ก', 'เนื้อริบอาย', 'ไพร์มริบ', 'โทมาฮอว์ค'];

var forLoopMeat = [];

for (let i = 0; i < meatList.length; i++) {
  forLoopMeat.push(
    <TouchableOpacity style={{ paddingHorizontal: 20 }}>
      <Meat text={meatList[i]} />
    </TouchableOpacity>
  )
}

const FirstRoute = () => (
  <ScrollView style={styles.first}>
    <View style={{ paddingTop: 20, }}></View>
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

export default function Detail() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'เนื้อสัตว์' },
    { key: 'second', title: 'ผักใบ/ผล' },
    { key: 'third', title: 'ผลไม้' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={'#707070'}
      inactiveColor={'#707070'}
      indicatorStyle={{ backgroundColor: '#083370', height: 4, }}
      labelStyle={{ fontWeight: 'bold', fontSize: 16 }}
      style={{ backgroundColor: '#FFF', marginHorizontal: 30, elevation: 0, }}
    />
  );

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headerText}>PRICE</Text>
      </View>
      <View style={styles.dropdownContainer}>
        <TouchableOpacity style={styles.dropdown}>
          {/* Text */}
          <View style={styles.startDrop}>
            <Text style={styles.dropdownText}>ประเภทสินค้า</Text>
          </View>
          {/* Icon */}
          <View style={styles.endDrop}>
            <Entypo name="triangle-down" color={'grey'} size={22} />
          </View>
        </TouchableOpacity>
      </View>

      <TabView
        navigationState={{ index, routes, }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  startDrop: {
    flex: 1,
  },  
  dropdownText: {
    fontWeight: 'bold'
  },
  dropdown: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    width: 330,
    paddingVertical: 5,
    textAlign: 'left',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  dropdownContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: '#000000'
  },
  render: {
    backgroundColor: '#ff4081'
  },
  first: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  second: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  third: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#083370',
  },
  header: {
    marginLeft: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#FFFFFFF',
    padding: 10,
  },
})
