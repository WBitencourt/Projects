import React from 'react';
import {
  Container,
  Switch,
  Logo,
  LogoImage,
  LogoText,
  ButtonLogin,
  ButtonSignup,
} from './styles';
//import {useTheme} from '../../contexts/theme';
import {useTheme} from 'styled-components';

export default function Main({navigation}) {
  const {ToggleTheme} = useTheme();

  return (
    <Container>
      <Switch onChange={ToggleTheme} />

      <Logo>
        <LogoImage />
        <LogoText>DYMOVIE</LogoText>
      </Logo>

      <ButtonLogin onPress={() => navigation.navigate('Login')} />

      <ButtonSignup onPress={() => navigation.navigate('Signup')} />
    </Container>
  );
}
