import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SplashScreen = () => {
  useEffect(() => {
    // Simulate some loading process
    setTimeout(() => {
      // Navigate to the main screen or any other screen
      // Replace 'MainScreen' with the actual name of your main screen component
      // You might use React Navigation or any other navigation library for this
      // For simplicity, I'm just logging a message here
      console.log('Splash screen done! Navigate to the main screen.');
    }, 2000); // Adjust the duration as needed
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.Text style={styles.text} duration={{2000}} animation="FadeDownBig">Hello</Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
