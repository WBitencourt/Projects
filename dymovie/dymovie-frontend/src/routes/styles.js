import {StyleSheet} from 'react-native';
import Theme from '../styles/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.color.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: Theme.color.main,
  },
});

export default styles;
