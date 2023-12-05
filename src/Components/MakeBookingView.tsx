import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
  Platform,
  // DatePickerAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
export const MakeBookingView = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());

  // const showDatePicker = async () => {
  //   try {
  //     const { action, year, month, day } = await DatePickerAndroid.open({
  //       date: selectedDate,
  //     });
  //     if (action !== DatePickerAndroid.dismissedAction) {
  //       const newDate = new Date(year, month, day);
  //       setSelectedDate(newDate);
  //     }
  //   } catch{}
  // };

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={styles.AppBar}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign
            name="arrowleft"
            color={'white'}
            size={25}
            style={{
              paddingLeft: '5%',
            }}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.SubText}>MAKE A BOOKING</Text>
      </View>
      <Text
        style={{fontSize: 16, color: 'black', fontWeight: 'bold', margin: 10}}>
        Shop Information
      </Text>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#F5F5F5',
          height: 50,
          width: '90%',
          alignSelf: 'center',
          marginTop: 10,

          alignItems: 'center',
          borderRadius: 8,
        }}>
        <FontAwesome
          name="building-o"
          size={19}
          color={'black'}
          style={{
            marginLeft: 15,
          }}
        />
        <Text
          style={{
            marginLeft: 15,
            fontSize: 14,
            color: 'black',
          }}>
          មែន​​ ស្តាយ
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#F5F5F5',
          height: 50,
          width: '90%',
          alignSelf: 'center',
          marginTop: 10,
          alignItems: 'center',
          borderRadius: 8,
        }}>
        <Feather
          name="smartphone"
          size={19}
          color={'black'}
          style={{
            marginLeft: 15,
          }}
        />
        <Text
          style={{
            marginLeft: 15,
            fontSize: 14,
            color: 'black',
          }}>
          089217145
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#F5F5F5',
          alignSelf: 'center',
          marginTop: 10,
          height: 50,
          width: '90%',
          alignItems: 'center',
          borderRadius: 8,
        }}>
        <EvilIcons
          name="location"
          size={20}
          color={'black'}
          style={{
            marginLeft: 15,
          }}
        />
        <Text
          style={{
            marginLeft: 15,
            fontSize: 14,
            color: 'black',
          }}>
          103 St 512, Phnom Penh, Cambodia
        </Text>
      </View>
      <Text
        style={{fontSize: 16, color: 'black', fontWeight: 'bold', margin: 15}}>
        Booking Information
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={{
            backgroundColor: '#F5F5F5',
            borderRadius: 6,
            width: '60%',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <Ionicons
              name="time-outline"
              size={22}
              color={'black'}
              style={{
                marginLeft: 15,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              marginLeft: 10,
            }}>
            Mon, 6 Nov 2023
          </Text>
          <View>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={{
            backgroundColor: '#F5F5F5',
            borderRadius: 6,
            marginLeft: '2%',
            width: '38%',
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons
            name="time-outline"
            size={22}
            color={'black'}
            style={{
              marginLeft: 15,
            }}
          />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 14,
              color: 'black',
            }}>
            13:00
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 100,
          backgroundColor: '#F5F5F5',
          marginTop: 10,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 6,
          flexDirection: 'row',
        }}>
        <AntDesign
          name="infocirlceo"
          size={20}
          color={'black'}
          style={{
            margin: 16,
          }}
        />
        <TextInput
          placeholder="Booking Note...(Optional)"
          style={{
            fontSize: 14,
            marginBottom: 45,
            color: 'black',
          }}></TextInput>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.push('AssignProfessor');
        }}
        style={{
          backgroundColor: '#16247d',
          height: 45,
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 6,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
          Next
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AppBar: {
    width: '100%',
    height: 40,
    backgroundColor: '#16247d',
    alignItems: 'center',
    // paddingTop: '4.5%',
    // justifyContent: 'center',
    flexDirection: 'row',
    // verticalAlign: 'middle',
  },
  SubText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: '23%',
  },
});
