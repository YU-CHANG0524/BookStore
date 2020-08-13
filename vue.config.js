module.exports = {
  configureWebpack: {
    entry: {
      main: './src/main.js',
    },
    resolve: {
      alias: {
        jquery: 'jquery/src/jquery',
      },
    },
  },
};
