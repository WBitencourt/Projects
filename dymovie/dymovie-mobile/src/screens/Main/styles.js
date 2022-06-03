import styled from 'styled-components/native';
import FlatButton from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.myTheme.color.primary};
<<<<<<< HEAD
  padding: 10px;
=======
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
`;

export const Switch = styled.Switch.attrs(props => ({
  value: props.theme.myTheme.title === 'dark' ? true : false,
  thumbColor: props.theme.myTheme.color.main,
  trackColor: {
    false: props.theme.myTheme.color.secondary,
    true: props.theme.myTheme.color.secondary,
  },
<<<<<<< HEAD
}))``;
=======
}))`
  margin: 20px;
`;
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5

export const Logo = styled.View`
  flex: 7;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.Image.attrs({
  source: require('../../assets/logo264x262-noback.png'),
})`
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
`;

export const LogoText = styled.Text`
  font-size: ${props => props.theme.myTheme.font.size.xxlarge}px;
  font-family: ${props => props.theme.myTheme.font.fontFamily.primary};
  color: ${props => props.theme.myTheme.color.secondary};
`;

export const ButtonLogin = styled(FlatButton).attrs(props => ({
  title: 'Log in',
  backgroundColor: props.theme.myTheme.color.main,
<<<<<<< HEAD
}))`
  margin: 5px 0px 5px 0px;
`;
=======
}))``;
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5

export const ButtonSignup = styled(FlatButton).attrs(props => ({
  title: 'Sign up',
  titleColor: props.theme.myTheme.color.primary,
  backgroundColor: props.theme.myTheme.color.secondary,
<<<<<<< HEAD
}))`
  margin: 5px 0px 5px 0px;
`;
=======
}))``;
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
