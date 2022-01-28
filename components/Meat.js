import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Meat = (props) => {

  return (
    <View style={styles.item}>
        <View style={styles.imageContainer}>
          <Image source={require('./img/pigP.png')} style={styles.pigLogo}/>
        </View>
        <View style={styles.textDetail}>
          <Text style={styles.itemText}>{props.text}</Text>
          <Text style={styles.itemText}>200 บาท</Text>
          <Text style={styles.itemText}>12/12/12</Text>
        </View>    
    </View>
  )
}

const styles = StyleSheet.create({
  textDetail: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 10,
  },  
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  pigLogo: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },  
  item: {
    backgroundColor: 'rgb(8,26,59)',
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
  itemText: {
    // maxWidth: '100%',
    color: "#FFFFFF",
    fontWeight: 'bold',
    fontSize: 20,
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