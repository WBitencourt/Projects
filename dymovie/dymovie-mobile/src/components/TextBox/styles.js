import styled from 'styled-components/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  background-color: ${props => props.theme.myTheme.color.tertiary};
  border-radius: 8px;
  height: 52px;
  flex-direction: row;
  margin: 5px 0px 5px 0px;
`;

export const Icon = styled(IconFontAwesome).attrs(props => ({
  size: 20,
  color: props.theme.myTheme.color.secondary,
}))`
  margin: 16px 0px 16px 12px;
  opacity: 0.5;
`;

export const TextInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.myTheme.color.secondary,
}))`
  flex: 1;
  margin-left: 10px;
  opacity: 0.5;
`;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Theme.color.tertiary,
//     borderRadius: 8,
//     height: 52,
//     flexDirection: 'row',
//     marginVertical: 5,
//   },
//   icon: {
//     marginTop: 16,
//     marginLeft: 12,
//     opacity: 0.6,
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//     color: Theme.color.secondary,
//   },
// });

// export default styles;
