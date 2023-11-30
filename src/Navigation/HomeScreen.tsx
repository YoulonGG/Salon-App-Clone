import {
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ToastAndroid,
  Button,
  TouchableHighlightBase,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import GoogleMap from '../Components/GoogleMap';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const ScamData = [
  {
    id: '1',
    item: '',
  },
];

const PopularSalonsData = [
  {
    id: '1',
    name: 'មែន ស្តាយ',
    customer: '27 ',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/image/haircut5.jpg'),
  },
  {
    id: '2',
    name: '007 haircut',
    customer: '1 ',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/image/haircut5.jpg'),
  },
  {
    id: '3',
    name: 'មែន ស្តាយ',
    customer: '27 ',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/image/haircut5.jpg'),
  },
  {
    id: '4',
    name: '007 haircut',
    customer: '1',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/image/haircut5.jpg'),
  },
  {
    id: '5',
    name: '007 haircut',
    customer: '1',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/image/haircut5.jpg'),
  },
];

const TopRatingProfessorData = [
  {
    id: '1',
    name: 'Vi Tu',
    img: require('../assets/image/tu.jpg'),
  },
  {
    id: '2',
    name: 'John Youlong',
    img: require('../assets/image/me.jpg'),
  },
  {
    id: '3',
    name: 'Prash Fukkumotoman',
    img: require('../assets/image/man1.png'),
  },
  {
    id: '4',
    name: 'Master Lee',
    img: require('../assets/image/monk.png'),
  },
];

const NewSalonData = [
  {
    id: '1',
    name: 'Teng Barer',
    customer: '0',
    img: require('../assets/image/salon1.jpg'),
  },
  {
    id: '2',
    name: 'Vicci Beauty Bar',
    des: '',
    img: require('../assets/image/salon1.jpg'),
  },
  {
    id: '3',
    name: 'Yaya',
    des: '',
    img: require('../assets/image/salon1.jpg'),
  },
  {
    id: '4',
    name: '007 Haircut',
    des: '',
    img: require('../assets/image/salon1.jpg'),
  },
  {
    id: '5',
    name: 'Beauty Salon',
    des: '',
    img: require('../assets/image/salon1.jpg'),
  },
];

const PopularSalon = () => {
  return (
    <ScrollView horizontal={true}>
      {PopularSalonsData.map((e, index) => {
        return (
          <View key={index}>
            <Text style={{color: 'red'}}>Hi</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const HomeScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  console.log('Check: ', isEnabled);
  const navigation: any = useNavigation();
  const snapPoint = useMemo(() => ['25%', '50%', '70%'], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['11%', '41%', '71%', '92%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {}, []);

  const renderInner = () => {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={{paddingHorizontal: 10, marginBottom: height * 0.075}}>
          <Text
            style={{
              color: '#16247d',
              fontSize: 17,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 10,
              marginTop: 0,
            }}>
            Explore
          </Text>
          <View
            style={{
              width: '95%',
              height: 200,
              marginTop: 0,
              backgroundColor: '#F4F5FA',
              alignSelf: 'center',
              borderRadius: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 15,
                width: '100%',
                height: '50%',
              }}>
              <View
                style={{
                  width: '18%',
                  alignItems: 'center',
                  marginLeft: '1%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Bleaching');
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: 'pink',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/image/woman.png')}
                    style={styles.img}></Image>
                </TouchableOpacity>
                <Text style={{color: 'black', fontSize: 12}}>Bleaching</Text>
              </View>
              <View
                style={{
                  width: '18%',
                  alignItems: 'center',
                  marginLeft: '2%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('BlowDry');
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: '#FFFF00',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/image/hair-dryerr.png')}
                    style={styles.img}></Image>
                </TouchableOpacity>
                <Text style={{color: 'black', fontSize: 12}}>Blow Dry</Text>
              </View>
              <View
                style={{
                  width: '18%',
                  alignItems: 'center',
                  marginLeft: '2%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Coctail');
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: '#FFA500',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/image/nail.png')}
                    style={styles.img}></Image>
                </TouchableOpacity>
                <Text style={{color: 'black', fontSize: 12}}>
                  Cocktail Party Ma...
                </Text>
              </View>
              <View
                style={{
                  width: '18%',
                  alignItems: 'center',
                  marginLeft: '2%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('EdgeUp');
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: '#A52A2A',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/image/makeup.png')}
                    style={styles.img}></Image>
                </TouchableOpacity>
                <Text style={{color: 'black', fontSize: 12}}>Edge up</Text>
              </View>
              <View
                style={{
                  width: '18%',
                  alignItems: 'center',
                  marginLeft: '2%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Eyebrow');
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: '#FF00FF',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/image/make-up.png')}
                    style={styles.img}></Image>
                </TouchableOpacity>
                <Text style={{color: 'black', fontSize: 12}}>
                  Eybrow Wax and ...
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: '-2.5%',
                width: '100%',
                height: '50%',
              }}>
              <View
                style={{
                  width: '18%',
                  alignItems: 'center',
                  marginLeft: '1%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Eyebrow2');
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: '#00FFFF',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/image/makeup-pouch.png')}
                    style={styles.img}></Image>
                </TouchableOpacity>
                <Text
                  style={{color: 'black', fontSize: 12, textAlign: 'center'}}>
                  Eyebrow Wax with...
                </Text>
              </View>
              <View
                style={{
                  width: '18%',
                  alignItems: 'center',
                  marginLeft: '2%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('FaceMassage');
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: '#0000FF',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/image/hairstyle.png')}
                    style={styles.img}></Image>
                </TouchableOpacity>
                <Text
                  style={{color: 'black', fontSize: 12, textAlign: 'center'}}>
                  Face Massage
                </Text>
              </View>
              <View
                style={{
                  width: '18%',
                  alignItems: 'center',
                  marginLeft: '2%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('FrenchTip');
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: '#800080',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/image/maid.png')}
                    style={styles.img}></Image>
                </TouchableOpacity>
                <Text style={{color: 'black', fontSize: 12}}>French tip</Text>
              </View>
              <View
                style={{
                  width: '18%',
                  alignItems: 'center',
                  marginLeft: '2%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Gel');
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: '#00FF00',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/image/kidd.png')}
                    style={styles.img}></Image>
                </TouchableOpacity>
                <Text style={{color: 'black', fontSize: 12}}>GEL Color</Text>
              </View>
              <View
                style={{
                  width: '18%',
                  alignItems: 'center',
                  marginLeft: '2%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('More');
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: '#C0C0C0',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/image/menu.png')}
                    style={styles.img}></Image>
                </TouchableOpacity>
                <Text
                  style={{color: 'black', fontSize: 12, textAlign: 'center'}}>
                  More
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              color: '#16247d',
              fontSize: 15,
              fontWeight: 'bold',
              paddingBottom: 15,
              paddingLeft: '2%',
              marginTop: 15,
            }}>
            Popular Salons
          </Text>
          <FlatList
            scrollEnabled={true}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={PopularSalonsData}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    navigation.push('ShopInformation');
                  }}
                  style={{
                    width: 190,
                    height: 200,
                    marginLeft: 10,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    elevation: 3,
                    flex: 1,
                  }}>
                  <Image
                    source={item.img}
                    style={{
                      width: '100%',
                      height: '30%',
                      backgroundColor: 'grey',
                      borderRadius: 5,
                      marginBottom: 10,
                    }}></Image>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: '2%',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <FontAwesome6
                        name="location-dot"
                        size={11}
                        color={'#16247d'}
                        style={{
                          marginLeft: 5,
                          marginTop: 3,
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#16247d',
                          fontWeight: 'bold',
                          marginLeft: 5,
                        }}>
                        None
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'grey',
                          fontWeight: 'bold',
                          marginLeft: 50,
                        }}>
                        {item.customer}
                      </Text>
                      <Text style={{fontSize: 12, color: 'grey'}}>
                        Customer
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginTop: 5,
                      fontSize: 15,
                      color: 'black',
                      paddingHorizontal: '2%',
                    }}>
                    {item.name}
                  </Text>

                  <Text
                    style={{
                      paddingHorizontal: '2%',
                      fontSize: 12,
                    }}>
                    ⭐⭐⭐⭐⭐ (3)
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      paddingHorizontal: '2%',
                      color: 'black',
                      marginTop: 5,
                    }}>
                    {item.description}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      navigation.push('MakeBookingView');
                    }}
                    style={{
                      height: 30,
                      margin: '2%',
                      backgroundColor: 'white',
                      borderColor: '#16247d',
                      borderWidth: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#16247d',
                        fontWeight: 'bold',
                      }}>
                      Booking Now
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            }}
          />
          <Text
            style={{
              marginTop: 15,
              paddingLeft: '2%',
              fontWeight: 'bold',
              color: '#16247d',
              fontSize: 16,
            }}>
            Special Promotions
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.push('DetailPromotion');
            }}
            style={{
              height: width * 0.37,
              width: width * 0.4,
              backgroundColor: '#eef1f6',
              marginVertical: 15,
              borderRadius: 8,
              marginLeft: '2%',
            }}>
            <Image
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 8,
              }}
              source={require('../assets/image/haircut2.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#16247d',
              fontSize: 16,
              fontWeight: 'bold',
              paddingLeft: '2%',
            }}>
            Top Rating Salons
          </Text>
          <FlatList
            data={PopularSalonsData}
            style={{width: width, marginTop: 15}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    navigation.push('ShopInformation');
                  }}
                  style={{
                    width: 190,
                    height: 200,
                    marginLeft: 10,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    elevation: 3,
                    flex: 1,
                  }}>
                  <Image
                    source={item.img}
                    style={{
                      width: '100%',
                      height: '30%',
                      backgroundColor: 'grey',
                      borderRadius: 5,
                      marginBottom: 10,
                    }}></Image>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: '2%',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <FontAwesome6
                        name="location-dot"
                        size={11}
                        color={'#16247d'}
                        style={{
                          marginLeft: 5,
                          marginTop: 3,
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#16247d',
                          fontWeight: 'bold',
                          marginLeft: 5,
                        }}>
                        None
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'grey',
                          fontWeight: 'bold',
                          marginLeft: 50,
                        }}>
                        {item.customer}
                      </Text>
                      <Text style={{fontSize: 12, color: 'grey'}}>
                        Customer
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginTop: 5,
                      fontSize: 15,
                      color: 'black',
                      paddingHorizontal: '2%',
                    }}>
                    {item.name}
                  </Text>

                  <Text
                    style={{
                      paddingHorizontal: '2%',
                      fontSize: 12,
                    }}>
                    ⭐⭐⭐⭐⭐ (3)
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      paddingHorizontal: '2%',
                      color: 'black',
                      marginTop: 5,
                    }}>
                    {item.description}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      navigation.push('MakeBookingView');
                    }}
                    style={{
                      height: 30,
                      margin: '2%',
                      backgroundColor: 'white',
                      borderColor: '#16247d',
                      borderWidth: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#16247d',
                        fontWeight: 'bold',
                      }}>
                      Booking Now
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            }}
          />
          <Text
            style={{
              marginTop: 15,
              paddingLeft: '2%',
              fontWeight: 'bold',
              color: '#16247d',
              fontSize: 16,
            }}>
            Top Rating Professor
          </Text>
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            data={TopRatingProfessorData}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                  <View
                    style={{
                      width: width * 0.455,
                      height: height * 0.24,
                      borderWidth: 1,
                      marginTop: 10,
                      borderRadius: 8,
                      borderColor: '#f2f2f2',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      marginLeft: '2%',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      elevation: 3,
                    }}>
                    <View style={styles.imgCircleTopRating}>
                      <Image
                        style={{
                          flex: 1,
                          height: 60,
                          width: 60,
                          borderRadius: 60 / 2,
                        }}
                        source={item.img}
                      />
                    </View>
                    <Text
                      style={{
                        color: '#16247d',
                        fontWeight: 'bold',
                        fontSize: 15,
                      }}>
                      {item.name}
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <AntDesign size={14} color={'yellow'} name="staro" />
                      <AntDesign size={14} color={'yellow'} name="staro" />
                      <AntDesign size={14} color={'yellow'} name="staro" />
                      <AntDesign size={14} color={'yellow'} name="staro" />
                      <AntDesign size={14} color={'yellow'} name="staro" />
                    </View>
                    <Text style={{paddingTop: 5, color: 'black'}}>
                      0 Credit / 0 Review
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <Entypo
                        size={14}
                        color={'#16247d'}
                        name="location-pin"
                        style={{marginTop: 2.5, fontWeight: 'bold'}}
                      />
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#16247d',
                          fontWeight: 'bold',
                        }}>
                        None
                      </Text>
                    </View>
                  </View>
                  <View style={{marginTop: 10}}></View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={e => e.id}
          />
          <View style={{marginTop: 10}}></View>
          <Text
            style={{
              color: '#16247d',
              fontWeight: 'bold',
              marginTop: 10,
              fontSize: 16,
              marginLeft: '2%',
            }}>
            New Salons
          </Text>
          <FlatList
            data={NewSalonData}
            style={{width: width}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    navigation.push('ShopInformation');
                  }}
                  style={{
                    width: 190,
                    height: 200,
                    marginTop: 10,
                    marginLeft: 8,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    elevation: 5,
                    flex: 1,
                  }}>
                  <Image
                    source={item.img}
                    style={{
                      width: '100%',
                      height: '30%',
                      backgroundColor: 'grey',
                      borderRadius: 5,
                      marginBottom: 10,
                    }}></Image>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: '2%',
                    }}>
                    <FontAwesome6
                      name="location-dot"
                      size={11}
                      color={'#16247d'}
                      style={{
                        marginLeft: 5,
                        marginTop: 3,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#16247d',
                        fontWeight: 'bold',
                        marginLeft: 5,
                      }}>
                      None
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginTop: 5,
                      fontSize: 15,
                      color: 'black',
                      paddingHorizontal: '2%',
                    }}>
                    {item.name}
                  </Text>

                  <Text
                    style={{
                      paddingHorizontal: '2%',
                      fontSize: 12,
                      marginTop: 5,
                    }}>
                    ⭐⭐⭐⭐⭐ (3)
                  </Text>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      navigation.push('MakeBookingView');
                    }}
                    style={{
                      height: 30,
                      margin: '2%',
                      backgroundColor: 'white',
                      borderColor: '#16247d',
                      borderWidth: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      marginTop: '17%',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#16247d',
                        fontWeight: 'bold',
                      }}>
                      Booking Now
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#16247d'}}>
      <GoogleMap />
      {/* <BottomSheett /> */}
      <View style={styles.searchSection}>
        <FontAwesome
          onPress={() => {
            navigation.openDrawer();
          }}
          name="bars"
          size={20}
          style={{
            color: 'black',
            paddingRight: 10,
            marginLeft: 15,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.push('SearchBar');
          }}
          style={{flex: 1, borderRadius: 5}}>
          <TextInput
            editable={false}
            placeholder="Search Salons..."
            style={{fontSize: 15, color: 'black'}}
          />
        </TouchableOpacity>
        <Feather
          name="search"
          size={20}
          style={{
            color: 'black',
            marginRight: 15,
          }}
        />
        <TouchableOpacity activeOpacity={1} onPress={toggleSwitch}>
          <View
            style={{
              width: 18,
              borderRadius: 50,
              height: 18,
              marginRight: 15,
            }}>
            {isEnabled ? (
              <Image
                style={{flex: 1, width: 18, height: 18, borderRadius: 50}}
                source={require('../assets/image/cambodia.png')}
              />
            ) : (
              <Image
                style={{flex: 1, width: 18, height: 18, borderRadius: 50}}
                source={require('../assets/image/england.png')}
              />
            )}
          </View>
        </TouchableOpacity>
        <Ionicons
          name="notifications-outline"
          color="black"
          size={20}
          style={{
            color: 'black',
            marginRight: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 60,
          width: 'auto',
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={{
              marginTop: 12,
              alignItems: 'center',
              width: 80,
              height: 40,
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: 'white',
              borderRadius: 20,
              borderColor: 'grey',
              marginLeft: 15,
              elevation: 10,
              zIndex: 1000,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 15}}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 12,
              alignItems: 'center',
              width: 140,
              height: 40,
              paddingHorizontal: 5,
              paddingVertical: 10,
              backgroundColor: 'white',
              borderRadius: 20,
              marginLeft: 10,
              elevation: 10,
              zIndex: 1000,
              justifyContent: 'center',
            }}>
            <Text style={{color: '#16247d', fontSize: 15, textAlign: 'center'}}>
              Mobile Services
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 12,
              alignItems: 'center',
              width: 100,
              height: 40,
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: 'white',
              borderRadius: 20,
              marginLeft: 10,
              flexDirection: 'row',
              elevation: 10,
              zIndex: 1000,
              justifyContent: 'center',
            }}>
            <Entypo
              name="shop"
              size={17}
              style={{
                marginRight: 10,
                color: '#16247d',
              }}
            />
            <Text style={{color: 'black', fontSize: 15}}>Shops</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 12,
              alignItems: 'center',
              width: 130,
              height: 40,
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: 'white',
              borderRadius: 20,
              marginLeft: 10,
              flexDirection: 'row',
              elevation: 10,
              zIndex: 1000,
              justifyContent: 'center',
            }}>
            <FontAwesome6
              name="scissors"
              size={17}
              style={{
                marginRight: 10,
                color: '#16247d',
              }}
            />
            <Text style={{color: 'black', fontSize: 15, textAlign: 'center'}}>
              Professor
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View
        style={{
          marginTop: '60%',
          width: '100%',
          paddingLeft: '85%',
          height: 100,
          // backgroundColor: 'white',
        }}>
        <TouchableOpacity
          style={{
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,

            backgroundColor: 'white',
            borderRadius: 20,
            elevation: 10,
            // zIndex: 1000,
          }}>
          <Ionicons name="reload" color="#16247d" size={22} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            backgroundColor: 'white',
            borderRadius: 20,
            elevation: 10,
            // zIndex: 1000,
          }}>
          <FontAwesome6 name="location-crosshairs" color="black" size={22} />
        </TouchableOpacity>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.inditorBottomSheet}
        onChange={handleSheetChanges}>
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          children={renderInner()}
          contentContainerStyle={{}}
        />
      </BottomSheet>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  img: {
    width: '60%',
    height: '60%',
  },
  searchSection: {
    marginTop: 8,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 0,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: ' #D3D3D3',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
    height: 47,
    zIndex: 1000,
  },
  input: {
    flex: 1,
    borderRadius: 5,
    fontSize: 16,
    color: 'black',
  },
  FilterAll: {
    width: 60,
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 13,
  },
  FilterII: {
    width: 'auto',
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 13,
    flexDirection: 'row',
  },
  IconStyle: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    bottom: height * 0.5,
    right: 0,
    marginRight: 15,
  },
  IconStyleII: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    bottom: height * 0.44,
    right: 0,
    marginRight: 15,
  },
  BottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: 100,
    height: 100,
    // backgroundColor: 'red',
  },
  contentContainer: {
    // flex: 1,
    // alignItems: 'center',
  },
  PopularSalonCard: {
    flex: 1,
    marginTop: 15,
    height: height * 0.2,
    marginLeft: 15,
    width: width * 0.52,
    backgroundColor: 'white',
    borderRadius: 7,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    // padding: 10,
  },
  ScrollPopularSalon: {
    marginTop: 10,
    height: height * 0.36,
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  txtBooking: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#16247d',
    textAlign: 'center',
  },
  Booking: {
    borderWidth: 0.8,
    // marginTop: 7,
    marginHorizontal: 10,
    paddingVertical: 5,
    position: 'absolute',
    width: '90%',
    bottom: 0,
    marginBottom: 5,
    borderColor: '#16247d',
    borderRadius: 4,
  },
  PopularCard: {
    width: width * 0.5,
    height: height * 0.276,
    marginRight: 10,
    backgroundColor: 'white',
    marginTop: 15,
    borderRadius: 8,
    borderBottomWidth: 0.3,
    borderRightWidth: 0.1,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // paddingBottom:10
  },

  imgCircleTopRating: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#f2f2f2',
  },

  inditorBottomSheet: {
    width: width * 0.1,
    height: 8,
    backgroundColor: 'grey',
    alignSelf: 'center',
    borderRadius: 8,
  },
});
