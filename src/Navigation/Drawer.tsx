import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
// import {SafeAreaView} from 'react-native';
import BookingAndOrder from '../Components/BookingAndOrder';
import Favorite from '../Components/Favorite';
import Profile from '../Components/Profile';
import HistoryBoking from '../Components/HistoryBoking';
import HelpAndFeedback from '../Components/HelpAndFeedback';
import Privacy from '../Components/Privacy';
import Settings from '../Components/Settings';
import SignOut from '../Components/SignOut';
import Payment from '../Components/Payment';
import TodayBooking from '../Components/TodayBooking';
import Membership from '../Components/Membership';
import Message from '../Components/Message';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import App from '../../App';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerContent from '../Components/DrawerContent';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const {width, height} = Dimensions.get('window');
const DrawerNavigate = () => {
  const navigation: any = useNavigation();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => {
        return (
          <SafeAreaView>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{marginBottom: 15}}>
              <View
                style={{
                  width: '100%',
                  height: height * 0.25,
                  backgroundColor: '#16247d',
                }}>
                <Image
                  source={require('../assets/image/rrr.jpg')}
                  style={{
                    width: 'auto',
                    height: height * 0.25,
                  }}></Image>

                {/* <Image
                  style={{flex: 1, width: undefined, height: undefined}}
                  source={require('../../assets/imgs/cover.jpg')}></Image> */}
                <View
                  style={{
                    width: 80,
                    height: 80,
                    position: 'absolute',
                    backgroundColor: '#aaf0d1',
                    borderRadius: 80 / 2,
                    bottom: height * 0.06,
                    marginLeft: 35,
                    borderWidth: 1,
                    borderColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../assets/image/me.jpg')}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 80 / 2,
                    }}></Image>
                  {/* <Text
                    style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>
                    J
                  </Text> */}
                </View>
                <Text
                  style={{
                    position: 'absolute',
                    bottom: height * 0.02,
                    marginLeft: 23,
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}>
                  John Youlong
                </Text>
              </View>
              <View style={{marginHorizontal: 20}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Profile');
                  }}
                  style={{flexDirection: 'row', marginTop: 20}}>
                  <Octicons
                    name="feed-person"
                    size={22}
                    color={'#16247d'}></Octicons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Favorite');
                  }}
                  style={{flexDirection: 'row', marginTop: 20}}>
                  <Octicons
                    name="feed-heart"
                    size={22}
                    color={'red'}></Octicons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Favourite
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: 'auto',
                  borderWidth: 0.3,
                  backgroundColor: 'grey',
                  marginTop: 20,
                }}></View>
              <View style={{marginHorizontal: 20}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Message');
                  }}
                  style={{flexDirection: 'row', marginTop: 20}}>
                  <MaterialCommunityIcons
                    name="email"
                    size={22}
                    color={'skyblue'}></MaterialCommunityIcons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Message
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Membershipp');
                  }}
                  style={{flexDirection: 'row', marginTop: 20}}>
                  <Octicons
                    name="feed-star"
                    size={22}
                    color={'#ffa042'}></Octicons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Membership
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('TodayBooking');
                  }}
                  style={{flexDirection: 'row', marginTop: 20}}>
                  <Fontisto name="date" size={22} color={'brown'}></Fontisto>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Today Booking & Order
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('BookingAndOrder');
                  }}
                  style={{flexDirection: 'row', marginTop: 20}}>
                  <MaterialIcons
                    name="date-range"
                    size={22}
                    color={'#16247d'}></MaterialIcons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Booking & Order
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Historybooking');
                  }}
                  style={{flexDirection: 'row', marginTop: 20}}>
                  <FontAwesome6
                    name="clock-rotate-left"
                    size={22}
                    color={'green'}></FontAwesome6>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    History Booking & Order
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Payment');
                  }}
                  style={{flexDirection: 'row', marginTop: 20}}>
                  <MaterialIcons
                    name="payment"
                    size={22}
                    color={'#16247d'}></MaterialIcons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Payment
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: '100%',
                    borderWidth: 0.3,
                    backgroundColor: 'grey',
                    marginTop: 20,
                  }}></View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Setting');
                  }}
                  style={{flexDirection: 'row', marginTop: 20}}>
                  <Fontisto
                    name="player-settings"
                    color={'grey'}
                    size={22}></Fontisto>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Settings
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Privacy');
                  }}
                  style={{flexDirection: 'row', marginTop: 20}}>
                  <MaterialIcons
                    name="privacy-tip"
                    size={22}
                    color={'green'}></MaterialIcons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Privacy Policy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('HelpAndFeedback');
                  }}
                  style={{flexDirection: 'row', marginTop: 20}}>
                  <AntDesign
                    name="questioncircle"
                    size={22}
                    color={'grey'}></AntDesign>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Help & Feedback
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Login');
                  }}
                  style={{flexDirection: 'row', marginTop: 20}}>
                  <Ionicons
                    name="log-out-outline"
                    size={22}
                    color={'red'}></Ionicons>
                  <Text style={{fontSize: 15, color: 'black', marginLeft: 20}}>
                    Sign Out
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerContentContainerStyle: {
          backgroundColor: 'white',
        },
        drawerType: 'slide',
        headerTransparent: false,
        headerShown: false,
        drawerStyle: {width: '75%'},
      }}>
      <Drawer.Screen name="John Youlong" component={App}></Drawer.Screen>
      {/* <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          drawerIcon: ({focused, size}) => (
            <Octicons name="feed-person" size={30} color={'16247d'}></Octicons>
          ),
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={Favorite}
        options={{
          title: 'Favourite',
          drawerIcon: ({focused, size}) => (
            <Octicons name="feed-heart" size={30} color={'red'}></Octicons>
          ),
        }}
      />
      <Drawer.Screen
        name="Message"
        component={Message}
        options={{
          title: 'Message',
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name="email"
              size={30}
              color={'blue'}></MaterialCommunityIcons>
          ),
        }}
      />
      <Drawer.Screen
        name="Membership"
        component={Membership}
        options={{
          title: 'Membership',
          drawerIcon: ({focused, size}) => (
            <Octicons name="feed-star" size={30} color={'#ffa042'}></Octicons>
          ),
        }}
      />
      <Drawer.Screen
        name="Today Booking & Order"
        component={TodayBooking}
        options={{
          title: 'Today Booking & Order',
          drawerIcon: ({focused, size}) => (
            <Fontisto name="date" size={25} color={'brown'}></Fontisto>
          ),
        }}
      />
      <Drawer.Screen
        name="Booking & Order"
        component={BookingAndOrder}
        options={{
          title: 'Booking & Order',
          drawerIcon: ({focused, size}) => (
            <MaterialIcons
              name="date-range"
              size={30}
              color={'grey'}></MaterialIcons>
          ),
        }}
      />
      <Drawer.Screen
        name="History Booking & Order"
        component={HistoryBoking}
        options={{
          title: 'History Booking & Order',
          drawerIcon: ({focused, size}) => (
            <FontAwesome6
              name="clock-rotate-left"
              size={25}
              color={'green'}></FontAwesome6>
          ),
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={Payment}
        options={{
          title: 'Payment',
          drawerIcon: ({focused, size}) => (
            <MaterialIcons name="payment" size={30}></MaterialIcons>
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          drawerIcon: ({focused, size}) => (
            <Fontisto name="player-settings" size={30}></Fontisto>
          ),
        }}
      />
      <Drawer.Screen
        name="Privacy Policy"
        component={Privacy}
        options={{
          title: 'Privacy Policy',
          drawerIcon: ({focused, size}) => (
            <MaterialIcons
              name="privacy-tip"
              size={30}
              color={'green'}></MaterialIcons>
          ),
        }}
      />
      <Drawer.Screen
        name="Help & Feedback"
        component={HelpAndFeedback}
        options={{
          title: 'Help & Feedback',
          drawerIcon: ({focused, size}) => (
            <AntDesign
              name="questioncircle"
              size={28}
              color={'grey'}></AntDesign>
          ),
        }}
      />
      <Drawer.Screen
        name="Log in"
        component={Login}
        options={{
          title: 'Login',
          drawerIcon: ({focused, size}) => (
            <Entypo name="login" size={25} color={'skyblue'}></Entypo>
          ),
        }}
      />
      <Drawer.Screen
        name="Sign Out"
        component={SignOut}
        options={{
          title: 'Sign Out',
          drawerIcon: ({focused, size}) => (
            <Ionicons name="log-out-outline" size={28} color={'red'}></Ionicons>
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigate;
