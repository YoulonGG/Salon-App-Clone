import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    price: '$ 10.00 Up',
    points: '2 pts',
    image: require('../assets/image/salon1.jpg'),
    name: 'កាត់សក់នារី',
  },
  {
    id: '2',
    price: '$ 5.00 Up',
    points: '2 pts',
    image: require('../assets/image/salon2.jpg'),
    name: 'កាត់សក់បែបCEO',
  },
  {
    id: '3',
    price: '$ 2.50 Up',
    points: '1 pts',
    image: require('../assets/image/salon3.jpg'),
    name: 'កោពុកម៉ាត់បុរស',
  },
  {
    id: '4',
    price: '$ 10.00 Up',
    points: '1 pts',
    image: require('../assets/image/salon2.jpg'),
    name: 'កាត់ក្រចកដៃនិងក្រចកជើងបុរស',
  },
  {
    id: '5',
    price: '$ 5.00 Up',
    points: '1 pts',
    image: require('../assets/image/salon3.jpg'),
    name: 'Haircut for kids',
  },
  {
    id: '6',
    price: '$ 5.00 Up',
    points: '1 pts',
    image: require('../assets/image/salon1.jpg'),
    name: 'Haircut for kids',
  },
  {
    id: '7',
    price: '$ 90.00 Up',
    points: '1 pts',
    image: require('../assets/image/salon2.jpg'),
    name: 'ចាក់សាក់(Tattoo)',
  },
  {
    id: '8',
    price: '$ 25.00 Up',
    points: '1 pts',
    image: require('../assets/image/salon3.jpg'),
    name: 'អ៊ុតសក់ត្រង់បុរស',
  },
  {
    id: '9',
    price: '$ 30.00 Up',
    points: '1 pts',
    image: require('../assets/image/salon2.jpg'),
    name: 'លាប់ពណ៏សក់ Blich',
  },
  {
    id: '10',
    price: '$ 80.00 Up',
    points: '1 pts',
    image: require('../assets/image/salon1.jpg'),
    name: 'មានលុបរូបសាក់និងចោះក្រវិល',
  },
  {
    id: '11',
    price: '$ 10.00 Up',
    points: '1 pts',
    image: require('../assets/image/salon2.jpg'),
    name: 'Massage Face',
  },
  {
    id: '12',
    price: '$ 18.00 Up',
    points: '1 pts',
    image: require('../assets/image/salon2.jpg'),
    name: 'លាបពណ៏សក់បុរសខ្លាំង',
  },
  {
    id: '13',
    price: '$ 5.00 Up',
    points: '1 pts',
    image: require('../assets/image/salon2.jpg'),
    name: 'មានលុបរូបសាក់និងចោះក្រវិល',
  },
  {
    id: '14',
    price: '$ 5.00 Up',
    points: '1 pts',
    image: require('../assets/image/salon1.jpg'),

    name: 'Haircut for kids',
  },
  {
    id: '15',
    price: '$ 5.00 Up',
    points: '1 pts',
    image: require('../assets/image/salon1.jpg'),
    name: 'Haircut for kids',
  },
  {
    id: '16',
    price: '$ 5.00 Up',
    points: '1 pts',
    image: require('../assets/image/salon1.jpg'),
    name: 'Haircut for kids',
  },
  {
    id: '17',
    price: '$ 5.00 Up',
    points: '1 pts',
    image: require('../assets/image/salon1.jpg'),
    name: 'Mid Fad Haircut',
  },
  {
    id: '18',
    price: '$ 5.00 Up',
    points: '1 pts',
    image: require('../assets/image/salon1.jpg'),
    name: 'កាត់សក់កូនក្មេង',
  },
];

const ChooseService = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false}>
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
            Choose Services
          </Text>
          <AntDesign
            name="arrowleft"
            size={25}
            style={{
              color: '#16247d',
            }}
          />
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
              marginLeft: 15,
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Select Services
          </Text>
        </View>
        <FlatList
          style={{marginHorizontal: 5}}
          data={DATA}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: width * 0.3,
                  height: height * 0.21,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginHorizontal: 5,
                  marginVertical: 5,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '75%',
                  }}>
                  <ImageBackground
                    source={item.image}
                    style={{
                      width: '100%',
                      height: '100%',
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
                      <Text style={{color: 'white', fontSize: 10}}>
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
                      <Text style={{color: 'white', fontSize: 10}}>
                        {item.points}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '25%',
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
        <View style={{marginTop: 40}}></View>
      </ScrollView>
      <View
        style={{
          height: 50,
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.push('OrderDetail');
          }}
          style={{
            backgroundColor: '#16247d',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 11,
            borderRadius: 5,
            width: '90%',
            alignSelf: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChooseService;

const styles = StyleSheet.create({});
