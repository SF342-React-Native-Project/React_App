import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryLine, VictoryScatter, VictoryTheme } from 'victory-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const PorkURL = "https://dataapi.moc.go.th/gis-product-prices?product_id=P11001&from_date=2021-12-15&to_date=2023-12-31"

var plotData = [{}, {}, {}, {}, {}, {}, {}];

const PriceChart = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState([]);

    async function fetchData() {
        const res = await fetch(PorkURL);
        res
            .json()
            .then(res => { setData(res.price_list), setTitle(res.product_name), setLoading(false) })
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (!isLoading) {
        for (var i = 0; i < 7; i++) {
            plotData[i] = { "x": data[i].date.substring(8, 10), "y": (data[i].price_min + data[i].price_max) / 2 }
        }
        console.log("this:", plotData)
    }

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
                            </Table>

                            <FlatList
                                data={data}
                                inverted={true}
                                renderItem={({ item }) => (

                                    <View>
                                        <Table borderStyle={{ borderWidth: 2, borderColor: '#555555' }}>
                                            <Row data={[title, item.date.substring(0, 10), [item.price_max, "/\n", item.price_min],
                                                (item.price_min + item.price_max) / 2]} textStyle={styles.textStyle} />
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
        color: "#083370",
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

export default PriceChart;