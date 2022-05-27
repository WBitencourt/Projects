import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.myTheme.color.primary};
  justify-content: center;
  align-items: center;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs(props => ({
  size: 'large',
  color: props.theme.myTheme.color.main,
}))``;
