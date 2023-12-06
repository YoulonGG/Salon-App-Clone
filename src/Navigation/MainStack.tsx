import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IndexView} from '../Components/Index_View';
import HomeScreen from './HomeScreen';
import PromotionScreen from './PromotionScreen';
import ProfessorScreen from './ProfessorScreen';
import ShopScreen from './ShopScreen';
import VideoScreen from './VideoScreen';
import {DetailPromotion} from './detail_promotion';
import {SubService} from '../Components/subservice';
import {GalleryView} from '../Components/GalleryView';
import {ViewImage} from '../Components/ViewImage';
import {MakeBookingView} from '../Components/MakeBookingView';
import {AssignProfessorView} from '../Components/AssignProfessorView';
import DrawerNavigate from './Drawer';
import App from '../../App';
import SignUp from './Screens/SignUp';
import ForgetPassword from './Screens/ForgetPassword';
import EditProfile from './Screens/EditProfile';
import EditPhoneNumber from './Screens/EditPhoneNumber';
import ShopInformation from './Screens/ShopInformation';
import Direction from './Screens/Direction';
import ProfessorDetail from './Screens/ProfessorDetail';
import MobileService from './Screens/MobileService';
import SERVICES from './Screens/SERVICES';
import MEMBERSHIP from './Screens/MEMBERSHIP';
import ChooseService from '../Components/ChooseService';
import OrderDetail from './Screens/OrderDetail';
import Review from './Screens/Review';
import Login from './Screens/Login';
import VideoPlayer from './Screens/VideoPlayer';
import Profile from '../Components/Profile';
import Promotion from './Screens/Promotion';
import Favorite from '../Components/Favorite';
import Message from '../Components/Message';
import Membership from '../Components/Membership';
import TodayBooking from '../Components/TodayBooking';
import BookingAndOrder from '../Components/BookingAndOrder';
import Payment from '../Components/Payment';
import Settings from '../Components/Settings';
import Privacy from '../Components/Privacy';
import HelpAndFeedback from '../Components/HelpAndFeedback';
import HistoryBooking from '../Components/HistoryBoking';
import SearchBarView from '../Components/SearchBarView';
import SplashScreen from '../Components/SplashScreen';
import Bleaching from '../Explore/Bleaching';
import BlowDry from '../Explore/BlowDry';
import Coctail from '../Explore/Coctail';
import EdgeUp from '../Explore/EdgeUp';
import Eyebrow from '../Explore/Eyebrow';
import Eyebrow2 from '../Explore/Eyebrow2';
import FaceMessage from '../Explore/FaceMessage';
import FrencchTip from '../Explore/FrencchTip';
import Gel from '../Explore/Gel';
import More from '../Explore/More';
import OrderDetail2 from './Screens/OrderDetail2';
import Receipt from './Screens/Receipt';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}>
      {/* <Stack.Screen component={SplashScreen} name="SplashScreen" /> */}
      <Stack.Screen component={DrawerNavigate} name="MainDrawer" />
      <Stack.Screen component={App} name="IndexView" />
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={PromotionScreen} name="Promotion" />
      <Stack.Screen component={ProfessorScreen} name="Professor" />
      <Stack.Screen component={ShopScreen} name="Shop" />
      <Stack.Screen component={VideoScreen} name="Video" />
      <Stack.Screen component={DetailPromotion} name="DetailPromotion" />
      <Stack.Screen component={SubService} name="SubService" />
      <Stack.Screen component={GalleryView} name="GalleryView" />
      <Stack.Screen component={ViewImage} name="ViewImage" />
      <Stack.Screen component={MakeBookingView} name="MakeBookingView" />
      <Stack.Screen component={SignUp} name="SignUp" />
      <Stack.Screen component={ForgetPassword} name="ForgetPassword" />
      <Stack.Screen component={EditProfile} name="EditProfile" />
      <Stack.Screen component={EditPhoneNumber} name={'EditPhoneNumber'} />
      <Stack.Screen component={ShopInformation} name="ShopInformation" />
      <Stack.Screen component={Direction} name="Direction" />
      <Stack.Screen component={ProfessorDetail} name="ProfessorDetail" />
      <Stack.Screen component={MobileService} name="MobileService" />
      <Stack.Screen component={SERVICES} name="Service" />
      <Stack.Screen component={MEMBERSHIP} name="Membership" />
      <Stack.Screen component={AssignProfessorView} name="AssignProfessor" />
      <Stack.Screen component={ChooseService} name="ChooseService" />
      <Stack.Screen component={OrderDetail} name="OrderDetail" />
      <Stack.Screen component={Review} name="Review" />
      <Stack.Screen component={VideoPlayer} name="VideoPlayer" />
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Profile} name="Profile" />
      <Stack.Screen component={Favorite} name="Favorite" />
      <Stack.Screen component={Message} name="Message" />
      <Stack.Screen component={Membership} name="Membershipp" />
      <Stack.Screen component={TodayBooking} name="TodayBooking" />
      <Stack.Screen component={BookingAndOrder} name="BookingAndOrder" />
      <Stack.Screen component={Payment} name="Payment" />
      <Stack.Screen component={Settings} name="Setting" />
      <Stack.Screen component={Privacy} name="Privacy" />
      <Stack.Screen component={HelpAndFeedback} name="HelpAndFeedback" />
      <Stack.Screen component={Promotion} name="Promotionn" />
      <Stack.Screen component={HistoryBooking} name="Historybooking" />
      <Stack.Screen component={SearchBarView} name="SearchBar" />
      <Stack.Screen component={Bleaching} name="Bleaching" />
      <Stack.Screen component={BlowDry} name="BlowDry" />
      <Stack.Screen component={Coctail} name="Coctail" />
      <Stack.Screen component={EdgeUp} name="EdgeUp" />
      <Stack.Screen component={Eyebrow} name="Eyebrow" />
      <Stack.Screen component={Eyebrow2} name="Eyebrow2" />
      <Stack.Screen component={FaceMessage} name="FaceMassage" />
      <Stack.Screen component={FrencchTip} name="FrenchTip" />
      <Stack.Screen component={Gel} name="Gel" />
      <Stack.Screen component={More} name="More" />
      <Stack.Screen component={OrderDetail2} name="OrderDetail2" />
      <Stack.Screen component={Receipt} name="Receipt" />
      <Stack.Screen
        component={AssignProfessorView}
        name="AssignProfessorView"
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
