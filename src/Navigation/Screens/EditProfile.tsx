import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditProfile = () => {
  const navigation: any = useNavigation();
  const [text, onChangeText] = React.useState('');
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
            paddingLeft: '27%',
          }}>
          Edit Profile
        </Text>
      </View>
      <View
        style={{
          marginTop: 15,
          alignSelf: 'center',
          backgroundColor: 'white',
          flexDirection: 'row',
          width: '90%',
          height: 50,
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Ionicons
          name="person-outline"
          size={20}
          color={'black'}
          style={{
            marginLeft: 10,
          }}
        />
        <TextInput
          style={{fontSize: 14, marginLeft: 10}}
          onChangeText={onChangeText}
          value={text}
          placeholder="Full Name"
        />
      </View>
      <View
        style={{
          marginTop: 15,
          alignSelf: 'center',
          backgroundColor: 'white',
          flexDirection: 'row',
          width: '90%',
          height: 50,
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Ionicons
          name="mail-outline"
          size={20}
          color={'black'}
          style={{
            marginLeft: 10,
          }}
        />
        <TextInput
          style={{fontSize: 14, marginLeft: 10}}
          onChangeText={onChangeText}
          value={text}
          placeholder="Email"
        />
      </View>
      <View
        style={{
          marginTop: 15,
          alignSelf: 'center',
          backgroundColor: 'white',
          flexDirection: 'row',
          width: '90%',
          height: 100,
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <AntDesign
          name="infocirlceo"
          size={20}
          color={'black'}
          style={{
            marginLeft: 10,
            marginTop: -50,
          }}
        />
        <TextInput
          style={{fontSize: 14, marginLeft: 10, marginTop: -50}}
          onChangeText={onChangeText}
          value={text}
          placeholder="About"
        />
      </View>
      <TouchableOpacity>
        <View
          style={{
            marginTop: 25,
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

export default EditProfile;

const styles = StyleSheet.create({
  Appbar: {
    width: '100%',
    height: 40,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
});
