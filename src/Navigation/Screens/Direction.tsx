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

const Direction = () => {
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
            paddingLeft: '19%',
          }}>
          មែន​ ស្តាយ's Location
        </Text>
      </View>
      <View style={{width: '100%', height: 80, backgroundColor: 'white'}}>
        <Text
          style={{
            fontSize: 15,
            color: '#16247d',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Destination Location (11632.17 km)
        </Text>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontSize: 13,
            marginTop: 10,
          }}>
          103 St 512, Phnom Penh, Cambodia
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Direction;

const styles = StyleSheet.create({});
