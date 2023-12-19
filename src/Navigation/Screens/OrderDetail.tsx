import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const DATA = [
  {
    id: '1',
    name: 'Nails',
    point: '2 pts',
    price: '$ 10.00',
    image: require('../../assets/image/nail.png'),
  },
  {
    id: '2',
    name: 'Make-up for Wedding',
    point: '2 pts',
    price: '$ 15.00',
    image: require('../../assets/image/hairstyle.png'),
  },
  {
    id: '3',
    name: 'Haircut for men',
    point: '1 pts',
    price: '$ 10.00',
    image: require('../../assets/image/salon.png'),
  },
  {
    id: '4',
    name: 'Haircut for kids',
    point: '1 pts',
    price: '$ 5.00',
    image: require('../../assets/image/kidd.png'),
  },
];
const OrderDetail = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              marginLeft: '27%',
            }}>
            Order Detail
          </Text>
        </View>

        <Text
          style={{
            color: '#16247d',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 15,
          }}>
          Shop Information
        </Text>
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 30,
              marginTop: 15,
            }}>
            Name:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 15,
              marginTop: 15,
            }}>
            មែន​ ស្តាយ
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 27,
            }}>
            Phone:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 15,
            }}>
            089217145
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 15,
            }}>
            Address:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 15,
            }}>
            103 St 512, Phnom Penh, Cambodia
          </Text>
        </View>
        <View
          style={{
            borderColor: 'black',
            borderBottomWidth: 0.5,
            marginTop: 15,
          }}></View>
        <Text
          style={{
            color: '#16247d',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 15,
          }}>
          Order Detail
        </Text>
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 45,
              marginTop: 15,
            }}>
            Date:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 15,
              marginTop: 15,
            }}>
            Tuesday, 7 November 2023
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 33,
              marginTop: 15,
            }}>
            Status:
          </Text>
          <View
            style={{
              backgroundColor: 'green',
              marginLeft: 15,
              marginTop: 15,
              paddingLeft: 20,
              paddingRight: 20,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              Order
            </Text>
          </View>
        </View>
        <View
          style={{
            borderColor: 'black',
            borderBottomWidth: 0.5,
            marginTop: 15,
          }}></View>
        <View
          style={{
            justifyContent: 'space-between',
            width: '100%',
            height: 'auto',
            flexDirection: 'row',
            paddingHorizontal: '4%',
          }}>
          <Text
            style={{
              color: '#16247d',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Selected Services
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              navigation.push('MobileService');
            }}>
            <Text
              style={{
                color: '#16247d',
                fontSize: 16,
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Add Services +
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: '100%',
                  height: 'auto',
                  // backgroundColor: 'white',
                  justifyContent: 'space-between',
                  marginHorizontal: '4%',
                  marginTop: 15,
                  flexDirection: 'row',
                }}>
                <View style={{flexDirection: 'row', width: '76%'}}>
                  <View
                    style={{
                      width: 60,
                      height: 80,
                      backgroundColor: 'white',
                      borderRadius: 5,
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={item.image}
                      style={{
                        alignSelf: 'center',
                        height: 50,
                        width: 50,
                      }}></Image>
                  </View>
                  <View style={{marginLeft: '2%'}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#16247d',
                      }}>
                      {item.name}
                    </Text>
                    <Text style={{fontSize: 14, color: 'black'}}>
                      Point: {item.point}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '20%',
                    justifyContent: 'center',
                    marginRight: '4%',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 15,
                      alignSelf: 'center',
                    }}>
                    {item.price}
                  </Text>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
        <View
          style={{
            borderColor: 'black',
            borderBottomWidth: 0.5,
            marginTop: 15,
          }}></View>
        <Text
          style={{
            color: '#16247d',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 15,
            marginTop: 15,
          }}>
          Payment Summary
        </Text>
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 30,
              marginTop: 15,
            }}>
            Total Amount:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 15,
              marginTop: 15,
            }}>
            $ 40.00
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 63,
              marginTop: 5,
            }}>
            Discount:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 15,
              marginTop: 5,
            }}>
            $ 0.00
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 45,
              marginTop: 5,
            }}>
            Grand Total:
          </Text>
          <Text
            style={{
              color: 'red',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 15,
              marginTop: 5,
            }}>
            $ 40.00
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 42,
              marginTop: 5,
            }}>
            Total Points:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 15,
              marginTop: 5,
            }}>
            2 pts
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 37,
              marginTop: 5,
            }}>
            Spent Points:
          </Text>
          <Text
            style={{
              color: '#16247d',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 15,
              marginTop: 5,
              textDecorationLine: 'underline',
            }}>
            0 pts
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 78,
              marginTop: 5,
            }}>
            Status:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 15,
              marginTop: 5,
            }}>
            Unpaid
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 30,
              marginTop: 5,
            }}>
            Payment Type:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: 15,
              marginTop: 5,
            }}>
            None
          </Text>
        </View>
        <View
          style={{
            borderColor: 'black',
            borderBottomWidth: 1,
            marginTop: 80,
          }}></View>
      </ScrollView>
      <View
        style={{
          height: 60,
          width: '100%',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#8467D7',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 11,
            borderRadius: 2,
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Submit Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({});
