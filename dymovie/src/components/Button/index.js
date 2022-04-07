import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

export default function FlatButton({title, onPress, styleTitle, styleButton}) {
  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
      <View style={[styleButton, styles.button]}>
        <Text style={[styleTitle, styles.buttonTitle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
