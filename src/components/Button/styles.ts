import { StyleSheet } from 'react-native';
import whitelabel from '../../../whitelabel-fluent';

export const styles = StyleSheet.create({
  buttonContainer: {
    padding: 3,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    margin: -3,
  },
  buttonContainer2: {
    padding: 1,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    margin: -1,
  },
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

export const modifier = {
  focus1: StyleSheet.create({
    button: {
      backgroundColor: '#000',
    },
  }),
  focus2: StyleSheet.create({
    button: {
      backgroundColor: '#FFF',
    },
  }),

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
