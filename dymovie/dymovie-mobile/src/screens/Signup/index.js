import React, {useState} from 'react';
import {Linking} from 'react-native';
import {
  Container,
  ContainerRowDirection,
  Formulary,
  InputText,
  ButtonSignup,
  TermsConditions,
  LinkLogin,
  Login,
  TextTermsConditions,
  Text,
} from './styles';
import useAuth from '../../contexts/auth';

export default function Signup({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signed, user, signIn} = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <Container>
      <Formulary>
        <InputText
          iconName="user-circle"
          placeholder="Full name"
          onChangeText={value => {
            setEmail(value);
          }}
        />

        <InputText
          iconName="envelope"
          placeholder="E-mail"
          onChangeText={value => {
            setPassword(value);
          }}
        />

        <InputText
          iconName="lock"
          placeholder="Password"
          onChangeText={value => {
            setPassword(value);
          }}
        />

        <InputText
          iconName="lock"
          placeholder="Confirm your password"
          onChangeText={value => {
            setPassword(value);
          }}
        />

        <TermsConditions>
          <Text>By sign up you are agree to our</Text>

          <TextTermsConditions
            onPress={() => Linking.openURL('https://google.com')}>
            Terms & Conditions
          </TextTermsConditions>
        </TermsConditions>

        <ButtonSignup onPress={() => handleSignIn()} />
      </Formulary>
      <Login>
        <ContainerRowDirection>
          <Text>Already have an account?</Text>
          <LinkLogin onPress={() => navigation.navigate('Login')}>
            Login
          </LinkLogin>
        </ContainerRowDirection>
      </Login>
    </Container>
  );
}
