import React, {useMemo, useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const BottomSheett = () => {
  const snapPoints = useMemo(() => ['20%', '35%', '90%'], []);

  return (
    <GestureHandlerRootView>
      <View style={{flex: 1, padding: 24}}>
        <BottomSheet snapPoints={snapPoints}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default BottomSheett;

const styles = StyleSheet.create({});
