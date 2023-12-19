import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Data = [
  {
    id: '1',
    name: 'មែន​ ស្តាយ',
    phoneNumber: '093383965',
    date: 'Sat, 18 Nov 2023 09:27 AM',
    status: 'Unpaid',
    price: '$ 10.00',
    image: require('../assets/image/haircut.jpg'),
    Service: 'ចាក់សាក់(Tattoo)',
  },
  {
    id: '2',
    name: 'Ya Ya',
    phoneNumber: '089217145',
    date: 'Sat, 18 Nov 2023 11:18 AM',
    status: 'Unpaid',
    price: '$ 12.50',
    image: require('../assets/image/woman.png'),
    Service: 'ម៉ាស់សាមុខ',
  },
  {
    id: '3',
    name: 'មែន​ ស្តាយ',
    phoneNumber: '093383965',
    date: 'Sat, 18 Nov 2023 11:10 AM',
    status: 'Unpaid',
    price: '$ 5.00',
    image: require('../assets/image/haircut.jpg'),
    Service: 'កាត់សក់បែបCEO',
  },
  {
    id: '4',
    name: 'ABC007',
    phoneNumber: '093383965',
    date: 'Sat, 18 Nov 2023 02:52 AM',
    status: 'Unpaid',
    price: '$ 10.00',
    image: require('../assets/image/haircut5.jpg'),
    Service: 'ម៉ាស្សាមុខ',
  },
  {
    id: '5',
    name: 'មែន​ ស្តាយ',
    phoneNumber: '093383965',
    date: 'Sat, 18 Nov 2023 09:27 AM',
    status: 'Unpaid',
    price: '$ 25.00',
    image: require('../assets/image/haircut.jpg'),
    Service: 'Make-up for Wedding',
  },
];

const BookingAndOrder = () => {
  const navigation: any = useNavigation();
  const BtnAlert = () =>
    Alert.alert('Options', 'Cancel Booking', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <SafeAreaView>
      <ScrollView>
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
            Booking & Order
          </Text>
          <AntDesign
            name="arrowleft"
            size={25}
            style={{
              color: '#16247d',
            }}
          />
        </View>
        {Data.map((e, index) => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                width: '95%',
                height: 200,
                alignSelf: 'center',
                marginTop: 10,
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
                        backgroundColor: '#008b8b',
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
                      source={e.image}
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
                        {e.name}
                      </Text>
                      <TouchableOpacity
                        onPress={BtnAlert}
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 50,
                          backgroundColor: '#F5F5F5',
                          justifyContent: 'center',
                          alignContent: 'center',
                        }}>
                        <SimpleLineIcons
                          name="options-vertical"
                          size={15}
                          color={'black'}
                          style={{
                            alignSelf: 'center',
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                    <Text style={{fontSize: 14, color: 'black', paddingTop: 0}}>
                      {e.phoneNumber}
                    </Text>
                    <Text style={{paddingTop: 5, fontSize: 14, color: 'red'}}>
                      {e.date}
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
                      {e.Service}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  height: '25%',
                  // backgroundColor: 'cyan',
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderTopWidth: 0.3,
                  justifyContent: 'space-between',
                  paddingHorizontal: '3%',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'red', fontSize: 16}}>{e.price}</Text>
                  <Text
                    style={{
                      backgroundColor: 'orange',
                      paddingHorizontal: 10,
                      paddingVertical: 2,
                      borderRadius: 20,
                      color: 'white',
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginLeft: '5%',
                    }}>
                    {e.status}
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
            </View>
          );
        })}
        <View style={{width: 1, marginTop: 20}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingAndOrder;

const styles = StyleSheet.create({});
