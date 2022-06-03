import React, {useState} from 'react';
import {Linking} from 'react-native';
import {
  Container,
<<<<<<< HEAD
  ContainerRowDirection,
=======
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
  Formulary,
  InputText,
  ButtonLogin,
  LinkPassword,
<<<<<<< HEAD
  LinkSignup,
  TextForgotPassword,
  AuthLogin,
=======
  TextPassword,
  AnotherLogin,
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
  Text,
  GroupIcons,
  Icon,
} from './styles';
import useAuth from '../../contexts/auth';

export default function Login({navigation}) {
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
          iconName="envelope"
          placeholder="E-mail"
          onChangeText={value => {
            setEmail(value);
          }}
        />

        <InputText
          iconName="lock"
          placeholder="Password"
          onChangeText={value => {
            setPassword(value);
          }}
        />

        <ButtonLogin onPress={() => handleSignIn()} />

        <LinkPassword>
<<<<<<< HEAD
          <TextForgotPassword
            onPress={() => Linking.openURL('https://google.com')}>
            Forgot password?
          </TextForgotPassword>
        </LinkPassword>
      </Formulary>
      <AuthLogin>
        <Text>Or Sign in with</Text>
        <GroupIcons>
          <Icon
            name="google"
            onPress={() => Linking.openURL('https://google.com')}
          />
          <Icon
            name="facebook"
            onPress={() => Linking.openURL('https://m.facebook.com')}
          />
          <Icon
=======
          <TextPassword onPress={() => Linking.openURL('https://google.com')}>
            Forgot password?
          </TextPassword>
        </LinkPassword>
      </Formulary>
      <AnotherLogin>
        <Text>Or Sign in with</Text>
        <GroupIcons>
          <Icon.Button
            name="google"
            onPress={() => Linking.openURL('https://google.com')}
          />
          <Icon.Button
            name="facebook"
            onPress={() => Linking.openURL('https://m.facebook.com')}
          />
          <Icon.Button
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
            name="instagram"
            onPress={() => Linking.openURL('https://instagram.com')}
          />
        </GroupIcons>
<<<<<<< HEAD
        <ContainerRowDirection>
          <Text>Don't have an account?</Text>
          <LinkSignup onPress={() => navigation.navigate('Signup')}>
            Signup
          </LinkSignup>
        </ContainerRowDirection>
=======
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
        {/* <View style={styles.link.container.signup}>
          <Text style={styles.text}>Don't have an account? </Text>
          <Text
            style={styles.link.text.signup}
            onPress={() => navigation.navigate('Signup')}>
            Sign up
          </Text>
        </View> */}
<<<<<<< HEAD
      </AuthLogin>
=======
      </AnotherLogin>
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
    </Container>
  );
}

// export default function Login() {
//   return <View />;
// }

// export default function Login({navigation}) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const {signed, user, signIn} = useAuth();

//   function handleSignIn() {
//     signIn();
//   }

//   return (
//     <View style={styles.container}>
//       <View>
//         <TextBox
//           iconName="envelope"
//           placeholder="E-mail"
//           onChangeText={value => {
//             setEmail(value);
//           }}
//         />

//         <TextBox
//           iconName="lock"
//           placeholder="Password"
//           onChangeText={value => {
//             setPassword(value);
//           }}
//         />

//         <FlatButton
//           title="Log in"
//           styleButton={styles.button}
//           onPress={() => handleSignIn()}
//         />

//         <View style={styles.link.container.password}>
//           <Text
//             style={styles.link.text.password}
//             onPress={() => Linking.openURL('https://google.com')}>
//             Forgot password?
//           </Text>
//         </View>
//       </View>
//       <View style={{alignItems: 'center'}}>
//         <Text style={styles.text}>Or Sign in with</Text>
//         <View style={styles.iconGroup}>
//           <Icon.Button
//             name="google"
//             color={styles.iconColor}
//             size={30}
//             iconStyle={styles.iconStyle}
//             borderRadius={60}
//             backgroundColor={styles.iconBackgroundColor}
//             onPress={() => Linking.openURL('https://google.com')}
//           />
//           {/* Link to Google is temporary, because I need to create that feature */}
//           <Icon.Button
//             name="facebook"
//             color={styles.iconColor}
//             size={30}
//             iconStyle={styles.iconStyle}
//             borderRadius={60}
//             backgroundColor={styles.iconBackgroundColor}
//             onPress={() => Linking.openURL('https://m.facebook.com')}
//           />
//           {/* Link to Facebook is temporary, because I need to create that feature */}
//           <Icon.Button
//             name="instagram"
//             color={styles.iconColor}
//             size={30}
//             iconStyle={styles.iconStyle}
//             borderRadius={60}
//             backgroundColor={styles.iconBackgroundColor}
//             onPress={() => Linking.openURL('https://instagram.com')}
//           />
//           {/* Link to Instagram is temporary, because I need to create that feature */}
//         </View>
//         <View style={styles.link.container.signup}>
//           <Text style={styles.text}>Don't have an account? </Text>
//           <Text
//             style={styles.link.text.signup}
//             onPress={() => navigation.navigate('Signup')}>
//             Sign up
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// }
