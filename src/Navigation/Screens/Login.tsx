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
  const [number2, onChangeNumber2] = React.useState('');
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
          marginTop: 50,
        }}>
        <Image
          source={require('../../assets/image/unisalon11.png')}
          style={{
            width: 130,
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
          style={{
            flex: 1,
            borderRadius: 5,
            fontSize: 15,
            paddingLeft: '3%',
            color: '#000',
          }}
          placeholder="Phone Number"
          onChangeText={onChangeNumber}
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
          style={{
            flex: 1,
            borderRadius: 5,
            fontSize: 15,
            paddingLeft: '3%',
            color: '#000',
          }}
          placeholder="Password"
          onChangeText={onChangeNumber2}
          value={number2}
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            paddingHorizontal: '10%',
            width: '100%',
          }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: 'grey',
            }}
          />
          <Text> or </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: 'grey',
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          paddingHorizontal: '12%',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',

            borderRadius: 50,
          }}>
          <Image
            source={require('../../assets/image/facebook3.png')}
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
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',

            borderRadius: 50,
          }}>
          <Image
            source={require('../../assets/image/googlelogo.png')}
            style={{
              width: '60%',
              height: '60%',
              alignItems: 'center',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 60,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',

            borderRadius: 50,
          }}>
          <Image
            source={require('../../assets/image/applelogo.png')}
            style={{
              width: '50%',
              height: '50%',
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
  input: {},
});
