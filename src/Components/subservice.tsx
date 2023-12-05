import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
  Dimensions,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
const {width} = Dimensions.get('window');

const kidData = [
  {
    id: '1',
    title: 'កាត់សក់កូនក្មេង ទាន់សម័យ',
    description: 'ពិន្ទុ: 0.5ដង ហ្រីកក់សក់ ធ្វើម៉ូតសក់ដោយអត់គិតថ្លៃ',
    price: '$ 10.00',
    image: require('../assets/image/girl.png'),
  },
  {
    id: '2',
    title: 'Popular Hairstyles',
    description: '',
    price: '$ 10.00',
    image: require('../assets/image/girl.png'),
  },
];

const Kid = () => {
  const naviation: any = useNavigation();
  return (
    <SafeAreaView>
      <FlatList
        data={kidData}
        renderItem={({item}) => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                alignSelf: 'center',
                height: 110,
                width: '90%',
                flexDirection: 'row',
                marginTop: 10,
                borderRadius: 5,
                elevation: 5,
                zIndex: 1000,
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <View style={{flexDirection: 'row', width: '80%'}}>
                  <Image
                    source={item.image}
                    style={{
                      marginLeft: 10,
                      width: 70,
                      height: 90,
                      marginTop: 5,
                    }}></Image>
                  <View
                    style={{
                      marginLeft: 10,
                      flex: 1,
                      justifyContent: 'space-between',
                      marginVertical: 5,
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          marginTop: 5,
                          fontWeight: 'bold',
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{fontSize: 12, color: 'black', marginTop: 4}}>
                        {item.description}
                      </Text>
                    </View>
                    <Text style={{color: 'red', fontSize: 16, marginTop: 10}}>
                      {item.price}
                    </Text>
                  </View>
                </View>
                <View style={{width: '20%', height: '100%'}}>
                  <View
                    style={{
                      width: '100%',
                      height: '60%',
                    }}></View>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      naviation.push('MakeBookingView');
                    }}
                    style={{
                      backgroundColor: 'white',
                      borderWidth: 2,
                      borderColor: '#16247d',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 30,
                      borderRadius: 6,
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#16247d',
                        fontSize: 12,
                      }}>
                      Booking
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const womanData = [
  {
    id: '1',
    title: 'កាត់សក់ម៉ូតលូហ្វេត ហាយហ្វេត.',
    description: '0,5',
    price: '$ 10.00',
    image: require('../assets/image/woman.png'),
  },
  {
    id: '2',
    title: 'Popular Hairstyles',
    description: 'Popular Hairstyles',
    price: '$ 10.00',
    image: require('../assets/image/woman.png'),
  },
  {
    id: '3',
    title: 'Popular Hairstyles',
    description: 'Popular Hairstyles',
    price: '$ 10.00',
    image: require('../assets/image/woman.png'),
  },
  {
    id: '4',
    title: 'Popular Hairstyles',
    description: 'Popular Hairstyles',
    price: '$ 10.00',
    image: require('../assets/image/woman.png'),
  },
];

const Women = () => {
  const navigation: any = useNavigation();
  return (
    <FlatList
      data={womanData}
      renderItem={({item}) => {
        return (
          <View
            style={{
              backgroundColor: 'white',
              alignSelf: 'center',
              height: 110,
              width: '90%',
              flexDirection: 'row',
              marginTop: 10,
              borderRadius: 5,
              elevation: 5,
              zIndex: 1000,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View style={{flexDirection: 'row', width: '80%'}}>
                <Image
                  source={item.image}
                  style={{
                    marginLeft: 10,
                    width: 70,
                    height: 90,
                    marginTop: 5,
                  }}></Image>
                <View
                  style={{
                    marginLeft: 10,
                    flex: 1,
                    justifyContent: 'space-between',
                    marginVertical: 10,
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        marginTop: 5,
                        fontWeight: 'bold',
                      }}>
                      {item.title}
                    </Text>
                    <Text style={{fontSize: 12, color: 'black', marginTop: 4}}>
                      {item.description}
                    </Text>
                  </View>
                  <Text style={{color: 'red', fontSize: 16, marginTop: 10}}>
                    {item.price}
                  </Text>
                </View>
              </View>
              <View style={{width: '20%', height: '100%'}}>
                <View
                  style={{
                    width: '100%',
                    height: '60%',
                  }}></View>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    navigation.push('MakeBookingView');
                  }}
                  style={{
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: '#16247d',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 30,
                    borderRadius: 6,
                    paddingHorizontal: 10,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#16247d',
                      fontSize: 12,
                    }}>
                    Booking
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }}
      keyExtractor={item => item.id}
    />
  );
};

const manData = [
  {
    id: '1',
    title: 'កាត់សក់ម៉ូតទាន់សម័យ ធ្វើម៉ូតសក់...',
    description: 'ពិន្ទុ: 0.5ដង ហ្រីកក់សក់ ធ្វើម៉ូតសក់ដោយអត់គិតថ្លៃ',
    price: '$ 10.00',
    image: require('../assets/image/man1.png'),
  },
  {
    id: '2',
    title: 'កាត់សក់ម៉ូតទាន់សម័យ ធ្វើម៉ូតសក់...',
    description: 'ពិន្ទុ: 0.5ដង ហ្រីកក់សក់ ធ្វើម៉ូតសក់ដោយអត់គិតថ្លៃ',
    price: '$ 10.00',
    image: require('../assets/image/man1.png'),
  },
  {
    id: '3',
    title: 'កាត់សក់ម៉ូតទាន់សម័យ ធ្វើម៉ូតសក់...',
    description: 'ពិន្ទុ: 0.5ដង ហ្រីកក់សក់ ធ្វើម៉ូតសក់ដោយអត់គិតថ្លៃ',
    price: '$ 10.00',
    image: require('../assets/image/man1.png'),
  },
  {
    id: '4',
    title: 'កាត់សក់ម៉ូតទាន់សម័យ ធ្វើម៉ូតសក់...',
    description: 'ពិន្ទុ: 0.5ដង ហ្រីកក់សក់ ធ្វើម៉ូតសក់ដោយអត់គិតថ្លៃ',
    price: '$ 10.00',
    image: require('../assets/image/man1.png'),
  },
  {
    id: '5',
    title: 'កាត់សក់ម៉ូតទាន់សម័យ ធ្វើម៉ូតសក់...',
    description: 'ពិន្ទុ: 0.5ដង ហ្រីកក់សក់ ធ្វើម៉ូតសក់ដោយអត់គិតថ្លៃ',
    price: '$ 10.00',
    image: require('../assets/image/man1.png'),
  },
];

const Men = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
      <FlatList
        data={manData}
        renderItem={({item}) => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                alignSelf: 'center',
                height: 110,
                width: '90%',
                flexDirection: 'row',
                marginTop: 10,
                borderRadius: 5,
                elevation: 5,
                zIndex: 1000,
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <View style={{flexDirection: 'row', width: '80%'}}>
                  <Image
                    source={item.image}
                    style={{
                      marginLeft: 10,
                      width: 70,
                      height: 90,
                      marginTop: 5,
                    }}></Image>
                  <View style={{marginLeft: 10, flex: 1}}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        marginTop: 5,
                        fontWeight: 'bold',
                      }}>
                      {item.title}
                    </Text>
                    <Text style={{fontSize: 12, color: 'black', marginTop: 4}}>
                      {item.description}
                    </Text>
                    <Text style={{color: 'red', fontSize: 16, marginTop: 10}}>
                      {item.price}
                    </Text>
                  </View>
                </View>
                <View style={{width: '20%', height: '100%'}}>
                  <View
                    style={{
                      width: '100%',
                      height: '60%',
                    }}></View>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      navigation.push('MakeBookingView');
                    }}
                    style={{
                      backgroundColor: 'white',
                      borderWidth: 2,
                      borderColor: '#16247d',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 30,
                      borderRadius: 6,
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#16247d',
                        fontSize: 12,
                      }}>
                      Booking
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const renderScene = SceneMap({
  first: Men,
  second: Women,
  third: Kid,
});

