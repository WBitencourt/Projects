import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import useAuth from '../contexts/auth';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import styles from './styles';

const Routes = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={styles.icon.color} />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
