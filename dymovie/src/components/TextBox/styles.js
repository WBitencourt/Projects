import {StyleSheet} from 'react-native';
import Theme from '../../styles/Theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.color.tertiary,
    borderRadius: 8,
    height: 52,
    flexDirection: 'row',
  },
  icon: {
    marginTop: 12,
    marginLeft: 12,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});

export default styles;
