import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryLine, VictoryScatter, VictoryTheme } from 'victory-native';

const PorkURL = "https://dataapi.moc.go.th/gis-product-prices?product_id=P11001&from_date=2021-12-01&to_date=2023-12-31"

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
                console.log(json)
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
                        <Text style={styles.headerText}>Graph</Text>
                        <Text style={styles.FoodNameText}>{title}</Text>

                        <VictoryChart
                            theme={VictoryTheme.material}
                            domainPadding={10}
                        >
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

                        {/* Bar Graph */}

                        {/* <VictoryChart
                            theme={VictoryTheme.material}
                            domainPadding={20}
                        >
                            <VictoryGroup>
                                <VictoryBar
                                    barWidth={8}
                                    alignment="center"
                                    style={{ data: { fill: "#011f49" } }}
                                    data={barData.minPrice}>

                                </VictoryBar>
                            </VictoryGroup>
                        </VictoryChart> */}

                        <View>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => (
                                    <View style={{ paddingBottom: 10 }}>
                                        <Text>
                                            {item.date}, {item.price_min}, {item.price_max}
                                        </Text>
                                    </View>
                                )}
                            />
                        </View>
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
    }


});

export default PriceChart;