import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
  Image,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Data = [
  {
    id: '1',
    name: 'មែន​ ស្តាយ',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/image/haircut2.png'),
  },
];

const Salons = () => (
  <SafeAreaView>
    {Data.map((e, index) => {
      return (
        <TouchableOpacity
          style={{
            height: 130,
            width: '90%',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 10,
            backgroundColor: 'white',
            borderRadius: 5,
            flexDirection: 'row',
            elevation: 5,
            zIndex: 1000,
          }}>
          <Image
            style={{
              width: '30%',
              height: '80%',
              borderRadius: 4,
              marginTop: 5,
              marginLeft: 10,
            }}
            source={e.img}
          />
          <View
            style={{
              flex: 1,
              marginLeft: 5,
              justifyContent: 'space-between',
              width: '70%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: 5,
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  flex: 1,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                {e.name}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  // navigation.push('MakeBookingView');
                }}
                style={{
                  borderWidth: 1,
                  borderColor: '#144389',
                  borderRadius: 6,
                  padding: 3,
                  marginLeft: '10%',
                }}>
                <Text
                  style={{
                    color: '#144389',
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Booking
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 10}}>⭐⭐⭐⭐⭐</Text>
            <Text style={{fontSize: 13, color: 'black'}}>{e.description}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <Entypo name="location-pin" size={13} color="#144389" />
                <Text
                  style={{fontSize: 12, color: '#144389', fontWeight: 'bold'}}>
                  None
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 5,
                  padding: 4,
                }}>
                <Ionicons
                  name="time-outline"
                  size={14}
                  color={'#16247d'}
                  style={{
                    marginTop: 2,
                    marginLeft: 20,
                  }}
                />
                <Text
                  style={{fontSize: 12, color: '#144389', fontWeight: 'bold'}}>
                  Openning
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    })}
  </SafeAreaView>
);
const Professors = () => (
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
const Services = () => (
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
  first: Salons,
  second: Professors,
  third: Services,
});

const {width} = Dimensions.get('window');

const Favorite = () => {
  const navigation: any = useNavigation();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Salons'},
    {key: 'second', title: 'Professors'},
    {key: 'third', title: 'Services'},
  ]);
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={{backgroundColor: '#16247d', height: 2}}
      style={{
        backgroundColor: '#f2f2f2',
      }}
      tabStyle={{
        width: width / 3,
      }}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: focused ? '#16247d' : 'black',
            margin: 5,
            fontSize: 13,
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
          Favourite
        </Text>
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

export default Favorite;

const styles = StyleSheet.create({});
