import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryLine, VictoryScatter, VictoryTheme } from 'victory-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const PorkURL = "https://dataapi.moc.go.th/gis-product-prices?product_id=P11001&from_date=2021-12-15&to_date=2023-12-31"

const barData = {
    minPrice: [{ x: "date1", y: 200 },
    { x: "date2", y: 250 },
    { x: "date3", y: 180 },
    { x: "date4", y: 220 },
    { x: "date5", y: 230 },
    { x: "date6", y: 220 },
    { x: "date7", y: 240 },
    { x: "date8", y: 230 },
    ]
}

const PriceChart = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        fetch(PorkURL).then((response) => response.json())
            .then((json) => {
                // console.log(json)
                setData(json.price_list);
                setTitle(json.product_name);
            })
            .catch((error) => alert(error))
            .finally(setLoading(false));
    })


    return (
        <SafeAreaView>
            {isLoading ? <ActivityIndicator /> :
                (
                    <ScrollView>

                        {/* Main Header */}
                        <Text style={styles.headerText}>Graph</Text>
                        <Text style={styles.FoodNameText}>{title}</Text>

                        {/* Chart */}
                        <View>
                            <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
                                <VictoryGroup>
                                    <VictoryLine style={{
                                        data: { stroke: "#011f49" },
                                        parent: { border: "1px solid #ccc" }
                                    }}
                                        data={barData.minPrice}>

                                    </VictoryLine>

                                    <VictoryScatter
                                        style={{ data: { fill: "#011f49" } }}
                                        size={7}
                                        data={barData.minPrice}
                                    >
                                    </VictoryScatter>
                                </VictoryGroup>
                            </VictoryChart>
                        </View>

                        {/* Table Header */}
                        <Text style={styles.tableHeader}>Price Table</Text>

                        {/* Table */}
                        <SafeAreaView style={styles.tableMargin}>

                            <Table borderStyle={{borderWidth: 2, borderColor: '#555555' }}>
                                <Row data={["รายการ", "วันที่", "ราคา\nต่ำสุด-สูงสุด", "ราคาเฉลี่ย"]} style={styles.firstTableRow} textStyle={styles.firstRowTextStyle} />
                            </Table>

                                <FlatList
                                    data={data}
                                    inverted={true}
                                    renderItem={({ item }) => (

                                        <View>
                                            <Table borderStyle={{borderWidth: 2, borderColor: '#555555' }}>
                                                <Row data={[title, item.date.substring(0, 10),[item.price_max, "/\n",item.price_min],
                                                (item.price_min + item.price_max) / 2]} textStyle={styles.textStyle}/>
                                            </Table>
                                        </View>

                                    )}
                                />

                        </SafeAreaView>
                    </ScrollView>
                )}
        </SafeAreaView>
    ) 
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 50,
        color: "#011f49",
        paddingLeft: 20,
        paddingTop: 20,
        fontWeight: "bold"
    },

    FoodNameText: {
        fontSize: 20,
        color: "#000000",
        paddingLeft: 25,
        fontWeight: "bold"
    },

    tableHeader: {
        fontSize: 20,
        color: "#ffffff",
        paddingLeft: 25,
        fontWeight: "bold",
        backgroundColor: "#011f49",
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
        padding:10,
    },

    textStyle: {
        textAlign: "center",
        fontSize: 10,
        padding:3,
    },
});

export default PriceChart;