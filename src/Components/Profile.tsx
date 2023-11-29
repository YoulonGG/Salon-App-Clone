import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
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
            paddingLeft: '33%',
          }}>
          Profile
        </Text>
      </View>
      <View style={{flexDirection: 'row', width: '100%', height: 160}}>
        <Image
          source={require('../assets/image/haircut2.png')}
          style={{
            backgroundColor: 'grey',
            width: '100%',
            height: '100%',
          }}></Image>
        <Entypo name="camera" size={24} color={'black'}></Entypo>
      </View>
      <Image
        source={require('../assets/image/me.jpg')}
        style={{
          alignSelf: 'center',
          marginTop: -50,
          backgroundColor: 'grey',
          borderRadius: 50,
          width: 100,
          height: 100,
        }}></Image>
      <Text
        style={{
          color: 'black',
          fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 5,
        }}>
        John Youlong
      </Text>
      <View
        style={{
          alignSelf: 'center',
          marginTop: 10,
          backgroundColor: 'lightgreen',
          height: 25,
          width: 70,
          borderRadius: 30,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
          }}>
          0 Point
        </Text>
      </View>
      <View style={{borderBottomWidth: 0.2, marginTop: 5}}></View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          width: '100%',
          justifyContent: 'space-between',
          paddingHorizontal: '5%',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Account
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              navigation.push('EditProfile');
            }}>
            <Text
              style={{
                textDecorationLine: 'underline',
                fontSize: 16,
                fontWeight: 'bold',
                color: '#16247d',
              }}>
              Edit
            </Text>
          </TouchableOpacity>
          <FontAwesome5
            name="user-edit"
            size={12}
            color={'#16247d'}
            style={{
              marginLeft: '2%',
              marginTop: 5,
            }}></FontAwesome5>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 5,
          flex: 1,
        }}></View>
      <View
        style={{
          marginTop: 15,
          alignSelf: 'center',
          backgroundColor: 'white',
          flexDirection: 'row',
          width: '90%',
          height: 50,
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Ionicons
          name="person-outline"
          size={20}
          color={'black'}
          style={{
            marginLeft: '3%',
          }}
        />
        <Text style={{fontSize: 14, marginLeft: 10, color: 'black'}}>
          John Youlong
        </Text>
      </View>
      <View
        style={{
          marginTop: 15,
          alignSelf: 'center',
          backgroundColor: 'white',
          flexDirection: 'row',
          width: '90%',
          height: 50,
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Ionicons
          name="mail-outline"
          size={20}
          color={'black'}
          style={{
            marginLeft: '3%',
          }}
        />
        <Text style={{fontSize: 14, marginLeft: 10, color: 'black'}}>
          johnyoulong12@gmail.com
        </Text>
      </View>
      <View
        style={{
          marginTop: 15,
          alignSelf: 'center',
          backgroundColor: 'white',
          flexDirection: 'row',
          width: '90%',
          height: 50,
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <AntDesign
          name="infocirlceo"
          size={20}
          color={'black'}
          style={{
            marginLeft: '3%',
          }}
        />
      </View>
      <View
        style={{
          marginTop: 15,
          alignSelf: 'center',
          backgroundColor: 'white',
          flexDirection: 'row',
          width: '90%',
          height: 50,
          alignItems: 'center',
          borderRadius: 5,
          justifyContent: 'space-between',
          paddingHorizontal: '3%',
        }}>
        <Ionicons name="call-outline" size={20} color={'black'} style={{}} />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.push('EditPhoneNumber');
          }}>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
