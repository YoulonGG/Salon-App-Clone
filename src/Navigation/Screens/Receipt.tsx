import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';

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
          // backgroundColor: 'skyblue',
        }}>
        <Image
          source={require('../../assets/image/long.png')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 100,
          }}></Image>
        <View style={{justifyContent: 'space-between', paddingVertical: '3%'}}>
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
          borderWidth: 0.7,
          borderColor: '#DCDCDC',
          width: '90%',
          alignSelf: 'center',
        }}></View>
    </SafeAreaView>
  );
};

export default Receipt;

const styles = StyleSheet.create({});
