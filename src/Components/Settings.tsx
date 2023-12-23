import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react';
const Settings = () => {
  const navigation: any = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
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
          Settings
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
        style={{
          width: '100%',
          height: 40,
          borderBottomWidth: 1,
          borderColor: '#D5D5D5',

          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: '5%',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Fontisto name="bell" size={20} color={'#16247d'} style={{}} />
          <Text style={{color: 'black', fontSize: 15, marginLeft: 15}}>
            Allow Notification
          </Text>
        </View>
        <Switch
          trackColor={{false: '#767577', true: '#90EE90'}}
          thumbColor={isEnabled ? 'white' : 'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{}}
        />
      </View>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 40,
          borderBottomWidth: 1,
          borderColor: '#D5D5D5',

          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: '5%',
        }}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome name="star-o" size={22} color={'gold'} style={{}} />
          <Text style={{color: 'black', fontSize: 15, marginLeft: 15}}>
            Rate Us
          </Text>
        </View>
        <AntDesign
          name="right"
          size={20}
          color={'black'}
          style={{fontWeight: 'bold'}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 40,
          borderBottomWidth: 1,
          borderColor: '#D5D5D5',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: '5%',
        }}>
        <View style={{flexDirection: 'row'}}>
          <AntDesign name="question" size={22} color={'#16247d'} style={{}} />
          <Text style={{color: 'black', fontSize: 15, marginLeft: 15}}>
            About App
          </Text>
        </View>
        <AntDesign
          name="right"
          size={20}
          color={'black'}
          style={{fontWeight: 'bold'}}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
