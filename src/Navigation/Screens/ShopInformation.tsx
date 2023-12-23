import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ShopInformation = () => {
  const navigation: any = useNavigation();
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView>
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
            Shop Information
          </Text>
          <AntDesign
            name="hearto"
            size={25}
            style={{
              color: 'white',
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/image/haircut.jpg')}
            style={{
              backgroundColor: 'grey',
              width: 450,
              height: 150,
            }}></Image>
          <Entypo
            name="camera"
            size={24}
            color={'black'}
            style={{
              marginLeft: -80,
              marginTop: 120,
            }}></Entypo>
        </View>
        <Image
          source={require('../../assets/image/haasi.jpg')}
          style={{
            marginTop: -50,
            alignSelf: 'center',
            backgroundColor: 'grey',
            borderRadius: 50,
            width: 100,
            height: 100,
          }}></Image>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 5,
          }}>
          មែន​​ ស្តាយ
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 5,
          }}>
          ⭐⭐⭐⭐⭐
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.push('Review');
          }}>
          <Text
            style={{
              fontSize: 15,
              textDecorationLine: 'underline',
              color: 'grey',
              marginTop: 5,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            3 Reviews
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderBottomWidth: 1,
            width: '100%',
            marginTop: 5,
            borderColor: '#dbd7d2',
          }}></View>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 20,
            marginTop: 15,
          }}>
          Account
        </Text>
        <View style={styles.form}>
          <FontAwesome
            name="building-o"
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
            មែន​ ស្តាយ
          </Text>
        </View>
        <View style={styles.form}>
          <Feather
            name="mail"
            size={20}
            color={'black'}
            style={{
              marginLeft: 15,
            }}
          />
          <Text
            style={{
              marginLeft: 14,
              fontSize: 15,
              color: 'black',
            }}>
            phanphorn.engineer@gmail.com
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            backgroundColor: '#F5F5F5',
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            height: 100,
            alignItems: 'center',
            borderRadius: 5,
            flex: 1,
          }}>
          <AntDesign
            name="infocirlceo"
            size={22}
            color={'black'}
            style={{
              marginLeft: 10,
              marginTop: -50,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              marginLeft: 10,
              marginTop: -50,
              color: 'black',
            }}>
            បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់..
          </Text>
        </View>
        <View style={styles.form}>
          <Ionicons
            name="call-outline"
            size={20}
            color={'black'}
            style={{
              marginLeft: 15,
            }}
          />
        </View>
        <View style={styles.form}>
          <Feather
            name="smartphone"
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
            0889286027
          </Text>
        </View>
        <View style={styles.form}>
          <AntDesign
            name="calendar"
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
            Mon, Tue, Wed, Thu, Fri, Sat, Sun
          </Text>
        </View>
        <View style={styles.form}>
          <Ionicons
            name="time-outline"
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
            8:00 - 19:00
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Address
          </Text>

          <TouchableOpacity
            style={{flexDirection: 'row'}}
            activeOpacity={1}
            onPress={() => {
              navigation.push('Direction');
            }}>
            <Text
              style={{
                textDecorationLine: 'underline',
                fontSize: 16,
                color: '#16247d',
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Direction
            </Text>
            <Entypo
              name="location-pin"
              size={20}
              color={'#16247d'}
              style={{
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <Entypo
            name="location-pin"
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
        <View
          style={{
            borderBottomWidth: 1,
            width: '100%',
            marginTop: 5,
            borderColor: '#dbd7d2',
          }}></View>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 20,
            fontSize: 16,
            color: 'black',
          }}>
          Features
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.push('Promotionn');
          }}
          style={{
            flexDirection: 'row',
            backgroundColor: '#F5F5F5',
            height: 50,
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
            alignItems: 'center',
            borderRadius: 8,
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/image/loudspeaker.png')}
              style={{width: 25, height: 25}}></Image>
            <Text
              style={{
                fontSize: 15,
                color: '#16247d',
                alignItems: 'center',
                paddingLeft: '5%',
              }}>
              PROMOTION
            </Text>
          </View>
          <AntDesign name="right" size={22} color={'#16247d'} style={{}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.push('Service');
          }}
          style={{
            flexDirection: 'row',
            backgroundColor: '#F5F5F5',
            height: 50,
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
            alignItems: 'center',
            borderRadius: 8,
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/image/customer-service.png')}
              style={{width: 25, height: 25}}></Image>
            <Text
              style={{
                fontSize: 15,
                color: '#16247d',
                alignItems: 'center',
                paddingLeft: '5%',
              }}>
              OUR SERVICES
            </Text>
          </View>
          <AntDesign name="right" size={22} color={'#16247d'} style={{}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.push('Membership');
          }}
          style={{
            flexDirection: 'row',
            backgroundColor: '#F5F5F5',
            height: 50,
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
            alignItems: 'center',
            borderRadius: 8,
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/image/member-card.png')}
              style={{width: 25, height: 25}}></Image>
            <Text
              style={{
                fontSize: 15,
                color: '#16247d',
                alignItems: 'center',
                paddingLeft: '5%',
              }}>
              JOIN MEMBERSHIP
            </Text>
          </View>
          <AntDesign name="right" size={22} color={'#16247d'} style={{}} />
        </TouchableOpacity>
        <View
          style={{
            borderBottomWidth: 1,
            width: '100%',
            marginTop: 5,
            borderColor: '#dbd7d2',
          }}></View>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 20,
            fontSize: 16,
            color: 'black',
          }}>
          Our Professional
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.push('ProfessorDetail');
              }}
              style={{
                backgroundColor: '#F5F5F5',
                width: 110,
                height: 140,
                marginLeft: 20,
                borderRadius: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/image/man.png')}
                style={{
                  marginTop: 5,
                }}></Image>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#16247d',
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Professor Sythan
              </Text>
              <Text style={{fontSize: 12, marginTop: 5}}>⭐⭐⭐⭐</Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Professor of...
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.push('ProfessorDetail');
              }}
              style={{
                backgroundColor: '#F5F5F5',
                width: 110,
                height: 140,
                marginLeft: 10,
                borderRadius: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/image/monk.png')}
                style={{
                  marginTop: 5,
                }}></Image>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#16247d',
                  fontSize: 12,
                  marginTop: 5,
                }}>
                ជាង​ គង់
              </Text>
              <Text style={{fontSize: 12, marginTop: 5}}>⭐⭐⭐⭐</Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Professor of...
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.push('ProfessorDetail');
              }}
              style={{
                backgroundColor: '#F5F5F5',
                width: 110,
                height: 140,
                marginLeft: 10,
                borderRadius: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/image/woman.png')}
                style={{
                  marginTop: 5,
                }}></Image>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#16247d',
                  fontSize: 12,
                  marginTop: 5,
                }}>
                មាស​ សុមាវត្តី
              </Text>
              <Text style={{fontSize: 12, marginTop: 5}}>⭐⭐⭐⭐</Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Professor of...
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.push('ProfessorDetail');
              }}
              style={{
                backgroundColor: '#F5F5F5',
                width: 110,
                height: 140,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/image/man1.png')}
                style={{
                  marginTop: 5,
                }}></Image>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#16247d',
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Phan Phorn
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 5,
                }}>
                ⭐⭐⭐⭐
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 12,
                  marginTop: 5,
                }}>
                Professor of...
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            width: '100%',
            marginTop: 10,
            borderColor: '#dbd7d2',
          }}></View>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 20,
            fontSize: 16,
            color: 'black',
          }}>
          Mobile Services
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                backgroundColor: '#F5F5F5',
                width: 110,
                height: 180,
                marginLeft: 20,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: '1.5%',
              }}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/image/makeup-pouch.png')}
                  style={{width: 60, height: 60}}></Image>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: 12,
                    marginTop: 5,
                  }}>
                  Nails
                </Text>
                <Text style={{color: 'red', fontSize: 12, marginTop: 5}}>
                  $10.00 Up
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  navigation.push('MobileService');
                }}
                style={{
                  borderColor: '#16247d',
                  borderWidth: 1.5,
                  borderRadius: 6,
                  padding: 6,
                  backgroundColor: 'white',
                  marginTop: 10,
                }}>
                <Text
                  style={{color: '#16247d', fontSize: 12, fontWeight: 'bold'}}>
                  Order Now
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#F5F5F5',
                width: 110,
                height: 180,
                marginLeft: 10,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: '1.5%',
              }}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/image/makeup.png')}
                  style={{width: 60, height: 60}}></Image>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                    fontSize: 12,
                    marginTop: 5,
                  }}>
                  Make-up for Wedding
                </Text>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 12,
                    marginTop: 5,
                  }}>
                  $15.00 Up
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  navigation.push('MobileService');
                }}
                style={{
                  borderColor: '#16247d',
                  borderWidth: 1.5,
                  borderRadius: 6,
                  padding: 6,
                  backgroundColor: 'white',
                  marginTop: 10,
                }}>
                <Text
                  style={{color: '#16247d', fontSize: 12, fontWeight: 'bold'}}>
                  Order Now
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#F5F5F5',
                width: 110,
                height: 180,
                marginLeft: 10,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: '1.5%',
              }}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/image/make-up.png')}
                  style={{width: 60, height: 60}}></Image>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                    fontSize: 12,
                    marginTop: 5,
                  }}>
                  Haircut for men
                </Text>
                <Text style={{color: 'red', fontSize: 12, marginTop: 5}}>
                  $10.00 Up
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  navigation.push('MobileService');
                }}
                style={{
                  borderColor: '#16247d',
                  borderWidth: 1.5,
                  borderRadius: 6,
                  padding: 6,
                  backgroundColor: 'white',
                  marginTop: 10,
                }}>
                <Text
                  style={{color: '#16247d', fontSize: 12, fontWeight: 'bold'}}>
                  Order Now
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#F5F5F5',
                width: 110,
                height: 180,
                marginLeft: 15,
                marginRight: 10,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: '1.5%',
              }}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/image/foundation.png')}
                  style={{
                    width: 60,
                    height: 60,
                  }}></Image>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: 12,
                    marginTop: 5,
                  }}>
                  Haircut for kids
                </Text>
                <Text style={{color: 'red', fontSize: 12, marginTop: 5}}>
                  $5.00 Up
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  navigation.push('MobileService');
                }}
                style={{
                  borderColor: '#16247d',
                  borderWidth: 1.5,
                  borderRadius: 6,
                  padding: 6,
                  backgroundColor: 'white',
                  marginTop: 10,
                }}>
                <Text
                  style={{color: '#16247d', fontSize: 12, fontWeight: 'bold'}}>
                  Order Now
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 20,
            fontSize: 16,
            color: 'black',
          }}>
          Member Types
        </Text>
        <View style={styles.formMember}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              name="ribbon-outline"
              size={20}
              color={'black'}
              style={{}}
            />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginLeft: 10,
              }}>
              Silver
            </Text>
          </View>
          <Text style={{fontSize: 15, color: '#16247d'}}>
            200 pts (Dis. 10%)
          </Text>
        </View>
        <View style={styles.formMember}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              name="ribbon-outline"
              size={20}
              color={'black'}
              style={{}}
            />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginLeft: 10,
              }}>
              Gold
            </Text>
          </View>
          <Text style={{fontSize: 15, color: '#16247d'}}>
            400 pts (Dis. 15%)
          </Text>
        </View>
        <View style={styles.formMember}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              name="ribbon-outline"
              size={20}
              color={'black'}
              style={{}}
            />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginLeft: 10,
              }}>
              Platinum
            </Text>
          </View>
          <Text style={{fontSize: 15, color: '#16247d'}}>
            600 pts (Dis. 20%)
          </Text>
        </View>
        <View style={{borderBottomWidth: 1, marginTop: 70}}></View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          height: 60,
          bottom: 0,
          flexDirection: 'row',
          backgroundColor: 'white',
          position: 'absolute',
          alignItems: 'center',
          borderTopWidth: 0.5,
          borderBlockColor: 'grey',
          justifyContent: 'space-between',
          paddingHorizontal: '5%',
        }}>
        <View style={{flexDirection: 'row', width: '40%'}}>
          <Image
            source={require('../../assets/image/gmail.png')}
            style={{width: 30, height: 30}}></Image>
          <Image
            source={require('../../assets/image/telephone.png')}
            style={{marginLeft: 20, width: 30, height: 30}}></Image>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.push('MakeBookingView');
          }}
          style={{
            backgroundColor: '#16247d',
            paddingHorizontal: 25,
            paddingVertical: 8,
            borderRadius: 6,
            width: '55%',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 14,
              alignSelf: 'center',
            }}>
            Make a BOOKING
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ShopInformation;

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    height: 50,
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
  },
  formMember: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 40,
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: '3%',
  },
});
