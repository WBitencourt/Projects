import {StyleSheet} from 'react-native';
import LightTheme from '../../styles/Theme/Light';
import DarkTheme from '../../styles/Theme/Dark';

const theme = DarkTheme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
  },
  logo: {
    container: {
      flex: 7,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    size: {
      height: 100,
      width: 100,
      marginBottom: 20,
    },
    text: {
      fontSize: 28,
      color: theme.secondary,
    },
  },
  footer: {
    container: {
      flex: 3,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    button: {
      login: {
        margin: 10,
        backgroundColor: '#D81F26',
      },
      signup: {
        margin: 10,
        backgroundColor: theme.secondary,
      },
      signupTitle: {
        color: theme.primary,
      },
    },
  },
});

export default styles;
