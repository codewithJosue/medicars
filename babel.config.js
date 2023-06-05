module.exports = function(api) {
  api.cache(false);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
    plugins: [
      "react-native-reanimated/plugin",
      ["module:react-native-dotenv", {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
        "safe": true,
        "allowUndefined": true,
      }],
    ],
  };
};
