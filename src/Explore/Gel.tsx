import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Data = [
  {
    id: '1',
    title: 'កាត់ក្រចក',
    name: '007 haircut',
    image: require('../assets/image/salon2.jpg'),
    price: '$ 2.00',
    description: '',
  },
  {
    id: '2',
    title: 'ប្ដូរពណ៍',
    name: 'Mr.Ngol Barbershop',
    image: require('../assets/image/salon2.jpg'),
    price: '$ 10.00',
    description: 'ពណ៍ប្រាក់',
  },
];

const {width, height} = Dimensions.get('window');

const Bleaching = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
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
          GEL Color
        </Text>
      </View>
      <FlatList
        data={Data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                height: 130,
                width: '95%',
                alignSelf: 'center',
                alignItems: 'center',
                marginTop: 10,
                backgroundColor: 'white',
                borderRadius: 5,
                flexDirection: 'row',
                elevation: 5,
                zIndex: 1000,
              }}>
              <Image
                style={{
                  width: '30%',
                  height: '80%',
                  borderRadius: 4,
                  marginTop: 5,
                  marginLeft: 10,
                }}
                source={item.image}
              />
              <View
                style={{
                  flex: 1,
                  marginLeft: 15,
                  justifyContent: 'space-between',
                  width: '70%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 5,
                    marginTop: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: 'red',
                      textAlign: 'center',
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                    {item.price}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#144389',
                  }}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 15, color: 'black'}}>
                  ⭐⭐⭐⭐⭐(0)
                </Text>
                <Text style={{fontSize: 15, color: 'black'}}>
                  {item.description}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 5,
                    }}>
                    <Entypo name="location-pin" size={13} color="#144389" />
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
                      marginBottom: 5,
                      padding: 4,
                    }}>
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
                        color: '#144389',
                        fontWeight: 'bold',
                      }}>
                      Openning
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Bleaching;

const styles = StyleSheet.create({});
