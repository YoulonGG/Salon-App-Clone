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
import Video from 'react-native-video';

const VideoPlayer = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView>
      <View
        style={{
          width: 'auto',
          height: 40,
          backgroundColor: '#16247d',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 17,
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
            marginLeft: '32%',
          }}>
          Video Player
        </Text>
      </View>
      <View style={{height: 280, width: '100%'}}>
        <Video
          // loop
          controls
          // autoPlay
          volume={20}
          source={require('../../assets/Video/video.mp4')}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
      </View>
      <View style={{marginLeft: 10, marginTop: 10}}>
        <Text style={{fontSize: 15, color: 'black'}}>
          ធ្វើការកក់ទុក្ខជាមុននៅរាល់ជាងនិងសេវាកម្មដែលបងប្អូនពេញចិត្ត
        </Text>
        <Text style={{marginTop: 5, fontSize: 12, color: 'grey'}}>
          10/11/2023 At 13.54 PM
        </Text>
      </View>
      <TouchableOpacity
        // onPress={() => {
        //   navigation.push('VideoPlayer');
        // }}
        style={{
          height: 100,
          backgroundColor: 'white',
          marginTop: 20,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          elevation: 3,
          zIndex: 1000,
        }}>
        <Image
          source={require('../../assets/image/haircut5.jpg')}
          style={{
            width: '25%',
            height: '80%',
            borderRadius: 5,
            marginLeft: '3%',
          }}></Image>
        <View
          style={{
            marginLeft: 10,
            width: '75%',
            height: '80%',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
            }}>
            តោះស្វែងយល់ពីរបៀបចុះឈ្មោះក្នុងការ
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
            }}>
            ប្រើប្រាស់ App Unisalon
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 12,
              marginTop: 15,
            }}>
            17 Dec 2021 At 11:59 AM
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => {
        //   navigation.push('VideoPlayer');
        // }}
        style={{
          height: 100,
          backgroundColor: 'white',
          marginTop: 10,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          elevation: 3,
          zIndex: 1000,
        }}>
        <Image
          source={require('../../assets/image/may.jpg')}
          style={{
            width: '25%',
            height: '80%',
            borderRadius: 5,
            marginLeft: '3%',
          }}></Image>
        <View
          style={{
            marginLeft: 10,
            width: '75%',
            height: '80%',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
            }}>
            អរគុណប្អូន Sophorn Phou បានប្រើប្រាស់
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
            }}>
            សេវាកម្មនៅហាង Men_Style
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 12,
              marginTop: 15,
            }}>
            17 Dec 2021 At 11:59 AM
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({});
