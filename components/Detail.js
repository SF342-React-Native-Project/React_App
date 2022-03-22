import React from 'react';
import { View, Text, StyleSheet, Row, Platform, Button, TextInput, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Entypo from 'react-native-vector-icons/Entypo'

import Meat from './Meat';
import DetailPrice from './DetailPrice';

const URLMeat = ['https://dataapi.moc.go.th/gis-product-prices?product_id=P11001&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11002&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11003&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11004&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11005&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11006&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P11007&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P11008&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11009&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11010&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11011&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11012&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11013&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11014&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11015&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11016&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11017&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11018&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11019&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11020&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11021&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11022&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11023&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11024&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11025&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11026&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11027&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11028&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11029&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11030&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11031&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11032&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11033&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P11034&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P11035&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P11036&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11037&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11038&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P11039&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P11040&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P11041&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11042&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11043&from_date=2021-12-15&to_date=2023-12-31',
              ];

const URLVegetable = ['https://dataapi.moc.go.th/gis-product-prices?product_id=P13001&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13002&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13003&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13004&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13005&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13006&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13007&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13008&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13009&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13010&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13011&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13012&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13013&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13014&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13015&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13016&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13017&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13018&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13019&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13020&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13021&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13022&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13023&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13024&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13025&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13026&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13027&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13028&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13029&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13030&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13031&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13032&from_date=2021-12-15&to_date=2023-12-31', 
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P13033&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P13034&from_date=2021-12-15&to_date=2023-12-31', 
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P13035&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P13036&from_date=2021-12-15&to_date=2023-12-31', 
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P13037&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P13038&from_date=2021-12-15&to_date=2023-12-31', 
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P13039&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P13040&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13041&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P13042&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13043&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13044&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13045&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P13046&from_date=2021-12-15&to_date=2023-12-31',
              ];

const URLFruit = ['https://dataapi.moc.go.th/gis-product-prices?product_id=P14001&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14002&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14003&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14004&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14005&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P14006&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14007&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14008&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14009&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14010&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14011&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14012&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14013&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14014&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14015&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P14016&from_date=2021-12-15&to_date=2023-12-31', 
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P14017&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P14018&from_date=2021-12-15&to_date=2023-12-31', 
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P14019&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P14020&from_date=2021-12-15&to_date=2023-12-31', 
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P14021&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P14022&from_date=2021-12-15&to_date=2023-12-31', 
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P14023&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P14024&from_date=2021-12-15&to_date=2023-12-31', 
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P14025&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14026&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14027&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14028&from_date=2021-12-15&to_date=2023-12-31', 
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P14029&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P14030&from_date=2021-12-15&to_date=2023-12-31', 
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P14031&from_date=2021-12-15&to_date=2023-12-31',
              // 'https://dataapi.moc.go.th/gis-product-prices?product_id=P14032&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14033&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14034&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14035&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P14036&from_date=2021-12-15&to_date=2023-12-31', 
              ];

var forLoopMeat = [];
var forLoopVegetable = [];
var forLoopFruit = [];

var stopForMeat = false;
var stopForVegetable = false;
var stopForFruit = false;

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
    <View style={{ paddingTop: 20, }}></View>
    <View>
      {forLoopVegetable}
    </View>
  </ScrollView>
);

const ThirdRoute = () => (
  <ScrollView style={styles.third}>
    <View style={{ paddingTop: 20, }}></View>
    <View>
      {forLoopFruit}
    </View>
  </ScrollView>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const Detail = ({ navigation }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'เนื้อสัตว์' },
    { key: 'second', title: 'ผัก' },
    { key: 'third', title: 'ผลไม้' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={'#707070'}
      inactiveColor={'#707070'}
      indicatorStyle={{ backgroundColor: '#083370', height: 3, }}
      labelStyle={{ letterSpacing: 1, fontSize: 14, fontFamily: 'Mitr-Regular' }}
      style={{ backgroundColor: '#f2f2f2', elevation: 0, marginLeft: 30, marginRight: 40 }}
    />
  );

  if (stopForMeat == false) {
    for (let i = 0; i < URLMeat.length; i++) {
      forLoopMeat.push(
        <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() => { navigation.navigate('DetailPrice', { URLs: URLMeat[i] }); }}>
          <Meat URLs={URLMeat[i]} />
        </TouchableOpacity>
      )
    };
    stopForMeat = true;
  }

  if (stopForVegetable == false) {
    for (let i = 0; i < URLVegetable.length; i++) {
      forLoopVegetable.push(
        <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() => { navigation.navigate('DetailPrice', { URLs: URLVegetable[i] }); }}>
          <Meat URLs={URLVegetable[i]} />
        </TouchableOpacity>
      )
    };
    stopForVegetable = true;
  }

  if (stopForFruit == false) {
    for (let i = 0; i < URLFruit.length; i++) {
      forLoopFruit.push(
        <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() => { navigation.navigate('DetailPrice', { URLs: URLFruit[i] }); }}>
          <Meat URLs={URLFruit[i]} />
        </TouchableOpacity>
      )
    };
    stopForFruit = true;
  }

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Price</Text>
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
    fontFamily: 'Mitr-Regular'
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
    backgroundColor: '#f2f2f2',
  },
  second: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  third: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  body: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
  },
  headerText: {
    fontSize: 34,
    color: '#083370',
    fontFamily: 'Mitr-Regular'
  },
  header: {
    marginLeft: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#FFFFFFF',
    padding: 10,
  },
})

export default Detail;