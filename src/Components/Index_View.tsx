import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Navigation/HomeScreen';
import ShopScreen from '../Navigation/ShopScreen';
import VideoScreen from '../Navigation/VideoScreen';
import ProfessorScreen from '../Navigation/ProfessorScreen';
import PromotionScreen from '../Navigation/PromotionScreen';

const Tab = createBottomTabNavigator();
export const IndexView = () => {
  // useEffect(() => {
  //   if (Platform.OS === 'android') SplashScreen.hide();
  // }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 60,
            backgroundColor: '#fff',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Entypo
                    name="location"
                    size={24}
                    color={focused ? '#16247d' : 'grey'}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: focused ? '#16247d' : 'grey',
                      marginRight: 0,
                    }}>
                    Home
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Shops"
          component={ShopScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Entypo
                    name="shop"
                    size={24}
                    color={focused ? '#16247d' : 'grey'}
                  />
                  <Text
                    style={{fontSize: 12, color: focused ? '#16247d' : 'grey'}}>
                    Shops
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Videos"
          component={VideoScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <FontAwesome
                    name="video-camera"
                    size={24}
                    color={focused ? '#16247d' : 'grey'}
                  />
                  <Text
                    style={{fontSize: 12, color: focused ? '#16247d' : 'grey'}}>
                    Videos
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Professors"
          component={ProfessorScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Ionicons
                    name="person"
                    size={24}
                    color={focused ? '#16247d' : 'grey'}
                  />
                  <Text
                    style={{fontSize: 12, color: focused ? '#16247d' : 'grey'}}>
                    Professor
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Promotion"
          component={PromotionScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    name="gift"
                    size={24}
                    color={focused ? '#16247d' : 'grey'}
                  />
                  <Text
                    style={{fontSize: 12, color: focused ? '#16247d' : 'grey'}}>
                    Promotions
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
