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
          marginTop: 50,
        }}>
        <Image
          source={require('../../assets/image/unisalon11.png')}
          style={{
            width: 130,
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
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            alignItems: 'center',
            height: '100%',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              marginLeft: 15,
            }}>
            +855 |
          </Text>
          <TextInput
            style={{
              flex: 1,
              borderRadius: 5,
              fontSize: 16,
              color: 'black',
              marginLeft: '2%',
            }}
            placeholder="Phone Number"
            onChangeText={onChangeNumber}
            value={number}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#16247d',
            borderBottomEndRadius: 5,
            borderTopEndRadius: 5,
            width: '20%',
            height: '100%',
            // justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              padding: 15,
              fontWeight: 'bold',
              fontSize: 15,
              textAlign: 'center',
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
          width: '100%',
          paddingLeft: '5%',
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
    fontSize: 16,
    color: 'black',
    marginLeft: '3%',
  },
});
