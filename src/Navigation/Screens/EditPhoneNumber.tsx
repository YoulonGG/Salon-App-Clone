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

const EditPhoneNumber = () => {
  const [number, onChangeNumber] = React.useState('');
  const navigation: any = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.Appbar}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign
            onPress={() => {
              navigation.goBack();
            }}
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
            marginLeft: '25%',
          }}>
          Edit Phone Number
        </Text>
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          marginTop: 20,
          color: '#16247d',
          textAlign: 'center',
        }}>
        Enter Phone Number
      </Text>
      <View
        style={{
          marginTop: 40,
          width: '90%',
          flexDirection: 'row',
          borderWidth: 1,
          alignSelf: 'center',
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
          placeholder=" Code"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            alignSelf: 'center',
            backgroundColor: '#16247d',
            flexDirection: 'row',
            width: '90%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Save
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditPhoneNumber;

const styles = StyleSheet.create({
  Appbar: {
    width: 'auto',
    height: 60,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  input: {
    flex: 1,
    borderRadius: 5,
    fontSize: 15,
    color: '#000',
  },
});
