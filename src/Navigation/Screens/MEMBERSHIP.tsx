import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const MEMBERSHIP = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView>
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
            paddingLeft: '21%',
          }}>
          Join Membership
        </Text>
        <MaterialIcons
          name="person-outline"
          size={25}
          color={'white'}
          style={{
            paddingLeft: '22%',
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 70,
          borderBottomWidth: 0.19,
          borderColor: 'black',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Ionicons
          name="ribbon-outline"
          size={35}
          color={'#16247d'}
          style={{marginLeft: 10}}
        />
        <View style={{marginLeft: 15}}>
          <Text style={{color: '#16247d', fontWeight: 'bold', fontSize: 15}}>
            Your current points in this salon shop.
          </Text>
          <Text style={{color: '#16247d', fontWeight: 'bold', fontSize: 15}}>
            0 Point
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 15, width: '100%'}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '32%',
            height: 70,
            backgroundColor: 'white',
            borderColor: '#16247d',
            marginLeft: '1%',
            borderRadius: 8,
            borderWidth: 2,
          }}>
          <Text style={{color: '#16247d', fontSize: 15, fontWeight: 'bold'}}>
            Silver
          </Text>
          <Text style={{color: '#16247d', fontSize: 15, fontWeight: 'bold'}}>
            0
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '32%',
            height: 70,
            backgroundColor: 'white',
            borderColor: '#16247d',
            marginLeft: '1%',
            borderRadius: 8,
            borderWidth: 2,
          }}>
          <Text style={{color: '#16247d', fontSize: 15, fontWeight: 'bold'}}>
            Gold
          </Text>
          <Text style={{color: '#16247d', fontSize: 15, fontWeight: 'bold'}}>
            0
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '32%',
            height: 70,
            backgroundColor: 'white',
            borderColor: '#16247d',
            marginLeft: '1%',
            borderRadius: 8,
            borderWidth: 2,
          }}>
          <Text style={{color: '#16247d', fontSize: 15, fontWeight: 'bold'}}>
            Platinum
          </Text>
          <Text style={{color: '#16247d', fontSize: 15, fontWeight: 'bold'}}>
            0
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 40,
          width: '90%',
          alignSelf: 'center',
          backgroundColor: 'white',
          marginTop: 20,
          borderRadius: 6,
          flexDirection: 'row',
          alignItems: 'center',
          elevation: 2,
        }}>
        <AntDesign
          name="search1"
          size={24}
          color={'grey'}
          style={{
            marginLeft: 10,
          }}
        />
        <TextInput
          placeholder="Search Member..."
          style={{
            fontSize: 15,
            marginLeft: 10,
            color: 'black',
          }}
        />
      </View>
      <View
        style={{
          marginTop: 15,
          borderBottomWidth: 0.3,
        }}></View>
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Feather name="folder" size={40} />
        <Text style={{fontSize: 15, color: 'grey'}}>No Data</Text>
      </View>
    </SafeAreaView>
  );
};

export default MEMBERSHIP;

const styles = StyleSheet.create({});
