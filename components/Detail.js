import React from 'react';
import { View, Text, StyleSheet, Row, Platform, Button, TextInput, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Entypo from 'react-native-vector-icons/Entypo'

import Meat from './Meat';
import DetailPrice from './DetailPrice';

const meatList = ['เนื้อเซอร์ลอยน์', 'เนื้อเทนเดอร์ลอยน์', 'สตริปลอยน์', 'ทีโบนสเต็ก', 'เนื้อริบอาย', 'ไพร์มริบ', 'โทมาฮอว์ค'];

const URLs = ['https://dataapi.moc.go.th/gis-product-prices?product_id=P11001&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11002&from_date=2021-12-15&to_date=2023-12-31', 
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11003&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11004&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11005&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11006&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11007&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11008&from_date=2021-12-15&to_date=2023-12-31',
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
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11034&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11035&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11036&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11037&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11038&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11039&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11040&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11041&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11042&from_date=2021-12-15&to_date=2023-12-31',
              'https://dataapi.moc.go.th/gis-product-prices?product_id=P11043&from_date=2021-12-15&to_date=2023-12-31',
              ];

var forLoopMeat = [];

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

const Detail = ({ navigation }) => {
// export default function Detail() {
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

  for (let i = 0; i < URLs.length; i++) {
    forLoopMeat.push(
      <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() => { navigation.navigate('DetailPrice', { URLs: URLs[i] }); }}>
        <Meat URLs={URLs[i]} />
      </TouchableOpacity>
    )
  }

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
        // renderTabBar={props => (
        //   <TabBar
        //     {...props}
        //     // indicatorStyle={{ backgroundColor: '#FFFFFF', height: 3, }}
        //     renderLabel={({ route, color }) => (
        //       <Text style={{ color: '#FFFFFF', margin: 8 }}>
        //         {route.title}
        //       </Text>
        //     )}
        //     style={{backgroundColor: 'rgb(8,26,59)'}}
        //   />
        // )}
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
    marginTop: 20,
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

export default Detail;