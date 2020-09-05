import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import whitelabel from '../../../whitelabel';

interface ButtonProps {
  text: string;
  type: 'default' | 'accent' | 'text';
  size?:
    | 'xxxSmall'
    | 'xxSmall'
    | 'xSmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xLarge'
    | 'xxLarge'
    | 'xxxLarge';
}

const Button: FC<ButtonProps> = ({ text, type, size }) => {
  return (
    <View
      style={[
        styles.button,
        modifier[type]?.button,
        modifier[size || 'medium']?.button,
      ]}
    >
      <Text
        style={[
          styles.text,
          modifier[type]?.text,
          modifier[size || 'medium']?.text,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    // Default
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
});

const modifier = {
  // Type
  accent: StyleSheet.create(whitelabel?.button?.type?.accent),
  default: StyleSheet.create(whitelabel?.button?.type?.default),
  text: StyleSheet.create(whitelabel?.button?.type?.text),

  // Size
  xxxSmall: StyleSheet.create(whitelabel?.button?.size?.xxxSmall),
  xxSmall: StyleSheet.create(whitelabel?.button?.size?.xxxSmall),
  xSmall: StyleSheet.create(whitelabel?.button?.size?.xSmall),
  small: StyleSheet.create(whitelabel?.button?.size?.small),
  medium: StyleSheet.create(whitelabel?.button?.size?.medium),
  large: StyleSheet.create(whitelabel?.button?.size?.large),
  xLarge: StyleSheet.create(whitelabel?.button?.size?.xLarge),
  xxLarge: StyleSheet.create(whitelabel?.button?.size?.xxLarge),
  xxxLarge: StyleSheet.create(whitelabel?.button?.size?.xxxLarge),
};

export default Button;
