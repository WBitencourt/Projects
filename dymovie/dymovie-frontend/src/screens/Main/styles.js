import styled from 'styled-components/native';
import FlatButton from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.myTheme.color.primary};
`;

export const Switch = styled.Switch.attrs(props => ({
  value: props.theme.myTheme.title === 'dark' ? true : false,
  thumbColor: props.theme.myTheme.color.main,
  trackColor: {
    false: props.theme.myTheme.color.secondary,
    true: props.theme.myTheme.color.secondary,
  },
}))`
  margin: 20px;
`;

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
}))``;

export const ButtonSignup = styled(FlatButton).attrs(props => ({
  title: 'Sign up',
  titleColor: props.theme.myTheme.color.primary,
  backgroundColor: props.theme.myTheme.color.secondary,
}))``;
