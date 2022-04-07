import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import FlatButton from '../../components/Button';
import styles from './styles';

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.logo.container}>
        <Image
          style={styles.logo.size}
          source={require('../../assets/logo264x262-noback.png')}
        />
        <Text style={styles.logo.text}>DYMOVIE</Text>
      </View>
      <View style={styles.footer.container}>
        <FlatButton
          title="Log in"
          styleButton={styles.footer.button.login}
          onPress={() => Alert.alert('Simple Button pressed')}
        />

        <FlatButton
          title="Sign up"
          styleButton={styles.footer.button.signup}
          styleTitle={styles.footer.button.signupTitle}
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </View>
  );
}
