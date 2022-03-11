import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator, Image, Button } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { VictoryBar, VictoryChart, VictoryGroup, VictoryLine, VictoryScatter, VictoryTheme } from 'victory-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import Detail from "./Detail";

const DetailPrice = ({ route, navigation }) => {
  const { URLs } = route.params;

  var plotData = [{}, {}, {}, {}, {}, {}, {}];
  var tableData = [];

  var testData = ["kuy", "12", "1", "3"]

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);

  async function fetchData() {
    const res = await fetch(URLs);
    res
      .json()
      .then(res => { setData(res.price_list), setTitle(res.product_name), setLoading(false) })
      .catch(err => setErrors(err));
  }


  const renderTableData = data.map((data) => {
    return (
      <View>
        <Row data={[title, data]} style={styles.firstTableRow} textStyle={styles.textStyle} />
      </View>

    )}
  );
  


  useEffect(() => {
    fetchData();
  }, [])

  if (!isLoading) {
    for (var i = 0; i < 7; i++) {
      plotData[i] = { "x": data[data.length - i - 1].date.substring(8, 10), "y": (data[data.length - i - 1].price_min + data[data.length - i - 1].price_max) / 2 }
    }

    for (var i = 0; i < data.length; i++) {
      tableData.push([title,
        data[i].date.substring(0, 10),
        data[i].price_min,
        data[i].price_max
      ])
    }

    plotData = plotData.reverse()
    tableData = tableData.reverse()
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
            <View>
              <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
                <VictoryGroup>
                  <VictoryLine style={{
                    data: { stroke: "#011f49" },
                    parent: { border: "1px solid #ccc" }
                  }}
                    data={plotData}>

                  </VictoryLine>

                  <VictoryScatter
                    style={{ data: { fill: "#011f49" } }}
                    size={7}
                    data={plotData}
                  >
                  </VictoryScatter>
                </VictoryGroup>
              </VictoryChart>
            </View>

            {/* Table Header */}
            <Text style={styles.tableHeader}>Price Table</Text>

            {/* Table */}
            <SafeAreaView style={styles.tableMargin}>

              <Table borderStyle={{ borderWidth: 2, borderColor: '#555555' }}>
                <Row data={["รายการ", "วันที่", "ราคา\nต่ำสุด-สูงสุด", "ราคาเฉลี่ย"]} style={styles.firstTableRow} textStyle={styles.firstRowTextStyle} />
                <Rows data={tableData} style={styles.firstTableRow} textStyle={styles.textStyle} />
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