import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type Styles = ViewStyle | TextStyle | ImageStyle;

interface ButtonElements<T> {
  button?: T;
  text?: T;
}

interface WhiteLabel<T> {
  button?: {
    type?: {
      accent?: ButtonElements<T>;
      default?: ButtonElements<T>;
      text?: ButtonElements<T>;
    };
    size?: {
      xxxSmall: ButtonElements<T>;
      xxSmall: ButtonElements<T>;
      xSmall: ButtonElements<T>;
      small: ButtonElements<T>;
      medium: ButtonElements<T>;
      large: ButtonElements<T>;
      xLarge: ButtonElements<T>;
      xxLarge: ButtonElements<T>;
      xxxLarge: ButtonElements<T>;
    };
  };
}

const whitelabel: WhiteLabel<Styles> = {
  button: {
    type: {
      accent: {
        button: {
          backgroundColor: '#0078d4',
          borderRadius: 2,
        },
        text: {
          color: '#FFFFFF',
        },
      },
      default: {
        button: {
          backgroundColor: '#efefef',
          borderRadius: 2,
        },
        text: {
          color: '#000000',
        },
      },
      text: {
        button: {
          backgroundColor: '#ffffff00',
        },
        text: {
          color: '#0078D4',
          textDecorationLine: 'underline',
        },
      },
    },
    size: {
      xxxSmall: {},
      xxSmall: {},
      xSmall: {},
      small: {
        button: {
          minWidth: 80,
        },
        text: {
          // lineHeight: '20px',
          fontSize: 12,
        },
      },
      medium: {
        button: {
          minWidth: 120,
          height: 32,
          paddingRight: 16,
          paddingLeft: 16,
        },
        text: {
          fontSize: 14,
        },
      },
      large: {
        button: {
          minWidth: 200,
          height: 42,
        },
        text: {
          fontSize: 16,
        },
      },
      xLarge: {},
      xxLarge: {},
      xxxLarge: {},
    },
    // color: {},
  },
};

export default whitelabel;
