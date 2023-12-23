import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';

const DATA = [
  {
    num: '1',
    id: '1',
    title: 'Nails',
    code: 'Code: B63 (Men)',
    point: 'Point: 2pt',
    price: '$ 10.00',
  },
  {
    num: '2',
    id: '2',
    title: 'Make-up for wedding',
    code: 'Code: BC2',
    point: 'Point: 2pt',
    price: '$ 15.00',
  },
  {
    num: '3',
    id: '3',
    title: 'Haircut for men',
    code: 'Code: BD1',
    point: 'Point: 1pt',
    price: '$ 10.00',
  },
  {
    num: '4',
    id: '4',
    title: 'Haircut for kids',
    code: 'Code: BE3',
    point: 'Point: 1pt',
    price: '$ 5.00',
  },
  {
    num: '5',
    id: '5',
    title: 'Haircut for kids',
    code: 'Code: BE3',
    point: 'Point: 1pt',
    price: '$ 5.00',
  },
  {
    num: '6',
    id: '6',
    title: 'Haircut for kids',
    code: 'Code: BE3',
    point: 'Point: 1pt',
    price: '$ 5.00',
  },
];

const Receipt = () => {
  const navigation: any = useNavigation();
  const createTwoButtonAlert = () =>
    Alert.alert('Save Receipt', 'Are you sure to save this receipt?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            Receipt Detail
          </Text>
          <TouchableOpacity onPress={createTwoButtonAlert}>
            <Feather name="download" size={25} color={'white'} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: 120,
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingRight: '5%',
          }}>
          <Image
            source={require('../../assets/image/long.png')}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
            }}></Image>
          <View
            style={{justifyContent: 'space-between', paddingVertical: '3%'}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
              មែន​ ស្តាយ​ Haircut's Receipt
            </Text>
            <View style={{}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: 'black',
                  textAlign: 'right',
                }}>
                No: #UN000142
              </Text>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'black',
                  }}>
                  Date:
                </Text>
                <Text style={{fontSize: 14, color: 'black', marginLeft: 10}}>
                  Thu 26 Oct 2023
                </Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text
                  style={{
                    textAlign: 'right',
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'black',
                  }}>
                  Phone:
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    color: 'black',
                    fontSize: 14,
                    textAlign: 'right',
                  }}>
                  093383965
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#DCDCDC',
            width: '90%',
            alignSelf: 'center',
          }}></View>
        <View style={{marginVertical: 10}}>
          <View style={{flexDirection: 'row', marginLeft: 16}}>
            <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
              Customer:{' '}
            </Text>
            <Text style={{fontSize: 14, color: 'black'}}>Dev Tester</Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 16}}>
            <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
              Phone:{' '}
            </Text>
            <Text style={{fontSize: 14, color: 'black'}}>(+855) 093383965</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#DCDCDC',
            width: '90%',
            alignSelf: 'center',
          }}></View>
        <View>
          <FlatList
            data={DATA}
            style={{}}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    height: 65,
                    width: '100%',
                    marginVertical: 10,
                    paddingHorizontal: 16,
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      {item.num}
                    </Text>
                    <View style={{marginLeft: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#16247d',
                          fontWeight: 'bold',
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{fontSize: 13, color: 'black', marginTop: 3}}>
                        {item.code}
                      </Text>
                      <Text
                        style={{fontSize: 13, color: 'black', marginTop: 3}}>
                        {item.point}
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      {item.price}
                    </Text>
                    <Text style={{marginLeft: 5, fontSize: 13, color: 'grey'}}>
                      (1)
                    </Text>
                  </View>
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>
        <View
          style={{
            borderWidth: 0.7,
            borderColor: '#DCDCDC',
            width: '90%',
            alignSelf: 'center',
          }}></View>
        <View
          style={{
            width: '100%',
            height: 110,
            marginTop: 10,
            flexDirection: 'row',
            paddingHorizontal: 16,
          }}>
          <View
            style={{
              width: '40%',
              height: '100%',
            }}></View>
          <View
            style={{
              width: '60%',
              height: '100%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '50%',
                height: '100%',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                Total Amount:
              </Text>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                Discount:
              </Text>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                Grand Total:
              </Text>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                Status:
              </Text>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                Payment Type:
              </Text>
            </View>
            <View
              style={{
                width: '50%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                $ 59.00
              </Text>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                $ 0.00
              </Text>
              <Text style={{fontSize: 14, color: 'red', fontWeight: 'bold'}}>
                $ 59.00
              </Text>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                Paid
              </Text>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
                Cash
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 30}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Receipt;

const styles = StyleSheet.create({});
