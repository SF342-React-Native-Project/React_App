import React from "react";
import {View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryLine } from 'victory-native';

const PorkURL = "https://dataapi.moc.go.th/gis-product-prices?product_id=P11001&from_date=2021-12-01&to_date=2023-12-31"

const barData = {
    minPrice: [{x: "date1", y: 200}, {x: "date2", y: 250}, {x: "date3", y: 180}, {x: "date4", y: 220}]
}

const PriceChart = ({navigation}) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        fetch(PorkURL).then((response) => response.json())
            .then((json) => {
                setData(json.price_list);
                setTitle(json.product_name);
            })
            .catch((error) => alert(error))
            .finally(setLoading(false));
    })


    return(
        <SafeAreaView>
            {isLoading ? <ActivityIndicator/> : 
            (
                <ScrollView>

                    <VictoryChart>
                        <VictoryGroup>
                            <VictoryLine data={barData.minPrice}>

                            </VictoryLine>
                        </VictoryGroup>
                    </VictoryChart>

                    <VictoryChart>
                        <VictoryGroup>
                            <VictoryBar data={barData.minPrice}>
                                
                            </VictoryBar>
                        </VictoryGroup>
                    </VictoryChart>

                    <Text>{title}</Text>
                        <View>
                            <FlatList
                            data = {data}
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

export default PriceChart;