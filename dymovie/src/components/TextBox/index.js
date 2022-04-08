import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Theme from '../../styles/Theme';
import styles from './styles';

export default function TextBox(props) {
  const {iconName, ...propsTextInput} = props;

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name={iconName} color={Theme.color.secondary} size={25} />
      </View>
      <TextInput {...propsTextInput} style={styles.input} />
    </View>
  );
}
