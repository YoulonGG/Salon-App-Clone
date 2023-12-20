import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/Navigation/HomeScreen';
import ProfessorScreen from './src/Navigation/ProfessorScreen';
import PromotionScreen from './src/Navigation/PromotionScreen';
import ShopScreen from './src/Navigation/ShopScreen';
import VideoScreen from './src/Navigation/VideoScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Route from './src/Navigation/Route';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
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
          height: 50,
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name=" "
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Entypo
                  name="location"
                  size={24}
                  color={focused ? 'purple' : 'grey'}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? 'purple' : 'grey',
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
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Entypo
                  name="shop"
                  size={24}
                  color={focused ? 'purple' : 'grey'}
                />
                <Text
                  style={{fontSize: 12, color: focused ? 'purple' : 'grey'}}>
                  Shops
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome
                  name="video-camera"
                  size={24}
                  color={focused ? 'purple' : 'grey'}
                />
                <Text
                  style={{fontSize: 12, color: focused ? 'purple' : 'grey'}}>
                  Videos
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Professor"
        component={ProfessorScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Ionicons
                  name="person"
                  size={24}
                  color={focused ? 'purple' : 'grey'}
                />
                <Text
                  style={{fontSize: 12, color: focused ? 'purple' : 'grey'}}>
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
                  color={focused ? 'purple' : 'grey'}
                />
                <Text
                  style={{fontSize: 12, color: focused ? 'purple' : 'grey'}}>
                  Promotions
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default App;

const styles = StyleSheet.create({});
