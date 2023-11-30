import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const ProfessorDetail = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView>
      {/* <ScrollView> */}
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
            marginLeft: '22%',
          }}>
          Professional Detail
        </Text>
      </View>

      <Image
        source={require('../../assets/image/haircut2.png')}
        style={{
          width: '100%',
          height: 150,
        }}></Image>
      <Image
        source={require('../../assets/image/man.png')}
        style={{
          alignSelf: 'center',
          marginTop: -50,
          borderRadius: 50,
          width: 100,
          height: 100,
        }}></Image>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 16,
          color: 'black',
        }}>
        Professor Sythan
      </Text>
      <Text style={{textAlign: 'center'}}>⭐⭐⭐⭐⭐</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Review');
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 15,
            textDecorationLine: 'underline',
          }}>
          2 Reviews
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomWidth: 0.2,
          borderColor: 'black',
          marginTop: 5,
        }}></View>
      <Text
        style={{
          marginLeft: 15,
          fontSize: 16,
          fontWeight: 'bold',
          marginTop: 15,
          color: 'black',
        }}>
        Professional Information
      </Text>
      <View
        style={{
          height: 50,
          backgroundColor: 'white',
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 8,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Ionicons
          name="call-outline"
          size={20}
          color={'black'}
          style={{
            marginLeft: 15,
          }}
        />
        <Text
          style={{
            marginLeft: 15,
            fontSize: 15,
            color: 'black',
          }}>
          089217145
        </Text>
      </View>
      <View
        style={{
          height: 50,
          backgroundColor: 'white',
          width: '90%',
          alignSelf: 'center',
          marginTop: 10,
          borderRadius: 8,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Ionicons
          name="person-outline"
          size={22}
          color={'black'}
          style={{
            marginLeft: 15,
          }}
        />
        <Text
          style={{
            marginLeft: 15,
            fontSize: 15,
            color: 'black',
          }}>
          Professor of Men Style
        </Text>
      </View>
      <View
        style={{
          height: 50,
          backgroundColor: 'white',
          width: '90%',
          alignSelf: 'center',
          marginTop: 10,
          borderRadius: 8,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <AntDesign
          name="mail"
          size={22}
          color={'black'}
          style={{
            marginLeft: 15,
          }}
        />
        <Text
          style={{
            marginLeft: 15,
            fontSize: 15,
            color: 'black',
          }}>
          mensty@gmail.com
        </Text>
      </View>
      <View
        style={{
          height: 80,
          backgroundColor: 'white',
          width: '90%',
          alignSelf: 'center',
          marginTop: 10,
          borderRadius: 8,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <EvilIcons
          name="location"
          size={25}
          color={'black'}
          style={{
            marginLeft: 15,
          }}
        />
        <View>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 15,
              color: 'black',
            }}>
            #42, Street 454, Toul Tompong,
          </Text>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 15,
              color: 'black',
            }}>
            Phom Penh, Cambodia
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../assets/image/gmail.png')}
          style={{
            marginLeft: 20,
            marginTop: 10,
          }}></Image>
        <Image
          source={require('../../assets/image/telephone.png')}
          style={{
            marginLeft: 20,
            marginTop: 10,
          }}></Image>
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          marginLeft: 20,
          marginTop: 25,
          color: 'black',
        }}>
        Bio
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          height: 80,
          borderColor: 'grey',
          borderWidth: 1,
          width: '90%',
          alignSelf: 'center',
          marginTop: 10,
          borderRadius: 6,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            marginLeft: 5,
            marginTop: 5,
          }}>
          បទពិសោធន៏​ 15ឆ្នាំ
        </Text>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default ProfessorDetail;

const styles = StyleSheet.create({});
