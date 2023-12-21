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
                width: width * 0.95,
                flexDirection: 'row',
                marginVertical: 10,
                paddingHorizontal: '3%',
                borderRadius: 5,
                elevation: 2,
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
                      paddingHorizontal: 5,
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
  {
    id: '5',
    title: 'Popular Hairstyles',
    description: 'Popular Hairstyles',
    price: '$ 10.00',
    image: require('../assets/image/woman.png'),
  },
  {
    id: '6',
    title: 'Popular Hairstyles',
    description: 'Popular Hairstyles',
    price: '$ 10.00',
    image: require('../assets/image/woman.png'),
  },
  {
    id: '7',
    title: 'Popular Hairstyles',
    description: 'Popular Hairstyles',
    price: '$ 10.00',
    image: require('../assets/image/woman.png'),
  },
];

const Women = () => {
  const navigation: any = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <FlatList
        data={womanData}
        renderItem={({item}) => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                alignSelf: 'center',
                height: 110,
                width: width * 0.95,
                flexDirection: 'row',
                marginVertical: 5,
                borderRadius: 5,
                elevation: 2,
                zIndex: 1000,
                paddingHorizontal: '3%',
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
                      paddingHorizontal: 5,
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
      <View style={{marginTop: 80}}></View>
    </ScrollView>
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
  {
    id: '6',
    title: 'កាត់សក់ម៉ូតទាន់សម័យ ធ្វើម៉ូតសក់...',
    description: 'ពិន្ទុ: 0.5ដង ហ្រីកក់សក់ ធ្វើម៉ូតសក់ដោយអត់គិតថ្លៃ',
    price: '$ 10.00',
    image: require('../assets/image/man1.png'),
  },
  {
    id: '7',
    title: 'កាត់សក់ម៉ូតទាន់សម័យ ធ្វើម៉ូតសក់...',
    description: 'ពិន្ទុ: 0.5ដង ហ្រីកក់សក់ ធ្វើម៉ូតសក់ដោយអត់គិតថ្លៃ',
    price: '$ 10.00',
    image: require('../assets/image/man1.png'),
  },
];

const Men = () => {
  const navigation: any = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <FlatList
        data={manData}
        renderItem={({item}) => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                alignSelf: 'center',
                height: 110,
                width: width * 0.95,
                flexDirection: 'row',
                marginVertical: 5,
                borderRadius: 5,
                elevation: 2,
                zIndex: 1000,
                paddingHorizontal: '3%',
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
                      width: 70,
                      height: 90,
                      marginTop: 5,
                    }}></Image>
                  <View
                    style={{
                      marginLeft: 10,
                      justifyContent: 'space-between',
                      paddingBottom: 10,
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          color: 'black',
                          marginTop: 5,
                          fontWeight: 'bold',
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{fontSize: 15, color: 'black', marginTop: 4}}>
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
                      paddingHorizontal: 5,
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
      <View style={{marginTop: 80}}></View>
    </ScrollView>
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
        backgroundColor: 'white',
        width: '100%',
        // height: 'auto',
        borderTopWidth: 0.5,
      }}
      tabStyle={{
        marginTop: -5,
        width: width / 3,
      }}
      renderLabel={({route, focused}) => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {/* <View style={{borderWidth: 0.5, height: 40}}></View> */}
          <Text
            style={{
              color: focused ? '#16247d' : 'black',
              margin: 5,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            {route.title}
          </Text>
          <View
            style={
              route.title == 'Women'
                ? {
                    width: 1.8,
                    height: '100%',
                    backgroundColor: 'gray',
                    position: 'absolute',
                    right: -45,
                  }
                : null
            }></View>
          <View
            style={
              route.title == 'Men'
                ? {
                    width: 1.8,
                    height: '100%',
                    backgroundColor: 'gray',
                    position: 'absolute',
                    right: -45,
                  }
                : null
            }></View>
        </View>
      )}></TabBar>
  );

  const naviation: any = useNavigation();
  const {width, height} = Dimensions.get('window');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
            style={{}}></AntDesign>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 17,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Sub Service
        </Text>
        <AntDesign
          name="hearto"
          size={22}
          color={'white'}
          style={{}}></AntDesign>
      </View>
      <View
        style={{
          marginTop: 10,
          width: '100%',
          height: height * 0.32,
          borderWidth: 1,
          borderColor: 'white',
          marginHorizontal: 15,
          borderRadius: 10,
        }}>
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
            <Text style={{fontSize: 14, color: 'black', paddingBottom: 5}}>
              ហាងយើងខ្ញុំផ្ដល់ជូនទាំងគុណភាព​ និង
            </Text>
            <Text style={{fontSize: 14, color: 'black'}}>
              អនាម័យ ជូនបងប្អូន
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: '38%',
          }}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome6
              name="location-dot"
              color={'#16247d'}
              size={12}
              style={{marginTop: 2}}></FontAwesome6>
            <Text
              style={{
                color: '#16247d',
                fontWeight: 'bold',
                paddingLeft: 5,
                fontSize: 12,
              }}>
              None
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 20}}>
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
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            // marginLeft: '25%',
            marginBottom: 5,
            justifyContent: 'flex-end',
            paddingHorizontal: '7%',
          }}>
          <TouchableOpacity
            onPress={() => {
              naviation.push('GalleryView');
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 15,
                paddingVertical: 8,
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: 20,
              }}>
              <FontAwesome name="image" size={20} color={'grey'}></FontAwesome>
              <Text
                style={{
                  marginLeft: 10,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 13,
                }}>
                Gallery
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              naviation.push('MakeBookingView');
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 15,
                paddingVertical: 8,
                backgroundColor: '#f5f5f5',
                marginLeft: 18,
                borderRadius: 20,
                alignItems: 'center',
              }}>
              <AntDesign name="isv" size={20} color={'#16247d'}></AntDesign>
              <Text
                style={{
                  marginLeft: 10,
                  color: '#16247d',
                  fontWeight: 'bold',
                  fontSize: 13,
                  alignItems: 'center',
                }}>
                MAKE A BOOKING
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View
        style={{
          width: '100%',
          height: height * 0.26,
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: width * 0.35,

            height: '100%',
            marginHorizontal: 5,
          }}>
          <View
            style={{
              width: '100%',
              height: 140,
            }}>
            <Image
              source={require('../assets/image/haircut.jpg')}
              style={{width: '100%', height: '100%'}}></Image>
          </View>
        </View>
        <View
          style={{
            width: width * 0.61,
            // backgroundColor: 'skyblue',
            height: '100%',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
              កាត់សក់បុរស
            </Text>
            <Text style={{color: 'red', fontSize: 14}}>$ 5.00</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 13,
                color: '#16247d',
                fontWeight: 'bold',
                marginTop: 5,
              }}>
              មែនស្តាយ
            </Text>
            <Text style={{color: 'red', fontSize: 14, marginTop: 5}}>Up</Text>
          </View>
          <Text style={{fontSize: 13, marginTop: 5}}>⭐⭐⭐⭐⭐</Text>
          <View>
            <Text style={{marginTop: 5, fontSize: 14, color: 'black'}}>
              ហាងយើងខ្ញុំផ្ដល់ជូនទាំងគុណភាព​ និងអនាម័យ ជូនបងប្អូន💈
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
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
                    paddingLeft: 3,
                    fontSize: 12,
                    marginTop: 2,
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
                    paddingLeft: 3,
                    fontSize: 12,
                  }}>
                  Opening
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => {
                naviation.push('GalleryView');
              }}
              style={{
                flexDirection: 'row',
                height: 30,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#dbd7d2',
                borderRadius: 50,
                marginLeft: -20,
              }}>
              <FontAwesome name="image" size={20} color={'grey'}></FontAwesome>
              <Text style={{marginLeft: 5}}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                naviation.push('MakeBookingView');
              }}
              style={{
                flexDirection: 'row',
                height: 30,
                width: 160,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#dbd7d2',
                borderRadius: 50,
              }}>
              <FontAwesome name="image" size={20} color={'grey'}></FontAwesome>
              <Text style={{marginLeft: 5}}>MAKE A BOOKING</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
      <View
        style={{
          width: '100%',
          height: height * 0.68,
        }}>
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
  Body: {},
  RowBodyI: {
    width: '100%',
    height: '48%',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  FixText: {
    paddingLeft: 10,
    width: '65%',
  },
  indicator: {
    backgroundColor: '#16247d',
    height: 1,
  },
  TabBar: {},
  divider: {
    width: 1.8,
    height: '100%',
    backgroundColor: '#f5f5f5',
    position: 'absolute',
    right: 5,
  },
});
