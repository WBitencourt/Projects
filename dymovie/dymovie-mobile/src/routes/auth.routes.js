import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
<<<<<<< HEAD
import {useTheme} from 'styled-components';
=======
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
import Main from '../screens/Main';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

export default function AuthNavigation() {
<<<<<<< HEAD
  const theme = useTheme();

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {backgroundColor: theme.myTheme.color.primary},
        headerTintColor: theme.myTheme.color.secondary,
      }}>
=======
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Main">
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
