import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ForgetPassword = () => {
  const [number, onChangeNumber] = React.useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          marginLeft: 15,
          marginTop: 20,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="arrowleft" color={'black'} size={28}></AntDesign>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{marginTop: 75, fontSize: 20, color: 'black'}}>
          Forget Password
        </Text>
        <Text style={{marginTop: 20, color: 'grey', fontSize: 15}}>
          Enter Phone Number
        </Text>
      </View>
      <View
        style={{
          marginTop: 50,
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 5,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            marginLeft: 15,
          }}>
          +855 |
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#16247d',
            borderBottomEndRadius: 5,
            borderTopEndRadius: 5,
          }}>
          <Text
            style={{
              color: 'white',
              padding: 15,
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 10,
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 5,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <TextInput
          style={styles.input}
          placeholder="Code"
          keyboardType="numeric"
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            marginTop: 20,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 5,
            alignItems: 'center',
            backgroundColor: '#16247d',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              padding: 10,
              fontWeight: 'bold',
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderRadius: 5,
    fontSize: 15,
    color: 'black',
  },
});
