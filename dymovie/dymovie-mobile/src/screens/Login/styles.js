import styled from 'styled-components';
import TextBox from '../../components/TextBox';
import FlatButton from '../../components/Button';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.myTheme.color.primary};
  justify-content: space-between;
  padding: 10px;
`;

export const Formulary = styled.View``;

export const InputText = styled(TextBox)``;

export const LinkPassword = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  margin-right: 15px;
`;

export const TextForgotPassword = styled.Text`
  color: ${props => props.theme.myTheme.color.link};
  font-family: ${props => props.theme.myTheme.font.fontFamily.primary};
  font-size: ${props => props.theme.myTheme.font.size.medium}px;
  font-weight: bold;
`;

export const AuthLogin = styled.View`
  align-items: center;
  margin: 50px;
`;

export const Text = styled.Text`
  font-family: ${props => props.theme.myTheme.font.fontFamily.primary};
  font-size: ${props => props.theme.myTheme.font.size.medium}px;
  color: ${props => props.theme.myTheme.color.secondary};
`;

export const GroupIcons = styled.View`
  flex-direction: row;
  margin: 10px;
`;

export const Icon = styled(IconFontAwesome.Button).attrs(props => ({
  color: props.theme.myTheme.color.secondary,
  size: 30,
  borderRadius: 60,
  backgroundColor: props.theme.myTheme.color.primary,
}))``;

export const ButtonLogin = styled(FlatButton).attrs(props => ({
  title: 'Log in',
  backgroundColor: props.theme.myTheme.color.main,
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
