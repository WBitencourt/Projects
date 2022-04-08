import {StyleSheet} from 'react-native';
import Theme from '../../styles/Theme';

const styles = StyleSheet.create({
  touchableOpacity: {
    flex: 1,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
  },
  buttonTitle: {
    textTransform: 'uppercase',
    fontSize: Theme.font.size.medium,
    fontFamily: Theme.font.fontFamily.primary,
    textAlign: 'center',
    marginHorizontal: 14,
  },
});

export default styles;
