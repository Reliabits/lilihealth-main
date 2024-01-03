/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { Platform } from 'react-native';
import { Theme } from '@react-navigation/native';

export enum EColorPalette {
  PRIMARY = '#51B2BC',
  PRIMARY_LIGHT = '#C8EEF2',
  PRIMARY_DARK = '#559099',
  SECONDARY = '#093057',
  SECONDARY_DARK = '#D0D4D5',
  SECONDARY_LIGHT = '#F5FBFC',
  BLUE_100 = '#f2f8f9',
  BLUE_200 = '#F0FCFE',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  LIGHT_GRAY = '#B0B5BB',
  DEFAULT_TEXT = '#F4F4F4',
  BODY_TEXT = '#9099A3',
  RED = '#F34E1A',
}

export enum EFontFamily {
  BOLD = 'Catamaran-Bold',
  REGULAR = 'Catamaran-Regular',
  MEDIUM = 'Catamaran-Medium',
  CG_REGULAR = 'CormorantGaramond-Regular',
  CG_BOLD = 'CormorantGaramond-Bold',
}

export interface ITheme {
  navigationTheme: Theme;
  colors: {
    primary: EColorPalette.PRIMARY;
    primaryLight: EColorPalette.PRIMARY_LIGHT;
    primaryDark: EColorPalette.PRIMARY_DARK;
    secondary: EColorPalette.SECONDARY;
    secondaryDark: EColorPalette.SECONDARY_DARK;
    secondaryLight: EColorPalette.SECONDARY_LIGHT;
    blue100: EColorPalette.BLUE_100;
    blue200: EColorPalette.BLUE_200;
    appBackground: string;
    textForeground: string;
    textBackground: string;
    lightGray: EColorPalette.LIGHT_GRAY;
    white: EColorPalette.WHITE;
    black: EColorPalette.BLACK;
    red: EColorPalette.RED;
  };
  spacing: {
    appPadding: 20;
    bottomTabHeight: 55;
  };
  textVariants: {
    h1Cg30: {
      fontSize: 30;
      fontFamily: EFontFamily.CG_BOLD;
    };
    h2Cg20: {
      fontSize: 20;
      fontFamily: EFontFamily.CG_BOLD;
    };
    h2Cg22: {
      fontSize: 22;
      fontFamily: EFontFamily.CG_BOLD;
    };
    cg18: {
      fontSize: 18;
      fontFamily: EFontFamily.CG_BOLD;
    };
    bodyBold22: {
      fontSize: 22;
      fontFamily: EFontFamily.BOLD;
      fontWeight: '700' | undefined;
    };
    body22: {
      fontSize: 22;
      fontFamily: EFontFamily.REGULAR;
    };
    bodyBold20: {
      fontSize: 20;
      fontFamily: EFontFamily.BOLD;
      fontWeight: '700' | undefined;
    };
    body20: {
      fontSize: 20;
      fontFamily: EFontFamily.REGULAR;
    };
    bodyBold18: {
      fontSize: 18;
      fontFamily: EFontFamily.BOLD;
      fontWeight: '700' | undefined;
    };
    body18: {
      fontSize: 18;
      fontFamily: EFontFamily.REGULAR;
    };
    bodyBold16: {
      fontSize: 16;
      fontFamily: EFontFamily.BOLD;
      fontWeight: '700' | undefined;
    };
    body16: {
      fontSize: 16;
      fontFamily: EFontFamily.REGULAR;
    };
    bodyBold14: {
      fontSize: 14;
      fontFamily: EFontFamily.BOLD;
      fontWeight: '700' | undefined;
    };
    body14: {
      fontSize: 14;
      fontFamily: EFontFamily.REGULAR;
    };
    bodyBold12: {
      fontSize: 12;
      fontFamily: EFontFamily.BOLD;
      fontWeight: '700' | undefined;
    };
    body12: {
      fontSize: 12;
      fontFamily: EFontFamily.REGULAR;
    };
    body8: {
      fontSize: 8;
      fontFamily: EFontFamily.REGULAR;
    };
  };
}

export const theme: ITheme = {
  navigationTheme: {
    dark: false,
    colors: {
      primary: EColorPalette.PRIMARY,
      background: EColorPalette.WHITE,
      card: EColorPalette.WHITE,
      text: EColorPalette.DEFAULT_TEXT,
      border: EColorPalette.LIGHT_GRAY,
      notification: EColorPalette.PRIMARY_DARK,
    },
  },
  colors: {
    primary: EColorPalette.PRIMARY,
    primaryLight: EColorPalette.PRIMARY_LIGHT,
    primaryDark: EColorPalette.PRIMARY_DARK,
    secondary: EColorPalette.SECONDARY,
    secondaryDark: EColorPalette.SECONDARY_DARK,
    secondaryLight: EColorPalette.SECONDARY_LIGHT,
    blue100: EColorPalette.BLUE_100,
    blue200: EColorPalette.BLUE_200,
    appBackground: EColorPalette.WHITE,
    textForeground: EColorPalette.BODY_TEXT,
    textBackground: EColorPalette.DEFAULT_TEXT,
    lightGray: EColorPalette.LIGHT_GRAY,
    white: EColorPalette.WHITE,
    black: EColorPalette.BLACK,
    red: EColorPalette.RED,
  },
  spacing: {
    appPadding: 20,
    bottomTabHeight: 55,
  },
  textVariants: {
    h1Cg30: {
      fontSize: 30,
      fontFamily: EFontFamily.CG_BOLD,
    },
    h2Cg20: {
      fontSize: 20,
      fontFamily: EFontFamily.CG_BOLD,
    },
    h2Cg22: {
      fontSize: 22,
      fontFamily: EFontFamily.CG_BOLD,
    },
    cg18: {
      fontSize: 18,
      fontFamily: EFontFamily.CG_BOLD,
    },
    bodyBold22: {
      fontSize: 22,
      fontFamily: EFontFamily.BOLD,
      fontWeight: Platform.select({ ios: '700', android: undefined }),
    },
    body22: {
      fontSize: 22,
      fontFamily: EFontFamily.REGULAR,
    },
    bodyBold20: {
      fontSize: 20,
      fontFamily: EFontFamily.BOLD,
      fontWeight: Platform.select({ ios: '700', android: undefined }),
    },
    body20: {
      fontSize: 20,
      fontFamily: EFontFamily.REGULAR,
    },
    bodyBold18: {
      fontSize: 18,
      fontFamily: EFontFamily.BOLD,
      fontWeight: Platform.select({ ios: '700', android: undefined }),
    },
    body18: {
      fontSize: 18,
      fontFamily: EFontFamily.REGULAR,
    },
    bodyBold16: {
      fontSize: 16,
      fontFamily: EFontFamily.BOLD,
      fontWeight: Platform.select({ ios: '700', android: undefined }),
    },
    body16: {
      fontSize: 16,
      fontFamily: EFontFamily.REGULAR,
    },
    bodyBold14: {
      fontSize: 14,
      fontFamily: EFontFamily.BOLD,
      fontWeight: Platform.select({ ios: '700', android: undefined }),
    },
    body14: {
      fontSize: 14,
      fontFamily: EFontFamily.REGULAR,
    },
    bodyBold12: {
      fontSize: 12,
      fontFamily: EFontFamily.BOLD,
      fontWeight: Platform.select({ ios: '700', android: undefined }),
    },
    body12: {
      fontSize: 12,
      fontFamily: EFontFamily.REGULAR,
    },
    body8: {
      fontSize: 8,
      fontFamily: EFontFamily.REGULAR,
    },
  },
};
