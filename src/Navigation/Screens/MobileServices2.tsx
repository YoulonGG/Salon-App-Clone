import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
  Image,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {TabBar, SceneMap, TabView} from 'react-native-tab-view';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const {width, height} = Dimensions.get('window');

const data = [
  {
    id: 2,
    icon: require('../../assets/image/salon21.png'),
    title: 'Haircut for kids',
  },
  {
    id: 3,
    icon: require('../../assets/image/salon24.png'),

    title: 'Haircut for men',
  },
  {
    id: 4,
    icon: require('../../assets/image/salon25.png'),

    title: 'Make-up for Wedding',
  },
  {
    id: 5,
    icon: require('../../assets/image/salon27.png'),

    title: 'Nails',
  },
];

const ShopData = [
  {
    id: 1,
    title: '007 haircut',
    totalrate: '1',
    img: require('../../assets/image/salon1.jpg'),
  },
  {
    id: 2,
    title: 'មែន ស្តាយ',
    totalrate: '4',
    img: require('../../assets/image/salon2.jpg'),
  },
  {
    id: 3,
    title: 'Yaya',
    totalrate: '0',
    img: require('../../assets/image/salon3.jpg'),
  },
];

const Shop = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: '#ebebec', padding: 10}}>
      {ShopData.map((e, index) => {
        return (
          <View key={index} style={styles.listItem}>
            <View style={{marginTop: 0, flexDirection: 'row'}}>
              <Image
                style={{width: 70, height: 60, borderRadius: 5}}
                source={e.img}
              />
              <View style={{marginLeft: 12}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  {e.title}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'grey',
                    paddingVertical: 5,
                  }}>
                  ⭐⭐⭐⭐⭐({e.totalrate})
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingVertical: 0,
                      paddingRight: 15,
                    }}>
                    <FontAwesome6
                      size={10}
                      name="location-dot"
                      style={{paddingRight: 5, marginTop: 4}}
                      color={'#16247d'}></FontAwesome6>
                    <Text
                      style={{
                        color: '#16247d',
                        fontWeight: 'bold',
                        fontSize: 11,
                      }}>
                      None
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', paddingVertical: 0}}>
                    <FontAwesome6
                      size={10}
                      name="clock"
                      style={{paddingRight: 5, marginTop: 4}}
                      color={'#16247d'}></FontAwesome6>
                    <Text
                      style={{
                        color: '#16247d',
                        fontWeight: 'bold',
                        fontSize: 11,
                      }}>
                      Opening
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.order}>Order Now</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const Professor = () => {
  return (
    <View
      style={{
        backgroundColor: '#f1f1f1',
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: '10%',
        // alignItems: 'center
        // marginLeft: width * 0.285,
      }}>
      <Feather name="folder" size={60} color={'#ebebec'}></Feather>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#ebebec',
          paddingTop: '5%',
        }}>
        No Data
      </Text>
    </View>
  );
};

const renderScene = SceneMap({
  first: Shop,
  second: Professor,
});

const MobileServices2 = () => {
  const navigation = useNavigation();
  const [selectColor, setSelectColor] = useState<any>(0);
  const [index, setTab] = React.useState(0);
  const layout = useWindowDimensions();
  const [routes] = React.useState([
    {key: 'first', title: 'Shop'},
    {key: 'second', title: 'Professor'},
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={{
        backgroundColor: 'white',
      }}
      tabStyle={{
        width: (width * 0.74) / 2,
      }}
      renderLabel={({route, focused, color}) => (
        <View
          style={{
            flexDirection: 'row',
            width: (width * 0.74) / 2,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: focused ? '#16247d' : 'black',
              margin: 5,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            {route.title}
          </Text>
          <View style={route.title == 'Shop' ? styles.divider : null}></View>
        </View>
      )}></TabBar>
  );

  const SelectItem = (item: any) => {
    console.log('Data: ', item);
    setSelectColor(item);
  };

  const [Index, setIndex] = useState(0);

  const SetTitle = (title: any) => {
    console.log('Tittle: ', title);
  };

  const ItemSelecter = (index: any) => {
    if (index === 3) {
      return '';
    }
  };

  const ChangeBackground = (index: any) => {
    if (index === 0) {
      return '#16247d';
    } else if (index === 1) {
      return 'yellow';
    }
  };

  const FilterScreen = () => {
    if (Index === 0) {
      return (
        <View style={{flex: 1}}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setTab}
            initialLayout={{width: layout.width}}
            style={{
              backgroundColor: 'white',
            }}
            renderTabBar={renderTabBar}
          />
        </View>
      );
    } else {
      return (
        <View style={{flex: 1}}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setTab}
            initialLayout={{width: layout.width}}
            style={{
              backgroundColor: 'white',
            }}
            renderTabBar={renderTabBar}
          />
        </View>
      );
    }
  };

  const [id, setId] = useState(1);
  const CheckId = (id: any) => {
    setId(id);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            width: '100%',
            height: 40,
            backgroundColor: '#16247d',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
            alignItems: 'center',
          }}>
          <AntDesign
            onPress={() => {
              navigation.goBack();
            }}
            name="arrowleft"
            color={'white'}
            size={25}
            style={{}}></AntDesign>
          <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>
            Haircut for kids
          </Text>
          <AntDesign
            name="arrowleft"
            color={'#16247d'}
            size={25}
            style={{}}></AntDesign>
        </View>
        <View style={styles.layout}>
          <View style={styles.LeftBar}>
            <FlatList
              style={{marginBottom: height * 0.18}}
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      SelectItem(index);
                      SetTitle(item.title);
                      CheckId(item.id);
                      setIndex(index);
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
                          backgroundColor:
                            selectColor === index ? '#16247d' : '#DCDCDC',
                        }}>
                        <Image
                          style={{width: '60%', height: '60%'}}
                          source={item.icon}
                          // tintColor={ItemSelecter(index)}
                        ></Image>
                      </View>
                      <Text
                        style={{
                          marginTop: 15,
                          fontWeight: 'bold',
                          color: selectColor === index ? '#16247d' : 'black',
                          fontSize: 12,
                          textAlign: 'center',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}></FlatList>
          </View>
          <View style={styles.RightBar}>
            <FilterScreen />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MobileServices2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flexDirection: 'row',
  },
  LeftBar: {
    height: height,
    width: width * 0.26,
    backgroundColor: '#eef1f6',
    paddingHorizontal: 15,
  },
  Circle: {
    width: 60,
    height: 60,
    backgroundColor: '#16247d',
    borderRadius: 60 / 1,
  },
  RightBar: {
    width: '74%',
    backgroundColor: 'red',
  },
  indicator: {
    backgroundColor: '#16247d',
    height: 2,
  },
  listItem: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    paddingTop: 8,
  },
  order: {
    textAlign: 'center',
    marginTop: 9,
    color: '#16247d',
    fontWeight: 'bold',
    borderWidth: 0.7,
    paddingVertical: 5,
    borderRadius: 5,
  },
  divider: {
    width: 1.8,
    height: '100%',
    backgroundColor: 'gray',
    position: 'absolute',
    right: 0,
  },
});
