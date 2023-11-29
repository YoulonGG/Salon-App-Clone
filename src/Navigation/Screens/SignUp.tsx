import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 80,
        }}>
        <Image
          source={require('../../assets/image/hair-salon.png')}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <Text
          style={{
            fontSize: 17,
            color: '#16247d',
            marginTop: 20,
          }}>
          Enter Phone Number
        </Text>
      </View>
      <View
        style={{
          marginTop: 40,
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
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 20,
          marginTop: 30,
        }}>
        <Text style={{fontWeight: 'bold', color: '#16247d', fontSize: 13}}>
          By sign up, you agree to our
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            marginLeft: 4,
            textDecorationLine: 'underline',
            color: '#16247d',
            fontSize: 13,
          }}>
          Term and Conditions.
        </Text>
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

export default SignUp;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderRadius: 5,
    fontSize: 15,
    color: 'black',
  },
});
