import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Promotion = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#16247d',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign
            name="arrowleft"
            color={'white'}
            size={28}
            style={{
              paddingLeft: '5%',
            }}></AntDesign>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 17,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            paddingLeft: '27%',
          }}>
          Promotions
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.push('DetailPromotion');
        }}
        style={{
          marginTop: 10,
          backgroundColor: 'white',
          width: '95%',
          alignSelf: 'center',
          height: 140,
          borderRadius: 6,
          flexDirection: 'row',
          elevation: 5,
        }}>
        <View
          style={{
            height: 120,
            width: 130,
            marginTop: 10,
            marginLeft: 10,
          }}>
          <Image
            source={require('../../assets/image/haircut2.png')}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 5,
            }}></Image>
          <View
            style={{
              backgroundColor: 'red',
              width: 60,
              paddingLeft: 1,
              paddingRight: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -120,
              borderBottomEndRadius: 5,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>
              (50% OFF)
            </Text>
          </View>
        </View>
        <View style={{marginLeft: 15, marginTop: 10}}>
          <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
            កាត់សក់បុរស
          </Text>
          <Text
            style={{
              color: '#16247d',
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 4,
            }}>
            មែន ស្តាយ
          </Text>
          <Text style={{marginTop: 5, fontSize: 12}}>⭐⭐⭐⭐⭐(5)</Text>
          <Text style={{color: 'black', marginTop: 4, fontSize: 13}}>
            កាត់សក់បុរស free កក់សក់ជូន
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 8,
            }}>
            <FontAwesome6
              name="location-dot"
              size={13}
              color={'#16247d'}
              style={{
                marginTop: 2,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: '#16247d',
                fontWeight: 'bold',
                marginLeft: 5,
              }}>
              None
            </Text>
            <Ionicons
              name="time-outline"
              size={14}
              color={'#16247d'}
              style={{
                marginTop: 2,
                marginLeft: 20,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: '#16247d',
                fontWeight: 'bold',
                marginLeft: 5,
              }}>
              Openning
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Promotion;

const styles = StyleSheet.create({});
