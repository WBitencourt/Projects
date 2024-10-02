import React from 'react';
import useAuth from '../contexts/auth';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {Container, ActivityIndicator} from './styles';

const Routes = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
