import {StyleSheet, View} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const GoogleMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 11.576096,
          longitude: 104.9233301,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
  );
};

export default GoogleMap;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 500,
    height: 1000,
    // flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
