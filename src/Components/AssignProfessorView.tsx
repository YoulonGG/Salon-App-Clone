import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const AssignProfessorView = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: 60,
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
              paddingLeft: '12%',
            }}>
            Assign Professors (Optional)
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: 50,
            width: '100%',
            justifyContent: 'center',
            borderBottomWidth: 0.3,
            borderColor: 'black',
          }}>
          <Text
            style={{
              marginLeft: 15,
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Select Professors
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 15,
            alignSelf: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 200,
              width: '48%',
              borderRadius: 8,
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/image/man.png')}
              style={{marginTop: 20}}></Image>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#16247d',
                marginTop: 5,
              }}>
              Professor Sythan
            </Text>
            <Text style={{marginTop: 5}}>⭐⭐⭐⭐</Text>
            <Text style={{color: 'black', marginTop: 10, fontSize: 12}}>
              8 Credits / 2 Reviews
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 200,
              width: '48%',
              marginLeft: '4%',
              borderRadius: 8,
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/image/monk.png')}
              style={{marginTop: 20}}></Image>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#16247d',
                marginTop: 5,
              }}>
              ​ជាង​ គង់
            </Text>
            <Text style={{marginTop: 5}}>⭐⭐⭐⭐</Text>
            <Text style={{color: 'black', marginTop: 10, fontSize: 12}}>
              8 Credits / 2 Reviews
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 200,
              width: '48%',
              borderRadius: 8,
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/image/woman.png')}
              style={{marginTop: 20}}></Image>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#16247d',
                marginTop: 5,
              }}>
              មាស​ សុមាវត្តី
            </Text>
            <Text style={{marginTop: 5}}>⭐⭐⭐⭐</Text>
            <Text style={{color: 'black', marginTop: 10, fontSize: 12}}>
              8 Credits / 2 Reviews
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 200,
              width: '48%',
              marginLeft: '4%',
              borderRadius: 8,
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/image/man1.png')}
              style={{marginTop: 20}}></Image>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#16247d',
                marginTop: 5,
              }}>
              ​Phan Phorn
            </Text>
            <Text style={{marginTop: 5}}>⭐⭐⭐⭐</Text>
            <Text style={{color: 'black', marginTop: 10, fontSize: 12}}>
              8 Credits / 2 Reviews
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 200,
              width: '48%',
              borderRadius: 8,
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/image/man.png')}
              style={{marginTop: 20}}></Image>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#16247d',
                marginTop: 5,
              }}>
              Professor Sythan
            </Text>
            <Text style={{marginTop: 5}}>⭐⭐⭐⭐</Text>
            <Text style={{color: 'black', marginTop: 10, fontSize: 12}}>
              8 Credits / 2 Reviews
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 200,
              width: '48%',
              marginLeft: '4%',
              borderRadius: 8,
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/image/monk.png')}
              style={{marginTop: 20}}></Image>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#16247d',
                marginTop: 5,
              }}>
              ​ជាង​ គង់
            </Text>
            <Text style={{marginTop: 5}}>⭐⭐⭐⭐</Text>
            <Text style={{color: 'black', marginTop: 10, fontSize: 12}}>
              8 Credits / 2 Reviews
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 200,
              width: '48%',
              borderRadius: 8,
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/image/woman.png')}
              style={{marginTop: 20}}></Image>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#16247d',
                marginTop: 5,
              }}>
              មាស​ សុមាវត្តី
            </Text>
            <Text style={{marginTop: 5}}>⭐⭐⭐⭐</Text>
            <Text style={{color: 'black', marginTop: 10, fontSize: 12}}>
              8 Credits / 2 Reviews
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 200,
              width: '48%',
              marginLeft: '4%',
              borderRadius: 8,
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/image/man1.png')}
              style={{marginTop: 20}}></Image>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#16247d',
                marginTop: 5,
              }}>
              ​Phan Phorn
            </Text>
            <Text style={{marginTop: 5}}>⭐⭐⭐⭐</Text>
            <Text style={{color: 'black', marginTop: 10, fontSize: 12}}>
              8 Credits / 2 Reviews
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              navigation.push('ChooseService');
            }}
            style={{
              backgroundColor: '#16247d',
              height: 45,
              marginTop: 10,
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              borderTopColor: 'grey',
              borderWidth: 1,
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
