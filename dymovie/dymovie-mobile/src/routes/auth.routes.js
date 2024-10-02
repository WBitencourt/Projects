import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';
import Main from '../screens/Main';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

export default function AuthNavigation() {
  const theme = useTheme();

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {backgroundColor: theme.myTheme.color.primary},
        headerTintColor: theme.myTheme.color.secondary,
      }}>
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
