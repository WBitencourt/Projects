<<<<<<< HEAD
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

export const Formulary = styled.View`
  align-items: center;
`;

export const InputText = styled(TextBox)``;

export const TermsConditions = styled.View`
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const TextTermsConditions = styled.Text`
  color: ${props => props.theme.myTheme.color.link};
  font-family: ${props => props.theme.myTheme.font.fontFamily.primary};
  font-size: ${props => props.theme.myTheme.font.size.medium}px;
  font-weight: bold;
  margin: 10px 0px 0px 0px;
`;

export const Login = styled.View`
  align-items: center;
  margin: 50px;
`;

export const Text = styled.Text`
  font-family: ${props => props.theme.myTheme.font.fontFamily.primary};
  font-size: ${props => props.theme.myTheme.font.size.medium}px;
  color: ${props => props.theme.myTheme.color.secondary};
`;

export const ButtonSignup = styled(FlatButton).attrs(props => ({
  title: 'Sign up',
  backgroundColor: props.theme.myTheme.color.main,
}))`
  margin: 10px 0px 10px 0px;
`;

export const ContainerRowDirection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LinkLogin = styled.Text`
  margin: 5px;
  color: ${props => props.theme.myTheme.color.main};
  font-weight: bold;
  font-size: ${props => props.theme.myTheme.font.size.medium}px;
  font-family: ${props => props.theme.myTheme.font.fontFamily.primary};
`;
=======
import {StyleSheet} from 'react-native';
import Theme from '../../styles/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Theme.color.primary,
    justifyContent: 'space-between',
  },
  iconColor: Theme.color.secondary,
  iconBackgroundColor: Theme.color.primary,
  // title: {
  //   fontFamily: Theme.font.primary,
  //   fontSize: Theme.font.size.xxlarge,
  //   color: Theme.color.main,
  //   marginBottom: 20,
  // },
  text: {
    fontFamily: Theme.font.fontFamily.primary,
    fontSize: Theme.font.size.small,
    color: Theme.color.secondary,
  },
  button: {
    marginVertical: 10,
    backgroundColor: Theme.color.main,
  },
  link: {
    container: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 10,
    },
    text: {
      termsAndConditions: {
        color: Theme.color.link,
        fontFamily: Theme.font.fontFamily.primary,
        fontSize: Theme.font.size.small,
        fontWeight: 'bold',
      },
      signin: {
        color: Theme.color.main,
        fontFamily: Theme.font.fontFamily.primary,
        fontSize: Theme.font.size.small,
        fontWeight: 'bold',
      },
    },
  },
});

export default styles;
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
