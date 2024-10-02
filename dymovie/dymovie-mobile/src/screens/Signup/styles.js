import styled from 'styled-components';
import TextBox from '../../components/TextBox';
import FlatButton from '../../components/Button';

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
