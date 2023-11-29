import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

const {width, height} = Dimensions.get('window');
const Review = () => {
  const navigation: any = useNavigation();
  const CmtList = [
    {
      id: '1',
      name: 'John Youlong',
      title: 'The best!',
      date: '11 Nov 2023 At 9:31 AM',
      img: require('../../assets/image/man1.png'),
    },
    {
      id: '2',
      name: 'ផាន​ ផន',
      title: 'Good brother',
      date: '25 Sep 2023 At 12:56 AM',
      img: require('../../assets/image/man.png'),
    },
    {
      id: '3',
      name: 'Saroeun Tim',
      title: 'Good Bro',
      date: '26 Sep 2023 At 12:56 AM',
      img: require('../../assets/image/woman.png'),
    },
    {
      id: '4',

      name: 'Justin',
      title: 'Good brother',
      date: '10 Dec 2023 At 12:56 AM',
      img: require('../../assets/image/monk.png'),
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
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
              paddingLeft: '20%',
            }}>
            មែន​ ស្តាយ​'s Review
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#16247d',
            marginTop: 10,
            marginLeft: 20,
          }}>
          Excellent
        </Text>
        <Text style={{marginTop: 5, marginLeft: 20, fontSize: 20}}>
          ⭐ ⭐ ⭐ ⭐ ⭐
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            height: 80,
            borderRadius: 5,
            marginTop: 10,
            alignSelf: 'center',
            borderWidth: 0.5,
            borderColor: 'black',
          }}>
          <TextInput
            placeholder="Write your review here..."
            style={{
              fontSize: 15,
              color: 'black',
              marginLeft: 5,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
            height: 50,
            borderRadius: 6,
            backgroundColor: '#4cbb17',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            Edit Review
          </Text>
        </TouchableOpacity>
        <View style={{borderWidth: 0.3, marginTop: 15}}></View>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 15,
            fontSize: 16,
            color: '#16247d',
          }}>
          Review and Rating
        </Text>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{marginLeft: 15, alignItems: 'center', width: '30%'}}>
            <Text
              style={{
                fontSize: 15,
                color: '#16247d',
                marginLeft: 10,
                marginTop: 20,
              }}>
              4.5
            </Text>
            <Text style={{marginLeft: 10}}>⭐⭐⭐⭐⭐</Text>
            <Text style={{color: '#16247d', marginLeft: 10}}>4 Review</Text>
          </View>
          <View style={{marginTop: 20, width: '70%', paddingLeft: '7%'}}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="star"
                size={13}
                color={'black'}
                style={{marginTop: 3}}
              />
              <Text style={{fontSize: 14, color: 'black'}}>5</Text>
              <View
                style={{
                  width: width * 0.3,
                  height: 3,
                  backgroundColor: 'grey',
                  marginHorizontal: 17,
                  marginTop: 10,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: 3,
                    backgroundColor: '#a02929',
                  }}></View>
              </View>
              <Text style={{fontSize: 14, color: 'black'}}>2</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="star"
                size={13}
                color={'black'}
                style={{marginTop: 3}}
              />
              <Text style={{fontSize: 14, color: 'black'}}>4</Text>
              <View
                style={{
                  width: width * 0.3,
                  height: 3,
                  backgroundColor: 'grey',
                  marginHorizontal: 17,
                  marginTop: 10,
                }}>
                <View
                  style={{
                    width: '85%',
                    height: 3,
                    backgroundColor: '#a02929',
                  }}></View>
              </View>
              <Text style={{fontSize: 14, color: 'black'}}>0</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="star"
                size={13}
                color={'black'}
                style={{marginTop: 3}}
              />
              <Text style={{fontSize: 14, color: 'black'}}>3</Text>
              <View
                style={{
                  width: width * 0.3,
                  height: 3,
                  backgroundColor: 'grey',
                  marginHorizontal: 17,
                  marginTop: 10,
                }}>
                <View
                  style={{
                    width: '70%',
                    height: 3,
                    backgroundColor: '#a02929',
                  }}></View>
              </View>
              <Text style={{fontSize: 14, color: 'black'}}>1</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="star"
                size={13}
                color={'black'}
                style={{marginTop: 3}}
              />
              <Text style={{fontSize: 14, color: 'black'}}>2</Text>
              <View
                style={{
                  width: width * 0.3,
                  height: 3,
                  backgroundColor: 'grey',
                  marginHorizontal: 17,
                  marginTop: 10,
                }}>
                <View
                  style={{
                    width: '50%',
                    height: 3,
                    backgroundColor: '#a02929',
                  }}></View>
              </View>
              <Text style={{fontSize: 14, color: 'black'}}>3</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="star"
                size={13}
                color={'black'}
                style={{marginTop: 3}}
              />
              <Text style={{fontSize: 14, color: 'black'}}>1</Text>
              <View
                style={{
                  width: width * 0.3,
                  height: 3,
                  backgroundColor: 'grey',
                  marginHorizontal: 17,
                  marginTop: 10,
                }}>
                <View
                  style={{
                    width: '25%',
                    height: 3,
                    backgroundColor: '#a02929',
                  }}></View>
              </View>
              <Text style={{fontSize: 14, color: 'black'}}>0</Text>
            </View>
          </View>
        </View>
        <Text
          style={{color: 'black', marginTop: 30, marginLeft: 10, fontSize: 16}}>
          4 Comments
        </Text>
        <View style={{borderWidth: 0.2, borderColor: 'black'}}></View>
        <View
          style={{
            width: 'auto',
            height: 1,
            backgroundColor: '#f2f2f2',
            marginTop: 5,
            marginHorizontal: 15,
          }}></View>
        {CmtList.map((e, index) => {
          return (
            <View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={e.img}
                  style={{
                    width: 40,
                    height: 40,
                    marginHorizontal: 15,
                    marginTop: 15,
                    borderRadius: 50 / 2,
                  }}></Image>
                <View>
                  <Text style={{marginTop: 15, fontSize: 15, color: 'blue'}}>
                    {e.name}
                  </Text>
                  <Text style={{color: 'yellow'}}>⭐⭐⭐⭐⭐</Text>
                </View>
              </View>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingTop: 15,
                  color: 'grey',
                  fontSize: 12,
                }}>
                {e.date}
              </Text>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingTop: 10,
                  fontSize: 15,
                  color: 'black',
                }}>
                {e.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 15,
                  marginTop: 20,
                }}>
                <AntDesign name="like2" color={'grey'} size={20}></AntDesign>
                <AntDesign
                  name="dislike2"
                  color={'grey'}
                  size={20}
                  style={{marginHorizontal: 30, marginTop: 5}}></AntDesign>
                <Octicons name="reply" color={'grey'} size={20}></Octicons>
              </View>
              <View
                style={{
                  borderWidth: 0.3,
                  borderColor: 'grey',
                  backgroundColor: '#f2f2f2',
                  marginTop: 5,
                }}></View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Review;

const styles = StyleSheet.create({});
