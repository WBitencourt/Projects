import React from 'react';
import {View, Text} from 'react-native';
import TextBox from '../../components/TextBox';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useState} from 'react/cjs/react.production.min';

export default function Login() {
  const [email, setEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <Icon.Button
        name={'arrow-left'}
        color={styles.icon.color}
        backgroundColor={styles.icon.backgroundColor}
      />

      <Text style={styles.title}>Log in</Text>

      <TextBox
        iconName="envelope"
        placeholder="E-mail"
        onChangeText={value => {
          setEmail(value);
        }}
      />
    </View>
  );
}
