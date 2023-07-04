import React from 'react';
import {
  Splash,
  Loader,
  Onboarding,
  Register,
  SignIn,
  Homepage,
  ForgotPassword,
  PhoneVerification,
  VerificationSuccessful,
  Success,
  PlayVideo,
  Download,
} from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Loader" component={Loader} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
      <Stack.Screen
        name="VerificationSuccessful"
        component={VerificationSuccessful}
      />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="PlayVideo" component={PlayVideo} />
      <Stack.Screen name="Download" component={Download} />
      <Stack.Screen name="dashboard" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
