import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import Route from './src/Navigation/Route';

const MainApp = () => {
  // console.log('Hi App');
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
      // console.log('Start Splash');
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      // console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return <Route />;
};

export default MainApp;
