import React from 'react';
<<<<<<< HEAD
import {View} from 'react-native';
=======
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {AuthProvider} from './contexts/auth';
import {ThemeProvider} from './contexts/theme';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
