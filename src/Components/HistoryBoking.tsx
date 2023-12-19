import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
// const navigation: any = useNavigation();
const {width} = Dimensions.get('window');
const Data = [
  {
    name: 'មែន​ ស្តាយ',
    phoneNumber: '093383965',
    date: 'Sat, 18 Nov 2023 09:27 AM',
    status: 'Unpaid',
    price: '$ 10.00',
    image: require('../assets/image/haircut.jpg'),
    Service: 'ចាក់សាក់(Tattoo)',
  },
  {
    name: 'មែន​ ស្តាយ',
    phoneNumber: '089217145',
    date: 'Mon, 20 Nov 2023 10:18 AM',
    status: 'Unpaid',
    price: '$ 75.50',
    image: require('../assets/image/haircut.jpg'),
    Service: 'ចាក់សាក់',
  },
  {
    name: 'មែន​ ស្តាយ',
    phoneNumber: '093383965',
    date: 'Sat, 18 Nov 2023 11:10 AM',
    status: 'Unpaid',
    price: '$ 5.00',
    image: require('../assets/image/haircut.jpg'),
    Service: 'កាត់សក់បែបCEO',
  },
  {
    name: 'ABC007',
    phoneNumber: '093383965',
    date: 'Sat, 18 Nov 2023 02:52 AM',
    status: 'Unpaid',
    price: '$ 10.00',
    image: require('../assets/image/haircut5.jpg'),
    Service: 'ម៉ាស្សាមុខ',
  },
  {
    name: 'មែន​ ស្តាយ',
    phoneNumber: '093383965',
    date: 'Sat, 18 Nov 2023 09:27 AM',
    status: 'Unpaid',
    price: '$ 25.00',
    image: require('../assets/image/haircut.jpg'),
    Service: 'Make-up for Wedding',
  },
];

const Approved = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: '#F5F5F5'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Data.map((e, index) => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                width: width * 0.95,
                height: 200,
                alignSelf: 'center',
                marginTop: 10,
                borderRadius: 5,
                elevation: 3,
              }}>
              <View style={{width: '100%', height: '75%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{width: '25%'}}>
                    <View
                      style={{
                        backgroundColor: '#008b8b',
                        width: 60,
                        borderBottomEndRadius: 7,
                        borderTopStartRadius: 7,
                        padding: 2,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        Booking
                      </Text>
                    </View>
                    <Image
                      source={e.image}
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 50,
                        marginLeft: '10%',
                      }}></Image>
                  </View>
                  <View style={{width: '75%'}}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#16247d',
                        fontWeight: 'bold',
                        paddingTop: 10,
                      }}>
                      {e.name}
                    </Text>
                    <Text style={{fontSize: 14, color: 'black', paddingTop: 5}}>
                      {e.phoneNumber}
                    </Text>
                    <Text style={{paddingTop: 5, fontSize: 14, color: 'red'}}>
                      {e.date}
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#F5F5F5',
                      marginTop: '5%',
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      marginLeft: '4%',
                      borderRadius: 15,
                    }}>
                    <Text style={{color: '#16247d', fontSize: 14}}>
                      {e.Service}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  height: '25%',
                  // backgroundColor: 'cyan',
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderTopWidth: 0.3,
                  justifyContent: 'space-between',
                  paddingHorizontal: '4%',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'red', fontSize: 16}}>{e.price}</Text>
                  <Text
                    style={{
                      backgroundColor: 'orange',
                      paddingHorizontal: 10,
                      paddingVertical: 2,
                      borderRadius: 20,
                      color: 'white',
                      fontSize: 14,
                      fontWeight: 'bold',
                      marginLeft: '5%',
                    }}>
                    {e.status}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../assets/image/man2.png')}
                    style={{
                      marginRight: 10,
                      width: 25,
                      height: 25,
                    }}></Image>
                  <Image
                    source={require('../assets/image/gmail.png')}
                    style={{marginRight: 10, width: 25, height: 25}}></Image>
                  <Image
                    source={require('../assets/image/telephone.png')}
                    style={{width: 25, height: 25}}></Image>
                </View>
              </View>
            </View>
          );
        })}
        <View style={{marginTop: 130, borderWidth: 2}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};
const Requested = () => (
  <View>
    <View
      style={{
        marginTop: 40,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
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
  </View>
);
const Rejected = () => (
  <View>
    <View
      style={{
        marginTop: 40,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
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
  </View>
);
const Cancelled = () => (
  <View>
    <View
      style={{
        marginTop: 40,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
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
  </View>
);

const renderScene = SceneMap({
  first: Approved,
  second: Requested,
  third: Rejected,
  forth: Cancelled,
});

const HistoryBooking = () => {
  const navigation: any = useNavigation();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Approved'},
    {key: 'second', title: 'Requested'},
    {key: 'third', title: 'Rejected'},
    {key: 'forth', title: 'Cancelled'},
  ]);
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={{backgroundColor: '#16247d', height: 1}}
      style={{
        backgroundColor: '#f2f2f2',
        width: '100%',
        height: 'auto',
      }}
      tabStyle={{
        width: width / 4,
      }}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: focused ? '#16247d' : 'black',
            margin: 2,
            fontSize: 12,
            fontWeight: 'bold',
          }}>
          {route.title}
        </Text>
      )}></TabBar>
  );

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
          History Booking & Order
        </Text>
        <AntDesign
          name="arrowleft"
          size={25}
          style={{
            color: '#16247d',
          }}
        />
      </View>
      <View style={{width: '100%', height: '100%'}}>
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
    </SafeAreaView>
  );
};

export default HistoryBooking;

const styles = StyleSheet.create({});
