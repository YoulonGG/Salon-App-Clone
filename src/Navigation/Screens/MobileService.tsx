import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {width, height} = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    price: '$ 10.00 Up',
    points: '2 pts',
    image: require('../../assets/image/nail.png'),
    name: 'Nail',
  },
  {
    id: '2',
    price: '$ 15.00 Up',
    points: '2 pts',
    image: require('../../assets/image/hairstyle.png'),
    name: 'Make-up for Wedding',
  },
  {
    id: '3',
    price: '$ 10.00 Up',
    points: '1 pts',
    image: require('../../assets/image/salon.png'),
    name: 'Haircut for men',
  },
  {
    id: '4',
    price: '$ 5.00 Up',
    points: '1 pts',
    image: require('../../assets/image/makeup.png'),
    name: 'Haircut for kids',
  },
];

const MobileService = () => {
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
            marginLeft: '19%',
          }}>
          Choose Mobile Service
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 50,
          justifyContent: 'center',
          borderBottomWidth: 0.3,
          borderColor: 'black',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 10,
            color: '#16247d',
          }}>
          Select Services
        </Text>
      </View>
      <FlatList
        data={DATA}
        numColumns={3}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: width * 0.31,
                height: height * 0.19,
                marginHorizontal: 5,
                marginVertical: 10,
              }}>
              <View
                style={{
                  width: '100%',
                  height: '76%',
                  backgroundColor: 'white',
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    backgroundColor: 'skyblue',
                    width: '50%',
                    padding: '2%',
                    borderBottomEndRadius: 5,
                    borderTopStartRadius: 5,
                  }}>
                  <Text style={{color: 'white', fontSize: 12}}>
                    {item.price}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'skyblue',
                    width: '30%',
                    padding: '2%',
                    borderBottomEndRadius: 5,
                    marginTop: 2,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white', fontSize: 12}}>
                    {item.points}
                  </Text>
                </View>
                <Image
                  source={item.image}
                  style={{alignSelf: 'center', width: 50, height: 50}}></Image>
              </View>
              <View
                style={{
                  width: '100%',
                  height: '24%',
                  flex: 1,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: '#16247d',
                  }}>
                  {item.name}
                </Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
      <View
        style={{
          backgroundColor: 'white',
          height: 80,
          width: '100%',
          justifyContent: 'center',
          borderTopWidth: 0.5,
          position: 'absolute',
          bottom: 0,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.push('OrderDetail');
          }}
          style={{
            backgroundColor: '#16247d',
            marginLeft: 20,
            marginRight: 20,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 11,
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MobileService;

const styles = StyleSheet.create({});
