import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const DATA = [
  {
    id: '1',
    name: 'មែន​ ស្តាយ',
    phoneNumber: '093383965',
    date: 'Sat, 18 Nov 2023 09:27 AM',
    status: 'Paid',
    price: '$ 10.00',
    image: require('../assets/image/haircut.jpg'),
    Service: 'ចាក់សាក់(Tattoo)',
  },
  {
    id: '2',
    name: 'Ya Ya',
    phoneNumber: '089217145',
    date: 'Sat, 18 Nov 2023 11:18 AM',
    status: 'Paid',
    price: '$ 12.50',
    image: require('../assets/image/woman.png'),
    Service: 'ម៉ាស់សាមុខ',
  },
  {
    id: '3',
    name: 'មែន​ ស្តាយ',
    phoneNumber: '093383965',
    date: 'Sat, 18 Nov 2023 11:10 AM',
    status: 'Paid',
    price: '$ 5.00',
    image: require('../assets/image/haircut.jpg'),
    Service: 'កាត់សក់បែបCEO',
  },
];

const Payment = () => {
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
              paddingLeft: '5%',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 17,
            color: 'white',
            textAlign: 'center',
            paddingLeft: '30%',
          }}>
          Payment
        </Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.push('OrderDetail2');
              }}
              style={{
                backgroundColor: 'white',
                width: '95%',
                height: 200,
                alignSelf: 'center',
                marginVertical: 5,
                borderRadius: 5,
                elevation: 3,
              }}>
              <View style={{width: '100%', height: '75%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{width: '25%'}}>
                    <View
                      style={{
                        backgroundColor: '#00DEFF',
                        width: 60,
                        borderBottomEndRadius: 7,
                        borderTopStartRadius: 7,
                        padding: 2,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        Booking
                      </Text>
                    </View>
                    <Image
                      source={item.image}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 50,
                        marginLeft: '10%',
                      }}></Image>
                  </View>
                  <View style={{width: '75%', paddingRight: '5%'}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#16247d',
                          fontWeight: 'bold',
                        }}>
                        {item.name}
                      </Text>
                    </View>
                    <Text style={{fontSize: 14, color: 'black', paddingTop: 0}}>
                      {item.phoneNumber}
                    </Text>
                    <Text style={{paddingTop: 5, fontSize: 14, color: 'red'}}>
                      {item.date}
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#F5F5F5',
                      marginTop: '5%',
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      marginLeft: '4%',
                      borderRadius: 15,
                    }}>
                    <Text style={{color: '#16247d', fontSize: 14}}>
                      {item.Service}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  height: '25%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderTopWidth: 0.3,
                  justifyContent: 'space-between',
                  paddingHorizontal: '3%',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'red', fontSize: 16}}>{item.price}</Text>
                  <Text
                    style={{
                      backgroundColor: '#0087BD',
                      paddingHorizontal: 10,
                      paddingVertical: 2,
                      borderRadius: 20,
                      color: 'white',
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginLeft: '5%',
                    }}>
                    {item.status}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('ShopInformation');
                    }}>
                    <Image
                      source={require('../assets/image/man2.png')}
                      style={{
                        marginRight: 10,
                        width: 25,
                        height: 25,
                      }}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Message');
                    }}>
                    <Image
                      source={require('../assets/image/gmail.png')}
                      style={{marginRight: 10, width: 25, height: 25}}></Image>
                  </TouchableOpacity>
                  <Image
                    source={require('../assets/image/telephone.png')}
                    style={{width: 25, height: 25}}></Image>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />
      <View style={{marginTop: 50}}></View>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({});
