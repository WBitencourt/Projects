import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

export default function FlatButton({title, onPress, styleTitle, styleButton}) {
  return (
    <TouchableOpacity style={[styleButton, styles.button]} onPress={onPress}>
      <Text style={[styleTitle, styles.buttonTitle]}>{title}</Text>
    </TouchableOpacity>
  );
}
