import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SearchBarView = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: '4%',
          alignItems: 'center',
          paddingVertical: 0,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          height: 50,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.icon}
            activeOpacity={1}
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign name="arrowleft" color={'black'} size={25}></AntDesign>
          </TouchableOpacity>
          <TextInput
            placeholder="Search Salons..."
            style={{
              fontSize: 15,
              color: 'black',
            }}></TextInput>
        </View>
        <FontAwesome style={{}} size={20} color={'black'} name="search" />
      </View>
      <View
        style={{
          backgroundColor: '#f1f1f1',
          flex: 1,
          justifyContent: 'flex-start',
          alignContent: 'center',
          alignItems: 'center',
          paddingTop: '10%',
        }}>
        <Feather name="folder" size={40} color={'grey'}></Feather>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'grey',
            paddingTop: '2%',
          }}>
          No Data
        </Text>
      </View>
    </View>
  );
};

export default SearchBarView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    // position: 'absolute',
    alignContent: 'center',
    top: 10,
    right: 5,
    marginLeft: 10,
  },
  search: {},
});
