module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/BookStore/'
    : '/',
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
