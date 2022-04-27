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
  iconGroup: {
    margin: 10,
    flexDirection: 'row',
  },
  iconStyle: {
    marginLeft: 10,
  },
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
      password: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
      },
      signup: {
        justifyContent: 'center',
        flexDirection: 'row',
      },
    },
    text: {
      password: {
        color: Theme.color.link,
        fontFamily: Theme.font.fontFamily.primary,
        fontSize: Theme.font.size.small,
        fontWeight: 'bold',
      },
      signup: {
        color: Theme.color.main,
        fontFamily: Theme.font.fontFamily.primary,
        fontSize: Theme.font.size.small,
        fontWeight: 'bold',
      },
    },
  },
});

export default styles;
