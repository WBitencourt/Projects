import styled from 'styled-components';
import TextBox from '../../components/TextBox';
import FlatButton from '../../components/Button';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.myTheme.color.primary};
  justify-content: space-between;
<<<<<<< HEAD
  padding: 10px;
=======
  padding-top: 10px;
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
`;

export const Formulary = styled.View``;

export const InputText = styled(TextBox)``;

export const LinkPassword = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  margin-right: 15px;
`;

<<<<<<< HEAD
export const TextForgotPassword = styled.Text`
  color: ${props => props.theme.myTheme.color.link};
  font-family: ${props => props.theme.myTheme.font.fontFamily.primary};
  font-size: ${props => props.theme.myTheme.font.size.medium}px;
  font-weight: bold;
`;

export const AuthLogin = styled.View`
  align-items: center;
  margin: 50px;
=======
export const TextPassword = styled.Text`
  color: ${props => props.theme.myTheme.color.link};
  font-family: ${props => props.theme.myTheme.font.fontFamily.primary};
  font-size: ${props => props.theme.myTheme.font.size.small}px;
  font-weight: bold;
`;

export const AnotherLogin = styled.View`
  align-items: center;
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
`;

export const Text = styled.Text`
  font-family: ${props => props.theme.myTheme.font.fontFamily.primary};
<<<<<<< HEAD
  font-size: ${props => props.theme.myTheme.font.size.medium}px;
=======
  font-size: ${props => props.theme.myTheme.font.size.small}px;
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
  color: ${props => props.theme.myTheme.color.secondary};
`;

export const GroupIcons = styled.View`
<<<<<<< HEAD
  flex-direction: row;
  margin: 10px;
`;

export const Icon = styled(IconFontAwesome.Button).attrs(props => ({
  color: props.theme.myTheme.color.secondary,
  size: 30,
  borderRadius: 60,
  backgroundColor: props.theme.myTheme.color.primary,
}))``;
=======
  margin: 10px;
  flex-direction: row;
`;

export const Icon = styled(IconFontAwesome.Button).attrs(props => ({
  color: props.theme.myTheme.color.main,
  size: 30,
  borderRadius: 60,
  backgroundColor: props.theme.myTheme.color.primary,
}))`
  margin-left: 10px;
`;
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5

export const ButtonLogin = styled(FlatButton).attrs(props => ({
  title: 'Log in',
  backgroundColor: props.theme.myTheme.color.main,
<<<<<<< HEAD
}))`
  margin: 10px 0px 10px 0px;
`;

export const ContainerRowDirection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LinkSignup = styled.Text`
  margin: 5px;
  color: ${props => props.theme.myTheme.color.main};
  font-weight: bold;
  font-size: ${props => props.theme.myTheme.font.size.medium}px;
  font-family: ${props => props.theme.myTheme.font.fontFamily.primary};
`;
=======
}))``;

// export const Container = styled.View``;
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5

// const styles = StyleSheet.create({
//   container: {
//   },
//   iconColor: Theme.color.secondary,
//   iconBackgroundColor: Theme.color.primary,
//   iconGroup: {
//     margin: 10,
//     flexDirection: 'row',
//   },
//   iconStyle: {
//     marginLeft: 10,
//   },
//   text: {
//     fontFamily: Theme.font.fontFamily.primary,
//     fontSize: Theme.font.size.small,
//     color: Theme.color.secondary,
//   },
//   button: {
//     marginVertical: 10,
//     backgroundColor: Theme.color.main,
//   },
//   link: {
//     container: {
//       password: {
//         justifyContent: 'flex-end',
//         flexDirection: 'row',
//       },
//       signup: {
//         justifyContent: 'center',
//         flexDirection: 'row',
//       },
//     },
//     text: {
//       password: {
//         color: Theme.color.link,
//         fontFamily: Theme.font.fontFamily.primary,
//         fontSize: Theme.font.size.small,
//         fontWeight: 'bold',
//       },
//       signup: {
//         color: Theme.color.main,
//         fontFamily: Theme.font.fontFamily.primary,
//         fontSize: Theme.font.size.small,
//         fontWeight: 'bold',
//       },
//     },
//   },
// });

// export default styles;
