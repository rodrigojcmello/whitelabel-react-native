import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { modifier, styles } from './styles';

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
  const [focus, setFocus] = useState(false);

  return (
    <TouchableOpacity
      onFocus={(): void => setFocus(true)}
      onBlur={(): void => setFocus(false)}
      style={[styles.buttonContainer, focus && modifier.focus1.button]}
    >
      <View>
        <View
          style={[styles.buttonContainer2, focus && modifier.focus2.button]}
        >
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
              123{text}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
