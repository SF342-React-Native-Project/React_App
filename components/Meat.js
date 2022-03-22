import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {useEffect, useState} from 'react';

const Meat = props => {
  const URL = props.URLs;

  const [isLoading, setLoading] = useState(true);
  const [name, setName] = useState([]);
  const [pricelist, setPricelist] = useState([]);

  var date = '';
  var newPrice = 0;
  var oldPrice = 0;
  var priceDifference = 0;
  var colorPrice = '#f2f2f2';
  var imageTri = require('./img/equal.png');
  var imageType = require('./img/pig.png');

  async function fetchData() {
    const res = await fetch(URL);
    res
      .json()
      .then(res => {
        setName(res.product_name),
          setPricelist(res.price_list),
          setLoading(false);
      })
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!isLoading) {
    date = pricelist[pricelist.length-1].date.substring(0, 10);
    newPrice = (pricelist[pricelist.length-1].price_max + pricelist[pricelist.length-1].price_min) / 2;
    oldPrice = (pricelist[pricelist.length-2].price_max + pricelist[pricelist.length-2].price_min) / 2;
    if (newPrice < oldPrice){
      colorPrice = '#00d15a';
      priceDifference = oldPrice - newPrice;
      imageTri = require('./img/tri_up.png');
    } 
    if (newPrice == oldPrice) {
      colorPrice = '#f2f2f2';
      priceDifference = 0;
      imageTri = require('./img/equal.png');
    }
    if (newPrice > oldPrice) {
      colorPrice = '#ff1616';
      priceDifference = newPrice - oldPrice;
      imageTri = require('./img/tri_down.png');
    }

    // Meat
    if (name.substr(0, 4) == 'สุกร') {
      imageType = require('./img/pig.png');
    }
    if (name.substr(0, 3) == 'ไก่') {
      imageType = require('./img/chiken.png');
    }
    if (name.substr(0, 3) == 'ไข่') {
      imageType = require('./img/egg.png');
    }
    if (name.substr(0, 7) == 'เนื้อโค') {
      imageType = require('./img/cow.png');
    }

    // Vegetable
    if (name.substr(0, 3) == 'ผัก') {
      imageType = require('./img/vegetable.png');
    }
    if (name.substr(0, 6) == 'กะหล่ำ') {
      imageType = require('./img/vegetable.png');
    }
    if (name.substr(0, 4) == 'มะระ') {
      imageType = require('./img/vegetable.png');
    }
    if (name.substr(0, 6) == 'มะเขือ') {
      imageType = require('./img/vegetable.png');
    }
    if (name.substr(0, 4) == 'ถั่ว') {
      imageType = require('./img/vegetable.png');
    }
    if (name.substr(0, 6) == 'แตงกวา') {
      imageType = require('./img/vegetable.png');
    }
    if (name.substr(0, 3) == 'ฟัก') {
      imageType = require('./img/vegetable.png');
    }
    if (name.substr(0, 9) == 'หัวผักกาด') {
      imageType = require('./img/vegetable.png');
    }
    if (name.substr(0, 7) == 'หน่อไม้') {
      imageType = require('./img/vegetable.png');
    }
    if (name.substr(0, 7) == 'ข้าวโพด') {
      imageType = require('./img/vegetable.png');
    }
    if (name.substr(0, 5) == 'มะนาว') {
      imageType = require('./img/vegetable.png');
    }
    if (name.substr(0, 3) == 'ขิง') {
      imageType = require('./img/vegetable.png');
    }

    // Fruit
    if (name.substr(0, 3) == 'ส้ม') {
      imageType = require('./img/fruit.png');
    }
    if (name.substr(0, 6) == 'มะละกอ') {
      imageType = require('./img/fruit.png');
    }
    if (name.substr(0, 5) == 'แตงโม') {
      imageType = require('./img/fruit.png');
    }
    if (name.substr(0, 5) == 'กล้วย') {
      imageType = require('./img/fruit.png');
    }
    if (name.substr(0, 5) == 'ฝรั่ง') {
      imageType = require('./img/fruit.png');
    }
    if (name.substr(0, 6) == 'มะม่วง') {
      imageType = require('./img/fruit.png');
    }
    if (name.substr(0, 7) == 'สับปะรด') {
      imageType = require('./img/fruit.png');
    }
    if (name.substr(0, 5) == 'ส้มโอ') {
      imageType = require('./img/fruit.png');
    }
  }

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.item}>
          <View style={styles.imageContainer}>
            <Image source={imageType} style={styles.pigLogo} />
          </View>
          <View style={styles.textDetail}>
            <Text style={styles.itemTextTop}>{name}</Text>
            <Text style={{color: colorPrice, fontWeight: 'bold', fontSize: 28, marginBottom: 10}}>
              {newPrice.toFixed(2)} <Text style={{fontSize: 12, color: '#FFF', fontFamily: 'Mitr-Regular'}}> บาท/กก.</Text>
            </Text>
            <Text style={styles.itemTextBottom}>ข้อมูลล่าสุด ณ วันที่ {date}</Text>
          </View>
          <View style={styles.textDetailRight}>
            <Text style={{fontSize: 12, color: colorPrice}}> <Image source={imageTri} style={{width: 20, height: 20,}}/> {priceDifference.toFixed(2)} </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemTextTop: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Mitr-Regular',
  },
  itemTextMid: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
  },
  itemTextBottom: {
    color: '#FFFFFF',
    fontSize: 10,
    marginBottom: 5,
    fontFamily: 'Mitr-Light',
  },
  textDetail: {
    flex: 2,
    justifyContent: 'space-around',
    marginTop: 6,
  },
  textDetailRight: {
    justifyContent: 'space-around',
    marginLeft: -40,
    marginRight: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  pigLogo: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  item: {
    backgroundColor: '#083370',
    height: 110,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Meat;