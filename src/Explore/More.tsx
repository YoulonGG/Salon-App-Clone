import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const Data = [
  {
    id: '1',
    name: 'Bleaching',
    image: require('../assets/image/woman.png'),
  },
  {
    id: '2',
    name: 'Blow Dry',
    image: require('../assets/image/hair-dryerr.png'),
  },
  {
    id: '3',
    name: 'Coctail Party Makeup',
    image: require('../assets/image/man1.png'),
  },
  {
    id: '4',
    name: 'Edge Up',
    image: require('../assets/image/salon.png'),
  },
  {
    id: '5',
    name: 'Eyebrow Wax and Tint',
    image: require('../assets/image/kid.png'),
  },
  {
    id: '6',
    name: 'Eyebrow Wax with lip',
    image: require('../assets/image/hairstyle.png'),
  },
  {
    id: '7',
    name: 'Face Massage',
    image: require('../assets/image/maid.png'),
  },
  {
    id: '8',
    name: 'French Tip',
    image: require('../assets/image/make-up.png'),
  },
  {
    id: '9',
    name: 'GEL Color',
    image: require('../assets/image/nail.png'),
  },
  {
    id: '10',
    name: 'Gel Manicure',
    image: require('../assets/image/makeup.png'),
  },
  {
    id: '11',
    name: 'Hair Cut',
    image: require('../assets/image/hairstyle.png'),
  },
  {
    id: '12',
    name: 'Hair Dryer',
    image: require('../assets/image/hair-dryerr.png'),
  },
  {
    id: '13',
    name: 'High Hair',
    image: require('../assets/image/man.png'),
  },
  {
    id: '14',
    name: 'Salons',
    image: require('../assets/image/hair-salon.png'),
  },
  {
    id: '15',
    name: 'Scrub the wool',
    image: require('../assets/image/salon21.png'),
  },
  {
    id: '16',
    name: 'Shampoo',
    image: require('../assets/image/salon24.png'),
  },
  {
    id: '17',
    name: 'Shampoo with scrub',
    image: require('../assets/image/salon22.png'),
  },
  {
    id: '18',
    name: 'Shampoo, Blowdry and..',
    image: require('../assets/image/salon23.png'),
  },
  {
    id: '19',
    name: 'Shave for Men',
    image: require('../assets/image/salon25.png'),
  },
  {
    id: '20',
    name: 'Straight Hair',
    image: require('../assets/image/salon29.png'),
  },
  {
    id: '21',
    name: 'Hair treatment',
    image: require('../assets/image/salon27.png'),
  },
  {
    id: '22',
    name: 'Color',
    image: require('../assets/image/salon26.png'),
  },
  {
    id: '23',
    name: 'Hair',
    image: require('../assets/image/salon24.png'),
  },
];

const More = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
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
            Categories
          </Text>
          <AntDesign
            name="arrowleft"
            size={25}
            style={{
              color: '#16247d',
            }}
          />
        </View>
        <FlatList
          scrollEnabled={false}
          numColumns={4}
          columnWrapperStyle={{}}
          data={Data}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <View
                  style={{
                    width: width * 0.22,
                    height: height * 0.12,
                    borderWidth: 1,
                    marginTop: 5,
                    borderRadius: 8,
                    borderColor: '#f2f2f2',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginLeft: 10,
                    alignItems: 'center',
                    backgroundColor: 'white',
                    elevation: 3,
                  }}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      alignItems: 'center',
                      backgroundColor: '#F5F5F5',
                      borderRadius: 50,
                      justifyContent: 'center',
                    }}>
                    <Image
                      style={{
                        height: 30,
                        width: 30,
                      }}
                      source={item.image}
                    />
                  </View>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '500',
                      fontSize: 12,
                      marginTop: 5,
                      textAlign: 'center',
                    }}>
                    {item.name}
                  </Text>
                </View>
                <View style={{marginTop: 10}}></View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={e => e.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default More;

const styles = StyleSheet.create({});
