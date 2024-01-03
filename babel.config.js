module.exports = function (api) {
  api.cache(false);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['.'],
          alias: {
            src: './src',
            common: './src/common',
            components: './src/components',
            screens: './src/screens',
            store: './src/store',
            reducers: './src/store/reducers',
          },
        },
      ],
      'react-native-reanimated/plugin',
      [
        'module:react-native-dotenv',
        {
          moduleName: 'react-native-dotenv',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
