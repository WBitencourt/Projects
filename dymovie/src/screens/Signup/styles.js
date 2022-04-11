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
  title: {
    fontFamily: Theme.font.primary,
    fontSize: Theme.font.size.xxlarge,
    color: Theme.color.main,
    marginVertical: 20,
  },
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
