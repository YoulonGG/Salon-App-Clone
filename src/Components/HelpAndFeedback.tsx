import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HelpAndFeedback = () => {
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
            paddingLeft: '24%',
          }}>
          Help & Feedback
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          borderWidth: 0.5,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{color: 'black', fontSize: 15, marginLeft: 15}}>
          How to register account in app user
        </Text>
        <AntDesign
          name="right"
          size={20}
          color={'black'}
          style={{marginLeft: '25%', fontWeight: 'bold'}}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HelpAndFeedback;

const styles = StyleSheet.create({});
