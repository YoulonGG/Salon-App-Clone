import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Entypto from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const DATA = [
  {
    id: '1',
    title: 'កាត់សក់នារី',
    name: 'មែន ស្តាយ',
    descriptions: 'ជួបជាមួយជាងដែលមានបទពិសោធន៏និង...',
    image: require('../../assets/image/salon1.jpg'),
    price: '$ 10.00',
  },
  {
    id: '2',
    title: 'កាត់សក់បែបCEO',
    name: 'មែន ស្តាយ',
    descriptions: 'ម៉ូតសម្រាប់បងប្អូនជានាយក(CEO)',
    image: require('../../assets/image/may.jpg'),
    price: '$ 5.00',
  },
  {
    id: '3',
    title: 'ចាក់សាក់',
    name: 'មែន ស្តាយ',
    descriptions: 'ទទួលសាក់គ្រប់ប្រភេទ',
    image: require('../../assets/image/me.jpg'),
    price: '$ 90.00',
  },
  {
    id: '4',
    title: 'កាត់សក់នារី',
    name: 'មែន ស្តាយ',
    descriptions: 'ជួបជាមួយជាងដែលមានបទពិសោធន៏និង...',
    image: require('../../assets/image/salon1.jpg'),
    price: '$ 10.00',
  },
  {
    id: '5',
    title: 'កាត់សក់នារី',
    name: 'មែន ស្តាយ',
    descriptions: 'ជួបជាមួយជាងដែលមានបទពិសោធន៏និង...',
    image: require('../../assets/image/salon1.jpg'),
    price: '$ 10.00',
  },
  {
    id: '6',
    title: 'កាត់សក់នារី',
    name: 'មែន ស្តាយ',
    descriptions: 'ជួបជាមួយជាងដែលមានបទពិសោធន៏និង...',
    image: require('../../assets/image/salon1.jpg'),
    price: '$ 10.00',
  },
  {
    id: '7',
    title: 'កាត់សក់នារី',
    name: 'មែន ស្តាយ',
    descriptions: 'ជួបជាមួយជាងដែលមានបទពិសោធន៏និង...',
    image: require('../../assets/image/salon1.jpg'),
    price: '$ 10.00',
  },
];

const SERVICES = () => {
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
            marginLeft: '27%',
          }}>
          Our Services
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={DATA}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('SubService');
                }}
                style={{
                  width: '95%',
                  height: 130,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  marginTop: 10,
                  borderRadius: 5,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingHorizontal: '2%',
                  paddingVertical: '2%',
                  elevation: 3,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '80%',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#F5F5F5',
                      width: 110,
                      height: 115,
                      justifyContent: 'center',
                      borderRadius: 5,
                    }}>
                    <Image
                      source={item.image}
                      style={{
                        width: '100%',
                        height: '90%',
                        alignSelf: 'center',
                      }}></Image>
                  </View>
                  <View style={{flex: 1, marginLeft: 10}}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#16247d',
                      }}>
                      {item.name}
                    </Text>
                    <Text style={{fontSize: 12}}>⭐⭐⭐⭐⭐(5)</Text>
                    <Text style={{fontSize: 14, color: 'black'}}>
                      {item.descriptions}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Entypo
                            name="location-pin"
                            size={13}
                            color="#144389"
                          />
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#144389',
                              fontWeight: 'bold',
                            }}>
                            None
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 4,
                            marginLeft: 15,
                          }}>
                          <Ionicons
                            name="time-outline"
                            size={14}
                            color={'#16247d'}
                            style={{
                              marginTop: 2,
                            }}
                          />
                          <Text
                            style={{
                              fontSize: 12,
                              color: '#144389',
                              fontWeight: 'bold',
                            }}>
                            Openning
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{width: '15%', height: '100%'}}>
                  <View
                    style={{
                      width: '100%',
                      height: '35%',
                    }}>
                    <Text style={{fontSize: 15, color: 'red'}}>
                      {item.price}
                    </Text>
                    <Text style={{fontSize: 13, color: 'red'}}>Up</Text>
                  </View>
                  <View style={{width: '100%', height: '45%'}}></View>
                  <View
                    style={{
                      height: '20%',
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <AntDesign name="hearto" size={22} color={'pink'} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
        />
        <View style={{borderWidth: 0.5, marginTop: 70}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SERVICES;

const styles = StyleSheet.create({});
