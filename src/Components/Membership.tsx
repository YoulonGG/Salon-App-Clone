import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Membership = () => {
  const navigation: any = useNavigation();
  const [text, onChangeText] = React.useState('');
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
            paddingLeft: '27%',
          }}>
          Membership
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 60,
        }}>
        <Ionicons
          name="ribbon-outline"
          size={35}
          style={{
            color: '#16247d',
            paddingRight: 15,
            marginLeft: 15,
            marginTop: 15,
          }}
        />
        <View style={{marginTop: 7}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#16247d',
              marginTop: 10,
            }}>
            Your current points of all salon shops.
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 5,
              color: '#16247d',
            }}>
            0 Point
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 'auto',
          height: 8,
          backgroundColor: '#ebebec',
          marginTop: 12,
        }}></View>
      <View
        style={{
          backgroundColor: 'white',
          width: '90%',
          alignSelf: 'center',
          borderRadius: 5,
          height: 50,
          flexDirection: 'row',
          marginTop: 10,
          alignContent: 'center',
          elevation: 3,
        }}>
        <AntDesign
          name="search1"
          size={25}
          color={'grey'}
          style={{
            marginTop: 13,
            marginLeft: 12,
          }}
        />
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="Search Salons..."
          style={{
            fontSize: 17,
            marginLeft: 8,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          borderBottomWidth: 0.3,
        }}></View>
      <View
        style={{
          marginTop: 40,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Feather name="folder" size={35} color={'grey'}></Feather>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'grey',
            paddingTop: '2%',
          }}>
          No Data
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Membership;

const styles = StyleSheet.create({});
