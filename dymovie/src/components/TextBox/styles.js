import {StyleSheet} from 'react-native';
import Theme from '../../styles/Theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.color.tertiary,
    borderRadius: 8,
    height: 52,
    flexDirection: 'row',
    marginVertical: 5,
  },
  icon: {
    marginTop: 16,
    marginLeft: 12,
    opacity: 0.6,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});

export default styles;
