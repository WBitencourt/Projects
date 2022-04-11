import React from 'react';
import {View, Text, Alert, Linking} from 'react-native';
import TextBox from '../../components/TextBox';
import FlatButton from '../../components/Button';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View>
        <Icon.Button
          name={'arrow-left'}
          color={styles.iconColor}
          backgroundColor={styles.iconBackgroundColor}
        />

        <Text style={styles.title}>Sign up</Text>

        <TextBox
          iconName="user"
          placeholder="Full name"
          onChangeText={value => {
            setEmail(value);
          }}
        />

        <TextBox
          iconName="envelope"
          placeholder="Your best e-mail"
          onChangeText={value => {
            setEmail(value);
          }}
        />

        <TextBox
          iconName="lock"
          placeholder="Password"
          onChangeText={value => {
            setPassword(value);
          }}
        />

        <TextBox
          iconName="lock"
          placeholder="Retype Password"
          onChangeText={value => {
            setPassword(value);
          }}
        />

        <View style={styles.link.container}>
          <Text style={styles.text}>By signing up you are agree to our </Text>
          <Text
            style={styles.link.text.termsAndConditions}
            onPress={() => Linking.openURL('https://google.com')}>
            Terms & Conditions
          </Text>
        </View>

        <FlatButton
          title="Sign up"
          styleButton={styles.button}
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <View style={styles.link.container}>
        <Text style={styles.text}>Already have an account? </Text>
        <Text style={styles.link.text.signin}>
          {/* Link to Google is temporary, because I need to create that feature */}
          Sign in
        </Text>
      </View>
    </View>
  );
}
