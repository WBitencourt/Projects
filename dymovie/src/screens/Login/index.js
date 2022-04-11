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

        <Text style={styles.title}>Log in</Text>

        <TextBox
          iconName="envelope"
          placeholder="E-mail"
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

        <FlatButton
          title="Log in"
          styleButton={styles.button}
          onPress={() => Alert.alert('Simple Button pressed')}
        />

        <View style={styles.link.container.password}>
          <Text
            style={styles.link.text.password}
            onPress={() => Linking.openURL('https://google.com')}>
            Forgot password?
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Or Sign in with</Text>
        <View style={styles.iconGroup}>
          <Icon.Button
            name="google"
            color={styles.iconColor}
            size={30}
            iconStyle={styles.iconStyle}
            borderRadius={60}
            backgroundColor={styles.iconBackgroundColor}
            onPress={() => Linking.openURL('https://google.com')}
          />
          {/* Link to Google is temporary, because I need to create that feature */}
          <Icon.Button
            name="facebook"
            color={styles.iconColor}
            size={30}
            iconStyle={styles.iconStyle}
            borderRadius={60}
            backgroundColor={styles.iconBackgroundColor}
            onPress={() => Linking.openURL('https://m.facebook.com')}
          />
          {/* Link to Facebook is temporary, because I need to create that feature */}
          <Icon.Button
            name="instagram"
            color={styles.iconColor}
            size={30}
            iconStyle={styles.iconStyle}
            borderRadius={60}
            backgroundColor={styles.iconBackgroundColor}
            onPress={() => Linking.openURL('https://instagram.com')}
          />
          {/* Link to Instagram is temporary, because I need to create that feature */}
        </View>
        <View style={styles.link.container.signup}>
          <Text style={styles.text}>Don't have an account? </Text>
          <Text style={styles.link.text.signup}>
            {/* Link to Google is temporary, because I need to create that feature */}
            Sign up
          </Text>
        </View>
      </View>
    </View>
  );
}
