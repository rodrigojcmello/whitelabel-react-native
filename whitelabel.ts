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
          backgroundColor: '#6200ee',
          borderRadius: 4,
        },
        text: {
          color: '#FFFFFF',
          textTransform: 'uppercase',
        },
      },
      default: {
        button: {
          backgroundColor: '#FFFFFF',
          borderRadius: 4,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#0000001f',
        },
        text: {
          color: '#6200ee',
          textTransform: 'uppercase',
        },
      },
      text: {
        button: {
          backgroundColor: '#ffffff00',
        },
        text: {
          color: '#6200ee',
          textTransform: 'uppercase',
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
          height: 24,
          paddingRight: 16,
          paddingLeft: 16,
        },
        text: {
          lineHeight: 20,
          fontSize: 12,
        },
      },
      medium: {
        button: {
          minWidth: 120,
          height: 36,
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
