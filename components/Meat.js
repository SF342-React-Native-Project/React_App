import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Meat = (props) => {

  return (
    <View style={styles.item}>
        <View style={styles.imageContainer}>
          <Image source={require('./img/pigP.png')} style={styles.pigLogo}/>
        </View>
        <View style={styles.textDetail}>
          <Text style={styles.itemTextTop}>{props.text}</Text>
          <Text style={styles.itemTextMid}>200.00 <Text style={{ fontSize: 14, color: '#FFF'}}>บาท/กก.</Text></Text>
          <Text style={styles.itemTextBottom}>12/12/12</Text>
        </View>    
    </View>
  )
}

const styles = StyleSheet.create({
  itemTextTop: {
    // maxWidth: '100%',
    color: "#FFFFFF",
    fontWeight: 'bold',
    fontSize: 14,
  },
  itemTextMid: {
    // maxWidth: '100%',
    color: "red",
    fontWeight: 'bold',
    fontSize: 30,
  },
  itemTextBottom: {
    // maxWidth: '100%',
    color: "#FFFFFF",
    fontWeight: 'bold',
    fontSize: 14,
  },
  textDetail: {
    flex: 2,
    justifyContent: 'space-around',
    margin: 10,
  },  
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    
  },
  pigLogo: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },  
  item: {
    backgroundColor: '#083370',
    height: 200,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Meat;