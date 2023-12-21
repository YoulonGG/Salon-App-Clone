import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export const DetailPromotion = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: 40,
          backgroundColor: '#16247d',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: '5%',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign
            name="arrowleft"
            size={25}
            style={{
              color: 'white',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 17,
            color: 'white',
            textAlign: 'center',
          }}>
          កាត់សក់បុរស
        </Text>
        <AntDesign
          name="arrowleft"
          size={25}
          style={{
            color: '#16247d',
          }}
        />
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.push('SubService');
        }}
        style={{
          backgroundColor: 'white',
          height: 120,
          width: '95%',
          alignSelf: 'center',
          marginTop: 15,
          borderRadius: 5,
          elevation: 3,
          zIndex: 1000,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: '100%',
            width: '100%',
          }}>
          <Image
            source={require('../assets/image/haircut5.jpg')}
            style={{
              width: '30%',
              height: '80%',
              marginTop: 10,
              marginLeft: '2%',
              borderRadius: 5,
            }}></Image>
          <View style={{marginLeft: 15}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 7,
              }}>
              កាត់សក់បុរស
            </Text>
            <Text
              style={{
                color: '#16247d',
                fontSize: 14,
                fontWeight: 'bold',
                marginTop: 2,
              }}>
              មែន ស្តាយ
            </Text>
            <Text
              style={{
                marginTop: 2,
              }}>
              ⭐⭐⭐⭐⭐(4)
            </Text>
            <Text style={{fontSize: 12, color: 'black', marginTop: 2}}>
              ហាងយើងខ្ញុំផ្ដល់ជូនទាំងគុណភាព និងអនាម័យ...
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
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
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
