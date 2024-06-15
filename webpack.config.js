const path = require('path');


module.exports = (env) => {

  return {
    mode: env,
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
};