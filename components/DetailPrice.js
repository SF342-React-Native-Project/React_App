import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator, Image, Button, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { VictoryBar, VictoryChart, VictoryGroup, VictoryLine, VictoryScatter, VictoryTheme } from 'victory-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import Slider from '@react-native-community/slider';


import Detail from "./Detail";

const DetailPrice = ({ route, navigation }) => {
  const { URLs } = route.params;

  var plotDataX = [];
  var plotDataY = [];
  var tableData = []; //***Display value in table

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [sliderValue, setSliderValue] = useState(7);

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#000000",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#000000",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true
  };

  var chartdata = {
    labels: plotDataX,
    datasets: [
      {
        data: plotDataY,
        color: (opacity = 1) => `rgba(2,50,113, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Price in THB"] // optional
  };

  async function fetchData() {
    const res = await fetch(URLs);
    res
      .json()
      .then(res => { setData(res.price_list), setTitle(res.product_name), setLoading(false) })
      .catch(err => setErrors(err));
  }

  const UpdateRange = () => {
    plotDataX = [];
    plotDataY = [];

    for (var i = 0; i < sliderValue; i++) {
      plotDataX.push(data[data.length - i - 1].date.substring(5, 10));
      plotDataY.push((data[data.length - i - 1].price_min + data[data.length - i - 1].price_max) / 2);
    }

    plotDataX = plotDataX.reverse()
    plotDataY = plotDataY.reverse()

    chartdata = {
      labels: plotDataX,
      datasets: [
        {
          data: plotDataY,
          color: (opacity = 1) => `rgba(2,50,113, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Price in THB"] // optional
    };

    return (
      <View>
      <LineChart
        style={styles.chartStyle}
        data={chartdata}
        width={screenWidth-20}
        height={280}
        chartConfig={chartConfig}
        verticalLabelRotation={50}
        bezier
      />
    </View>
    );
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (!isLoading) {
    for (var i = 0; i < 7; i++) {
      plotDataX.push(data[data.length - i - 1].date.substring(5, 10));
      plotDataY.push((data[data.length - i - 1].price_min + data[data.length - i - 1].price_max) / 2);
    }

    for (var i = 0; i < data.length; i++) {
      tableData.push([title,
        data[i].date.substring(0, 10),
        data[i].price_min,
        data[i].price_max
      ])
    }

    tableData = tableData.reverse()
    plotDataX = plotDataX.reverse()
    plotDataY = plotDataY.reverse()
    // console.log("this:", plotData)
    // console.log("this:", tableData)
  }

  return (
    <SafeAreaView>
      {isLoading ? <ActivityIndicator /> :
        (
          <ScrollView>

            {/* Main Header */}
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('./img/backIcon.png')} style={styles.backIcon} />
              </TouchableOpacity>
              <Text style={styles.headerText}>Graph</Text>
              <Text style={styles.FoodNameText}>{title}</Text>
            </View>

            {/* Chart */}
            <UpdateRange/>

            {/* Range Slider */}
            <View style={styles.container}>
              <Text style={styles.rangeSliderStyle}>Range: {sliderValue} days</Text>
              <Slider
                style={styles.SliderStyle}
                minimumValue={1}
                maximumValue={30}
                step={1}
                minimumTrackTintColor="#023271"
                maximumTrackTintColor="#000000"
                thumbTintColor="#023271"
                onSlidingComplete={(value)=>{setSliderValue(value)}}

              />
            </View>

            {/* Table Header */}
            <Text style={styles.tableHeader}>Price Table</Text>

            {/* Table */}
            <SafeAreaView style={styles.tableMargin}>

              <Table borderStyle={{ borderWidth: 2, borderColor: '#555555', borderRadius: 5}}>
                <Row data={["รายการ", "วันที่", "ราคา\nต่ำสุด-สูงสุด", "ราคาเฉลี่ย"]} style={styles.firstTableRow} textStyle={styles.firstRowTextStyle} />
                <Rows data={tableData} textStyle={styles.textStyle} />
              </Table>

            </SafeAreaView>
          </ScrollView>
        )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  headerContainer: {
    display: 'flex',
    paddingTop: 25,
  },

  backIcon: {
    width: 40,
    height: 40,
    marginLeft: 5,
  },

  chartStyle: {
    paddingTop: 20,

  },

  rangeSliderStyle: {
    paddingTop: 20,
    justifyContent: "center",
    textAlign: "center"
  },
  SliderStyle: {
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 50,
    marginRight: 50
  },

  headerText: {
    fontSize: 50,
    color: "#083370",
    marginLeft: 50,
    top: 0,
    paddingTop: 8,
    fontWeight: "bold",
    position: 'absolute',
  },

  FoodNameText: {
    fontSize: 20,
    color: "#000000",
    paddingLeft: 25,
    fontWeight: "bold",
    marginTop: 10,
  },

  tableHeader: {
    fontSize: 20,
    color: "#ffffff",
    paddingLeft: 25,
    fontWeight: "bold",
    backgroundColor: "#083370",
    padding: 5,
    margin: 20,
    borderRadius: 25,
  },

  tableMargin: {
    margin: 20,
  },

  firstTableRow: {
    backgroundColor: "#cccccc",
  },

  firstRowTextStyle: {
    textAlign: "center",
    fontSize: 11,
    fontWeight: "bold",
    padding: 10,
  },

  textStyle: {
    textAlign: "center",
    fontSize: 10,
    padding: 3,
  },
});

export default DetailPrice;