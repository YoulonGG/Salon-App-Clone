import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
const SideBarFilter = [
  {
    id: 1,
    icon: require('../../src/assets/image/menu.png'),
    title: 'All Professors',
  },
  {
    id: 2,
    icon: require('../../src/assets/image/maid.png'),
    title: 'Bleaching',
  },
  {
    id: 3,
    icon: require('../../src/assets/image/hair-dryerr.png'),
    title: 'Blow Dry',
  },
  {
    id: 4,
    icon: require('../../src/assets/image/nail.png'),
    title: 'Cocktail Party MakeUp',
  },
  {
    id: 5,
    icon: require('../../src/assets/image/makeup.png'),
    title: 'Edge Up',
  },
  {
    id: 6,
    icon: require('../../src/assets/image/makeup-pouch.png'),
    title: 'Eyebrow Wax and Tint',
  },
  {
    id: 7,
    icon: require('../../src/assets/image/make-up.png'),
    title: 'Frence Tip',
  },
  {
    id: 8,
    icon: require('../../src/assets/image/foundation.png'),
    title: 'GEL Color',
  },
  {
    id: 9,
    icon: require('../../src/assets/image/hairstyle.png'),
    title: 'Face Hairstyle',
  },
  {
    id: 10,
    icon: require('../../src/assets/image/salon.png'),
    title: 'Salons',
  },
];

const PersonData = [
  {
    id: 1,
    name: 'John Youlong',
    img: require('../../src/assets/image/man1.png'),
  },
  {
    id: 2,
    name: 'Ronaldo',
    img: require('../../src/assets/image/rrr.jpg'),
  },
  {
    id: 3,
    name: 'Master Lee',
    img: require('../../src/assets/image/monk.png'),
  },
  {
    id: 4,
    name: 'Ms. Harley',
    img: require('../../src/assets/image/woman.png'),
  },
  {
    id: 5,
    name: 'ដៀប ដេត',
    img: require('../../src/assets/image/man.png'),
  },
  {
    id: 6,
    name: 'Jack',
    img: require('../../src/assets/image/hhhhh.jpg'),
  },
  {
    id: 7,
    name: 'CR7',
    img: require('../../src/assets/image/ronaldo.png'),
  },
  {
    id: 8,
    name: 'Goat',
    img: require('../../src/assets/image/ronaldo1.png'),
  },
  {
    id: 9,
    name: 'Mr Benz',
    img: require('../../src/assets/image/man1.png'),
  },
  {
    id: 10,
    name: 'John',
    img: require('../../src/assets/image/man1.png'),
  },
  {
    id: 11,
    name: 'Vitu',
    img: require('../../src/assets/image/man1.png'),
  },
  {
    id: 12,
    name: 'Yuth',
    img: require('../../src/assets/image/man1.png'),
  },
  {
    id: 13,
    name: 'Yuth',
    img: require('../../src/assets/image/man1.png'),
  },
  {
    id: 14,
    name: 'Yuth',
    img: require('../../src/assets/image/man1.png'),
  },
  {
    id: 15,
    name: 'Yuth',
    img: require('../../src/assets/image/man1.png'),
  },
  {
    id: 16,
    name: 'Yuth',
    img: require('../../src/assets/image/man1.png'),
  },
];

const ProfessorScreen = () => {
  const navigation: any = useNavigation();
  const [selectColor, setSelectColor] = useState<any>(0);
  const SelectItem = (item: any) => {
    console.log('Data: ', item);
    setSelectColor(item);
  };
  const [title, setTittle] = useState('');

  const SetTitle = (title: any) => {
    console.log('Tittle: ', title);
  };

  const ItemSelecter = (index: any) => {
    if (index === 0) {
      return 'white';
    }
  };
  const ChangeBackground = (index: any) => {
    if (index === 0) {
      return '#16247d';
    } else if (index === 1) {
      return 'yellow';
    }
  };
  const [id, setId] = useState(1);
  const CheckId = (id: any) => {
    setId(id);
  };
  const BodyRightBar = () => {
    if (id === 1) {
      return (
        <FlatList
          style={{
            marginRight: 3,
            marginBottom: height * 0.16,
            // backgroundColor: 'white',
          }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={PersonData}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.push('ProfessorDetail', {
                    name: item.name,
                    img: item.img,
                  });
                }}>
                <View style={styles.Card}>
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 60 / 2,
                      backgroundColor: '#eef1f6',
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      style={{
                        flex: 1,
                        height: '100%',
                        width: '100%',
                        borderRadius: 60 / 2,
                      }}
                      source={item.img}></Image>
                  </View>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: '#16247d',
                      marginTop: 10,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 10,
                      fontWeight: 'bold',
                      color: 'grey',
                      marginTop: 0,
                    }}>
                    ⭐⭐⭐⭐⭐ (5)
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <Entypo
                      size={16}
                      color={'#16247d'}
                      name="location-pin"
                      style={{
                        marginTop: 5,
                      }}></Entypo>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#16247d',
                        fontWeight: 'bold',
                        marginTop: 4,
                      }}>
                      None
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}></FlatList>
      );
    } else {
      return (
        <View
          style={{
            backgroundColor: '#f1f1f1',
            flex: 1,
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            paddingTop: '10%',
          }}>
          <Feather name="folder" size={45} color={'grey'}></Feather>
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
    }
  };
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
            navigation.openDrawer();
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
          All Professors
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.push('SearchBar');
          }}>
          <Feather
            name="search"
            size={22}
            style={{
              color: 'white',
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Row}>
        <View style={styles.LeftBar}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              style={{marginBottom: height * 0.13}}
              data={SideBarFilter}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      SelectItem(index);
                      SetTitle(item.title);
                      CheckId(item.id);
                    }}>
                    <View
                      key={index}
                      style={{alignItems: 'center', marginTop: height * 0.03}}>
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          alignContent: 'center',
                          paddingTop: 3,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 50 / 2,
                          // backgroundColor: ItemSelecter(selectColor === index)
                          backgroundColor:
                            selectColor === index ? '#16247d' : '#DCDCDC',
                        }}>
                        <Image
                          style={{width: 30, height: 30}}
                          source={item.icon}
                          tintColor={ItemSelecter(index)}></Image>
                      </View>
                      <Text
                        style={{
                          marginTop: 15,
                          fontWeight: 'bold',
                          color: 'grey',
                          fontSize: 12,
                          textAlign: 'center',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}></FlatList>
            <View style={{marginTop: 50}}></View>
          </ScrollView>
        </View>
        <View style={styles.RightBar}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <BodyRightBar />
            <View style={{marginTop: 50}}></View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfessorScreen;

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
  },
  LeftBar: {
    height: height,
    width: width * 0.25,
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  Circle: {
    width: 60,
    height: 60,
    backgroundColor: '#16247d',
    borderRadius: 60 / 1,
  },
  Column: {},
  RightBar: {
    width: width * 0.75,
    height: 'auto',
    marginBottom: height * 0.015,
  },
  Card: {
    width: width * 0.35,
    paddingVertical: 10,
    height: height * 0.2,
    backgroundColor: 'white',
    marginTop: 7,
    marginLeft: 7,
    marginBottom: 5,
    borderRadius: 8,
    elevation: 3,
    zIndex: 1000,
  },
});
