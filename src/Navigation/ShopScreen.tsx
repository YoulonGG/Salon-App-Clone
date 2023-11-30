import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
const {width, height} = Dimensions.get('window');

const MoreSalon = [
  {
    id: '1',
    name: 'មែន​ ស្តាយ',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/image/haircut2.png'),
  },
  {
    id: '2',
    name: 'មែន​ ស្តាយ',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/image/haircut2.png'),
  },
  {
    id: '3',
    name: 'មែន​ ស្តាយ',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/image/haircut2.png'),
  },
  {
    id: '4',
    name: 'មែន​ ស្តាយ',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/image/haircut2.png'),
  },
  {
    id: '5',
    name: 'មែន​ ស្តាយ',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/image/haircut2.png'),
  },
  {
    id: '6',
    name: 'មែន​ ស្តាយ',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/image/haircut2.png'),
  },
  {
    id: '7',
    name: 'មែន​ ស្តាយ',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/image/haircut2.png'),
  },
];

const RecommendSalons = [
  {
    id: '1',
    image: require('../assets/image/haircut2.png'),
    name: 'មែន​ ស្តាយ',
    customer: '27 Customer',
  },
  {
    id: '2',
    image: require('../assets/image/haircut2.png'),
    name: 'មែន​ ស្តាយ',
    customer: '27 Customer',
  },
  {
    id: '3',
    image: require('../assets/image/haircut2.png'),
    name: 'មែន​ ស្តាយ',
    customer: '27 Customer',
  },
  {
    id: '4',
    image: require('../assets/image/haircut2.png'),
    name: 'មែន​ ស្តាយ',
    customer: '27 Customer',
  },
  {
    id: '5',
    image: require('../assets/image/haircut2.png'),
    name: 'មែន​ ស្តាយ',
    customer: '27 Customer',
  },
];

const ShopScreen = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={{}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Appbar}>
          <Feather
            onPress={() => {
              navigation.openDrawer();
            }}
            name="menu"
            size={24}
            style={{
              color: 'white',
              paddingLeft: '5%',
            }}
          />
          <Text style={styles.TitleAppbar}>Shops</Text>
        </View>
        <View style={styles.searchSection}>
          <Feather
            name="search"
            size={30}
            color="grey"
            style={{
              margin: 10,
              alignItems: 'center',
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
        </View>
        <View
          style={{
            width: 'auto',
            height: 0,
            backgroundColor: '#ebebec',
            borderWidth: 0.2,
          }}></View>
        <Text
          style={{
            color: '#16247d',
            fontWeight: 'bold',
            marginTop: 10,
            fontSize: 16,
            marginBottom: 10,
            marginLeft: 10,
          }}>
          Recommend Salons
        </Text>
        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {RecommendSalons.map((e, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    navigation.push('ShopInformation');
                  }}
                  style={{
                    width: 180,
                    height: 190,
                    marginLeft: 10,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    elevation: 3,
                  }}>
                  <Image
                    source={e.image}
                    style={{
                      width: '100%',
                      height: '30%',
                      backgroundColor: 'grey',
                      borderRadius: 5,
                      marginBottom: 10,
                    }}></Image>
                  <View style={{flexDirection: 'row'}}>
                    <FontAwesome6
                      name="location-dot"
                      size={13}
                      color={'#16247d'}
                      style={{
                        marginLeft: 5,
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
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'grey',
                        fontWeight: 'bold',
                        marginLeft: 50,
                      }}>
                      {e.customer}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginTop: 10,
                      fontSize: 15,
                      color: 'black',
                      marginLeft: 5,
                    }}>
                    {e.name}
                  </Text>
                  <Text
                    style={{marginBottom: 15, marginLeft: 5, color: 'grey'}}>
                    ⭐⭐⭐⭐⭐ (3)
                  </Text>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      navigation.push('MakeBookingView');
                    }}
                    style={{
                      height: 30,
                      marginLeft: 5,
                      marginRight: 5,
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
            })}
          </ScrollView>
        </View>
        <Text
          style={{
            color: '#16247d',
            fontWeight: 'bold',
            marginTop: 10,
            fontSize: 16,
            marginLeft: 10,
          }}>
          More Salons
        </Text>
        {MoreSalon.map((e, index) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.push('ShopInformation');
              }}
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
                    activeOpacity={1}
                    onPress={() => {
                      navigation.push('MakeBookingView');
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
                <Text style={{fontSize: 13, color: 'black'}}>
                  {e.description}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 5,
                    }}>
                    <Entypo name="location-pin" size={13} color="#144389" />
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#144389',
                        fontWeight: 'bold',
                      }}>
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
                      style={{
                        fontSize: 12,
                        color: '#144389',
                        fontWeight: 'bold',
                      }}>
                      Openning
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
        <View
          style={{
            borderWidth: 1,
            marginTop: 60,
          }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  Appbar: {
    width: '100%',
    height: 60,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TitleAppbar: {
    fontSize: 17,
    color: 'white',
    paddingLeft: '33%',
    fontWeight: 'bold',
    // width: Dimensions.get('window').width - 20,
  },
  searchSection: {
    marginTop: 8,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 8,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 5,
    alignItems: 'center',
    color: 'grey',
    backgroundColor: 'white',
    elevation: 10,
    zIndex: 1000,
  },
  input: {
    borderRadius: 5,
    fontSize: 16,
    color: 'blackd',
  },
  cardView: {
    width: 'auto',
    height: '20%',
    borderWidth: 0.5,
    borderColor: '#ebebec',
    marginTop: 15,
    marginLeft: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    // justifyContent: 'center',
    // '#f1f1f1'
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
