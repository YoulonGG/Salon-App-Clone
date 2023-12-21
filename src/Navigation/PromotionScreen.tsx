import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  useWindowDimensions,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const Promotion = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{width: 'auto', height: '94%', backgroundColor: '#f1f1f1'}}>
      <TouchableOpacity
        activeOpacity={1}
        style={{width: width * 0.95, height: '94%', alignSelf: 'center'}}
        onPress={() => {
          navigation.push('DetailPromotion');
        }}>
        <View style={styles.CardPromotion}>
          <View
            style={{
              width: '40%',
              height: '90%',
              backgroundColor: '#ebebec',
              borderRadius: 5,

              marginTop: '2%',
            }}>
            {/* <View
              style={{
                backgroundColor: 'red',
                paddingHorizontal: 5,
                width: '50%',
                marginTop: '-15%',
              }}>
              <Text style={{color: 'white', fontSize: 12}}>(50% OFF)</Text>
            </View> */}
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 5,
              }}
              source={require('../assets/image/haircut5.jpg')}></Image>
          </View>
          <View style={{paddingLeft: 10, flex: 1, width: '60%'}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 5,
              }}>
              កាត់សក់បុរស
            </Text>
            <Text
              style={{
                color: '#16247d',
                fontSize: 14,
                fontWeight: 'bold',
                marginTop: 2,
              }}>
              មែន​ ស្តាយ
            </Text>
            <Text style={{fontSize: 13, marginTop: 2}}>⭐⭐⭐⭐⭐ (3)</Text>
            <Text style={{marginTop: 2, fontSize: 14}}>
              កាត់សក់បុរស free កក់សក់ជូន
            </Text>
            <View style={{flexDirection: 'row', marginTop: '4%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingRight: 20,
                }}>
                <FontAwesome6
                  name="location-dot"
                  style={{paddingRight: 5, marginTop: 4}}
                  color={'#16247d'}></FontAwesome6>
                <Text
                  style={{color: '#16247d', fontWeight: 'bold', fontSize: 13}}>
                  None
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <FontAwesome6
                  name="clock"
                  style={{paddingRight: 5, marginTop: 4}}
                  color={'#16247d'}></FontAwesome6>
                <Text
                  style={{color: '#16247d', fontWeight: 'bold', fontSize: 13}}>
                  Opening
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Reward = () => (
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
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey',
        paddingTop: '2%',
      }}>
      No Data
    </Text>
  </View>
);

const renderScene = SceneMap({
  first: Promotion,
  third: Reward,
});

export const PromotionScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Promotions'},
    {key: 'third', title: 'Rewards'},
  ]);
  const navigation = useNavigation();
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={{
        backgroundColor: '#f2f2f2',
        width: '100%',
      }}
      tabStyle={{
        width: width / 2,
      }}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: focused ? '#16247d' : 'black',
            margin: 2,
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          {route.title}
        </Text>
      )}></TabBar>
  );
  const navigationn: any = useNavigation();
  return (
    <SafeAreaView>
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
        <Feather
          onPress={() => {
            navigationn.openDrawer();
          }}
          name="menu"
          size={22}
          style={{
            color: 'white',
          }}
        />
        <Text
          style={{
            fontSize: 17,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Promotions
        </Text>
        <Feather
          onPress={() => {
            navigationn.openDrawer();
          }}
          name="menu"
          size={22}
          style={{
            color: '#16247d',
          }}
        />
      </View>
      <View style={styles.RibonReward}>
        <Ionicons
          name="ribbon-outline"
          size={35}
          style={{
            color: '#16247d',
            paddingRight: 15,
          }}
        />
        <View style={{}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#16247d',
            }}>
            Your current points of all salon shops.
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color: '#16247d',
            }}>
            0 Point
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 'auto',
          height: 5,
          backgroundColor: '#ebebec',
          marginTop: '8%',
        }}></View>
      <View style={styles.TabBar}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          style={{
            backgroundColor: 'white',
          }}
          renderTabBar={renderTabBar}
        />
      </View>
      <View style={styles.CardPromotion}>
        <View
          style={{
            width: 90,
            height: 90,
            backgroundColor: '#ebebec',
            borderRadius: 10,
          }}>
          <Image
            style={{
              flex: 1,
              width: undefined,
              height: undefined,
              borderRadius: 10,
            }}
            source={require('../assets/image/hhhhh.jpg')}></Image>
        </View>
        <View style={{paddingLeft: 10, alignItems: 'flex-start'}}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
            }}>
            កាត់សក់បុរស
          </Text>
          <Text>មែន​ ស្តាយ</Text>
          <Text>⭐⭐⭐⭐⭐ (3)</Text>
          <Text>កាត់សក់បុរស free កក់សក់ជូន</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PromotionScreen;

const styles = StyleSheet.create({
  RibonReward: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    marginLeft: '3%',
    marginTop: '3%',
  },
  BottomTab: {
    width: 'auto',
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignContent: 'center',
  },
  TabBar: {
    width: '100%',
    height: '80%',
  },
  CardPromotion: {
    width: width * 0.95,
    height: 130,
    borderWidth: 0.5,
    borderColor: 'white',
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    elevation: 3,
    alignSelf: 'center',
    zIndex: 1000,
  },
  TabBarView: {},
  indicator: {
    backgroundColor: '#16247d',
    height: 2,
  },
});
