const path = require('path');


module.exports = (env) => {

  return {
    mode: 'development',
    entry: {
      index: env.UIType === 'bootstrap' ? './src/Bootstrap/BootstrapEntry.tsx' : './src/Material/MaterialEntry.tsx'
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
          },
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
            },
          },
        },
      ],
    },
  
    externals: {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'React',
        root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'ReactDOM',
        root: 'ReactDOM',
      },
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@mui': path.resolve(__dirname, 'node_modules/@mui'),
        '@material-ui': path.resolve(__dirname, 'node_modules/@material-ui'),
        'react-bootstrap': path.resolve(__dirname, 'node_modules/react-bootstrap'),
      },
    },
  };
};
