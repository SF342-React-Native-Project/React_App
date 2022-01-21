import React from "react";
import {View, Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState } from 'react';

const PorkURL = "https://dataapi.moc.go.th/gis-product-prices?product_id=P11001&from_date=2021-12-01&to_date=2023-12-31"

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
                <View>
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
                </View>
            )}
            
        </SafeAreaView>

 
    
        
    )
}

export default PriceChart;