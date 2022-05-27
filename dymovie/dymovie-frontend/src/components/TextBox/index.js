import React from 'react';
import {View} from 'react-native';
import {Container, Icon, TextInput} from './styles';

export default function TextBox(props) {
  const {iconName, ...propsTextInput} = props;

  return (
    <Container>
      <View>
        <Icon name={iconName} />
      </View>
      <TextInput {...propsTextInput} placeholderTextColor="black" />
    </Container>
  );
}
