import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import whitelabel from '../../../whitelabel';

interface ButtonProps {
  text: string;
  type: 'default' | 'accent' | 'text';
}

const Button: FC<ButtonProps> = ({ text, type }) => {
  return (
    <View style={[styles.button, modifier[type].button]}>
      <Text style={[styles.text, modifier[type].text]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    // Default
    alignItems: 'center',
    justifyContent: 'center',

    // Custom
    height: 32,
    width: 120,
    borderRadius: 2,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
});

const modifier = {
  accent: StyleSheet.create(whitelabel.button.type.accent),
  default: StyleSheet.create(whitelabel.button.type.default),
  text: StyleSheet.create(whitelabel.button.type.text),
};

export default Button;
