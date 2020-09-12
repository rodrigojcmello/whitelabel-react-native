import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type Styles = ViewStyle | TextStyle | ImageStyle;

export type ButtonElementsAttributes = 'button' | 'text';

type ButtonElements<T> = {
  [attr in ButtonElementsAttributes]: T;
};

export type ButtonTypeAttribute = 'accent' | 'default' | 'text';

export type ButtonSizeAttribute =
  | 'xxxSmall'
  | 'xxSmall'
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'
  | 'xxLarge'
  | 'xxxLarge';

type ButtonTypeStyle<T> = {
  [attr in ButtonTypeAttribute]: Partial<ButtonElements<T>>;
};

type ButtonSizeStyle<T> = {
  [attr in ButtonSizeAttribute]: Partial<ButtonElements<T>>;
};

interface WhiteLabel<T> {
  button?: {
    type?: ButtonTypeStyle<T>;
    size?: ButtonSizeStyle<T>;
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
      xxxSmall: {
        button: {
          color: 'red',
        },
        text: {
          color: 'red',
        },
      },
      xxSmall: {
        button: {
          color: 'red',
        },
      },
      xSmall: {},
      small: {
        button: {
          minWidth: 80,
        },
        text: {
          lineHeight: 20,
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
          lineHeight: 20,
          fontSize: 14,
        },
      },
      large: {
        button: {
          minWidth: 200,
          height: 42,
        },
        text: {
          lineHeight: 20,
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
