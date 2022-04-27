import {StyleSheet} from 'react-native';
import Theme from '../../styles/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: Theme.color.primary,
  },
  logo: {
    container: {
      flex: 7,
      justifyContent: 'center',
      alignItems: 'center',
    },
    size: {
      height: 100,
      width: 100,
      marginBottom: 20,
    },
    text: {
      fontSize: Theme.font.size.xxlarge,
      fontFamily: Theme.font.fontFamily.primary,
      //color: Theme.color.secondary,
    },
  },
  button: {
    login: {
      margin: 10,
      //backgroundColor: Theme.color.main,
    },
    signup: {
      margin: 10,
      //backgroundColor: Theme.color.secondary,
    },
    signupTitle: {
      color: Theme.color.primary,
    },
  },
});

export default styles;
