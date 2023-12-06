import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  RefreshControl,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const VideoScreen = () => {
  const navigation: any = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.Appbar}>
        <Feather
          onPress={() => {
            navigation.openDrawer();
          }}
          name="menu"
          size={22}
          style={{
            color: 'white',
            paddingLeft: '5%',
          }}
        />
        <Text style={styles.TitleAppbar}>Videos</Text>
      </View>
      <View style={styles.searchSection}>
        <Feather
          name="search"
          size={22}
          color="grey"
          style={{
            margin: 10,
            alignItems: 'center',
          }}
        />
        <TouchableOpacity>
          <TextInput placeholder="Search Video..." style={styles.input} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 0,
          backgroundColor: '#ebebec',
          borderWidth: 0.2,
        }}></View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <TouchableOpacity
          onPress={() => {
            navigation.push('VideoPlayer');
          }}
          style={{
            height: 100,
            width: '100%',
            backgroundColor: 'white',
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
            elevation: 3,
            zIndex: 1000,
          }}>
          <Image
            source={require('../assets/image/haircut.jpg')}
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
              ធ្វើការកក់ទុកជាមុននៅរាល់ជាងនិងសេវាកម្ម
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                fontWeight: 'bold',
              }}>
              ដែលបងប្អូន
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
          onPress={() => {
            navigation.push('VideoPlayer');
          }}
          style={{
            height: 100,
            backgroundColor: 'white',
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            elevation: 3,
            zIndex: 1000,
          }}>
          <Image
            source={require('../assets/image/haircut2.png')}
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
          onPress={() => {
            navigation.push('VideoPlayer');
          }}
          style={{
            height: 100,
            backgroundColor: 'white',
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            elevation: 3,
            zIndex: 1000,
          }}>
          <Image
            source={require('../assets/image/may.jpg')}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  Appbar: {
    width: '100%',
    height: 40,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TitleAppbar: {
    fontSize: 17,
    color: 'white',
    paddingLeft: '33%',
    fontWeight: 'bold',
  },
  input: {
    borderRadius: 5,
    fontSize: 15,
    color: 'black',
  },
  searchSection: {
    marginTop: 8,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
    height: 47,
    zIndex: 1000,
  },
  card: {
    width: 'auto',
    height: 120,
    backgroundColor: 'white',
    marginLeft: 7,
    marginTop: 7,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 15,
  },
});