export const SubService = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'first',
      title: 'Men',
    },
    {
      key: 'second',
      title: 'Women',
    },
    {
      key: 'third',
      title: 'Kid',
    },
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={{
        backgroundColor: '#f2f2f2',
        width: '100%',
        height: 'auto',
      }}
      tabStyle={{
        marginTop: 5,
        width: width / 3,
        borderTopWidth: 0.3,
        borderRightWidth: 0.3,
      }}
      renderLabel={({route, focused}) => (
        <Text
          style={{
            color: focused ? '#16247d' : 'black',
            margin: 5,
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          {route.title}
        </Text>
      )}></TabBar>
  );

  const naviation: any = useNavigation();

  return (
    <SafeAreaView style={{}}>
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
            naviation.goBack();
          }}>
          <AntDesign
            name="arrowleft"
            color={'white'}
            size={24}
            style={
              {
                // paddingLeft: '5%',
              }
            }></AntDesign>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 17,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            // paddingLeft: '25%',
          }}>
          Sub Service
        </Text>
        <AntDesign
          name="hearto"
          size={22}
          color={'white'}
          style={
            {
              // paddingLeft: '25%',
            }
          }></AntDesign>
      </View>
      <View style={styles.Body}>
        <View style={styles.RowBodyI}>
          <View
            style={{
              width: '35%',
              borderRadius: 5,
              height: 140,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: '100%',
                height: '90%',
              }}
              source={require('../assets/image/haircut.jpg')}></Image>
          </View>
          <View style={styles.FixText}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  paddingBottom: 8,
                  color: 'black',
                  paddingRight: '30%',
                }}>
                កាត់សក់បុរស
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  paddingBottom: 8,
                  color: 'red',
                }}>
                $ 5.00
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#16247d',
                  fontSize: 15,
                  paddingBottom: 10,
                  fontWeight: 'bold',
                  paddingRight: '48%',
                  marginTop: -5,
                }}>
                មែន​ ស្តាយ
              </Text>
              <Text
                style={{
                  color: 'red',
                  fontSize: 15,
                  paddingBottom: 5,
                  fontWeight: 'bold',
                }}>
                Up
              </Text>
            </View>
            <Text style={{fontSize: 14, paddingBottom: 5, marginTop: -5}}>
              ⭐⭐⭐⭐⭐ (3)
            </Text>
            <Text style={{fontSize: 14, color: 'black', paddingBottom: 7}}>
              ហាងយើងខ្ញុំផ្ដល់ជូនទាំងគុណភាព​ និង
            </Text>
            <Text style={{fontSize: 14, color: 'black'}}>
              អនាម័យ ជូនបងប្អូន
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 35,
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: '40%',
          }}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome6
              name="location-dot"
              color={'#16247d'}
              size={12}
              style={{marginTop: 4}}></FontAwesome6>
            <Text
              style={{
                color: '#16247d',
                fontWeight: 'bold',
                paddingLeft: 10,
                fontSize: 12,
              }}>
              None
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 25}}>
            <EvilIcons name="clock" color={'#16247d'} size={18}></EvilIcons>
            <Text
              style={{
                color: '#16247d',
                fontWeight: 'bold',
                paddingLeft: 5,
                fontSize: 12,
              }}>
              Opening
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: '10%'}}>
          <TouchableOpacity
            onPress={() => {
              naviation.push('GalleryView');
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: 'white',
                borderRadius: 20,
              }}>
              <FontAwesome name="image" size={23} color={'grey'}></FontAwesome>
              <Text
                style={{
                  marginLeft: 10,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                Gallery
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('Make a Booking');
              naviation.push('MakeBookingView');
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 15,
                paddingVertical: 10,
                backgroundColor: 'white',
                marginLeft: 18,
                borderRadius: 20,
              }}>
              <AntDesign name="isv" size={23} color={'#16247d'}></AntDesign>
              <Text
                style={{
                  marginLeft: 10,
                  color: '#16247d',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                MAKE A BOOKING
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.TabBar}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          style={{
            backgroundColor: 'white',
          }}
          renderTabBar={renderTabBar}></TabView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Body: {
    marginTop: 10,
    width: '100%',
    height: '21%',
    borderWidth: 1,
    borderColor: '#eef2fa',
    marginHorizontal: 15,
    borderRadius: 10,
  },
  RowBodyI: {
    width: '100%',
    height: '48%',
    flexDirection: 'row',
  },
  FixText: {
    paddingLeft: 10,
    width: '65%',
  },
  indicator: {
    backgroundColor: '#16247d',
    height: 1,
  },
  TabBar: {
    width: '100%',
    height: '100%',
  },
});
