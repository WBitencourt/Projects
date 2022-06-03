import styled from 'styled-components/native';

export const TouchableOpacity = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 14px 0px 14px 0px;
<<<<<<< HEAD
  background-color: ${props => props.backgroundColor};
  width: 100%;
=======
  margin: 10px;
  background-color: ${props => props.backgroundColor};
>>>>>>> ca1ce95b9fc62748dda53551a66da9733e2f57c5
`;

export const Text = styled.Text`
  font-size: ${props => props.theme.myTheme.font.size.medium}px;
  font-family: ${props => props.theme.myTheme.font.fontFamily.primary};
  text-align: center;
  margin: 0px 14px 0px 14px;
  color: ${props => props.titleColor || '#FFFFFF'};
`;
