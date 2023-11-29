import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Payment = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView>
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
            marginLeft: 130,
          }}>
          Payment
        </Text>
      </View>
      <View
        style={{
          marginTop: 40,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Feather name="folder" size={40} color={'grey'}></Feather>
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

export default Payment;

const styles = StyleSheet.create({});
