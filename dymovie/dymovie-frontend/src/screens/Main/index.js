import React from 'react';
import {View, Text, Image, Switch} from 'react-native';
import FlatButton from '../../components/Button';
import styles from './styles';
import useTheme from '../../contexts/theme';
//import shade from 'polished';

export default function Main({navigation}) {
  const {theme: selectedTheme, ToggleTheme} = useTheme();

  const Theme = {
    container: {
      backgroundColor: selectedTheme.color.primary,
    },
    logo: {
      text: {
        color: selectedTheme.color.secondary,
      },
    },
    button: {
      login: {
        backgroundColor: selectedTheme.color.main,
      },
      signup: {
        backgroundColor: selectedTheme.color.secondary,
      },
      signupTitle: {
        color: selectedTheme.color.primary,
      },
    },
  };

  return (
    <View style={[styles.container, Theme.container]}>
      <Switch
        style={{margin: 20}}
        value={selectedTheme.title === 'dark' ? true : false}
        onChange={ToggleTheme}
        thumbColor={selectedTheme.color.main}
        trackColor={{
          false: selectedTheme.color.secondary,
          true: selectedTheme.color.secondary,
        }}
      />

      <View style={styles.logo.container}>
        <Image
          style={styles.logo.size}
          source={require('../../assets/logo264x262-noback.png')}
        />
        <Text style={[styles.logo.text, Theme.logo.text]}>DYMOVIE</Text>
      </View>

      <FlatButton
        title="Log in"
        styleButton={[styles.button.login, Theme.button.login]}
        onPress={() => navigation.navigate('Login')}
      />

      <FlatButton
        title="Sign up"
        styleButton={[styles.button.signup, Theme.button.signup]}
        styleTitle={[styles.button.signupTitle, Theme.button.signupTitle]}
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
}
