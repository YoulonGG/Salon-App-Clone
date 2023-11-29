import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// import OptionsMenu from 'react-native-options-menu';
const Message = () => {
  const navigation: any = useNavigation();
  const myIcon = <Feather name="more-vertical" size={30} color="#900" />;
  const Data = [
    {
      id: '1',
      name: 'ABC007',
      image: require('../assets/image/man1.png'),
      Usermessage: 'Hi Bro',
      date: '3 hours ago',
    },
    {
      id: '2',
      name: 'មែន​ ស្តាយ',
      image: require('../assets/image/man.png'),
      Usermessage: 'How about your price?',
      date: '12 hours ago',
    },
  ];

  const createTwoButtonAlert = () =>
    Alert.alert('Option', 'Delete', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: 60,
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
              paddingLeft: '30%',
            }}>
            Message
          </Text>
        </View>
        {Data.map((e, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: '100%',
                height: 80,
                backgroundColor: 'white',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 0.3,
                justifyContent: 'space-between',
                paddingHorizontal: '5%',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                  }}
                  source={e.image}
                />
                <View style={{marginLeft: '5%'}}>
                  <Text
                    style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
                    {e.name}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'black', fontSize: 14}}>You:</Text>
                    <Text
                      style={{color: 'black', paddingLeft: '2%', fontSize: 14}}>
                      {e.Usermessage}
                    </Text>
                  </View>
                  <Text style={{color: 'grey', fontSize: 14}}>{e.date}</Text>
                </View>
              </View>
              <SimpleLineIcons
                name="options-vertical"
                size={20}
                color={'black'}
                onPress={createTwoButtonAlert}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Message;

const styles = StyleSheet.create({});
