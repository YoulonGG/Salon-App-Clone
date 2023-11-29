import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const navigation = useNavigation();
  const navigationn: any = useNavigation();
  const navigationnn: any = useNavigation();

  return (
    <SafeAreaView style={{}}>
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
          source={require('../../assets/image/unisalon11.png')}
          style={{
            width: 150,
            height: 100,
          }}
        />
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
            marginLeft: 10,
          }}>
          +855 |
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={onChangeText}
          value={number}
        />
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
          placeholder="Password"
          onChangeText={onChangeNumber}
          value={number}
        />
        <Ionicons
          name="eye"
          size={22}
          style={{
            marginRight: 20,
          }}></Ionicons>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            // navigationn.push('IndexView');
          }}
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
              fontSize: 16,
              padding: 10,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigationnn.push('ForgetPassword');
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#16247d',
              fontSize: 15,
              marginTop: 15,
            }}>
            Forget Password
          </Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 20,
              fontSize: 14,
              color: 'grey',
            }}>
            or
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 80,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 40,
            marginTop: 25,
            borderRadius: 50,
          }}>
          <Image
            source={require('../../assets/image/facebook.png')}
            style={{
              width: '50%',
              height: '50%',
              alignItems: 'center',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 80,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 50,
            marginTop: 25,
            borderRadius: 50,
          }}>
          <Image
            source={require('../../assets/image/googlelogo.png')}
            style={{
              width: 50,
              height: 50,
              alignItems: 'center',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 80,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 40,
            marginTop: 25,
            borderRadius: 50,
          }}>
          <Image
            source={require('../../assets/image/applelogo.png')}
            style={{
              width: 50,
              height: 50,
              alignItems: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: 14,
          }}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigationn.push('SignUp');
          }}>
          <Text style={{marginLeft: 10, fontSize: 14, color: '#16247d'}}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderRadius: 5,
    fontSize: 15,
    color: '#000',
  },
});
