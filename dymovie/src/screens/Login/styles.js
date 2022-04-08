import {StyleSheet} from 'react-native';
import Theme from '../../styles/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Theme.color.primary,
  },
  icon: {
    color: Theme.color.secondary,
    backgroundColor: Theme.color.primary,
  },
  title: {
    fontFamily: Theme.font.primary,
    fontSize: Theme.font.size.xxlarge,
    color: Theme.color.main,
    marginVertical: 20,
  },
});

export default styles;
