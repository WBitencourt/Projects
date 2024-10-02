import React from 'react';
import {TouchableOpacity, Text} from './styles';

export default function FlatButton({
  title,
  titleColor,
  backgroundColor,
  ...rest
}) {
  return (
    <TouchableOpacity backgroundColor={backgroundColor} {...rest}>
      <Text titleColor={titleColor}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}
