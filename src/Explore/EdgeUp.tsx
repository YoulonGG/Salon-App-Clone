import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const EdgeUp = () => {
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
          Edge Up
        </Text>
        <AntDesign
          name="arrowleft"
          size={25}
          style={{
            color: '#16247d',
          }}
        />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
        <Feather name="folder" size={40} color={'grey'} />
        <Text style={{fontSize: 15, color: 'grey'}}>No Data</Text>
      </View>
    </SafeAreaView>
  );
};

export default EdgeUp;

const styles = StyleSheet.create({});
