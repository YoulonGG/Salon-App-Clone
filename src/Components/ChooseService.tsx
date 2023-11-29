import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const ChooseService = () => {
  const navigation: any = useNavigation();
  const Data = [
    {
      title: 'កាត់សក់នារី',
      price: '10.00$',
      img: require('../assets/image/woman.png'),
    },
    {
      title: 'កាត់បុរស',
      price: '6.00$',
      img: require('../assets/image/man.png'),
    },
    {
      title: 'កាត់សក់យុវវ័យ',
      price: '15.00$',
      img: require('../assets/image/man1.png'),
    },
    {
      title: 'កាត់សក់កូនក្មេង',
      price: '10.00$',
      img: require('../assets/image/girl.png'),
    },
    {
      title: 'កាត់សក់នារី',
      price: '10.00$',
      img: require('../assets/image/woman.png'),
    },
    {
      title: 'កាត់បុរស',
      price: '6.00$',
      img: require('../assets/image/man.png'),
    },
    {
      title: 'កាត់សក់យុវវ័យ',
      price: '15.00$',
      img: require('../assets/image/man1.png'),
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            width: 'auto',
            height: 60,
            backgroundColor: '#16247d',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 17,
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
              marginLeft: '28%',
            }}>
            Choose Services
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
              marginLeft: 15,
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Select Services
          </Text>
        </View>
        {Data.map((e, index) => {
          return (
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 125,
                  height: 175,
                  marginLeft: 10,
                  borderRadius: 6,
                }}>
                <View
                  style={{
                    width: 125,
                    backgroundColor: 'white',
                    height: 120,
                    borderRadius: 6,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: 'skyblue',
                      padding: 2,
                      borderRadius: 2,
                      marginLeft: -55,
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      {e.price}
                    </Text>
                  </View>
                  <Image
                    source={e.img}
                    style={{
                      width: 70,
                      height: 70,
                    }}></Image>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#16247d',
                  }}>
                  {e.title}
                </Text>
              </View>
              <View
                style={{
                  width: 125,
                  height: 175,
                  marginLeft: 10,
                  borderRadius: 6,
                }}>
                <View
                  style={{
                    width: 125,
                    backgroundColor: 'white',
                    height: 120,
                    borderRadius: 6,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: 'skyblue',
                      padding: 2,
                      borderRadius: 2,
                      marginLeft: -65,
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      {e.price}
                    </Text>
                  </View>
                  <Image
                    source={e.img}
                    style={{
                      width: 70,
                      height: 70,
                    }}></Image>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#16247d',
                  }}>
                  {e.title}
                </Text>
              </View>
              <View
                style={{
                  width: 125,
                  height: 175,
                  marginLeft: 10,
                  borderRadius: 6,
                }}>
                <View
                  style={{
                    width: 125,
                    backgroundColor: 'white',
                    height: 120,
                    borderRadius: 6,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: 'skyblue',
                      padding: 2,
                      borderRadius: 2,
                      marginLeft: -55,
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      {e.price}
                    </Text>
                  </View>
                  <Image
                    source={e.img}
                    style={{
                      width: 70,
                      height: 70,
                    }}></Image>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#16247d',
                  }}>
                  {e.title}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseService;

const styles = StyleSheet.create({});
