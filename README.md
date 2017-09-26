# Choozle React Project

Added new UI features to Choozle's website:
* Float Labels
* Hover States
* Modal on form submittal
* Responsive hamburger menu

[Live Demo](http://kirstenswanson.io/react-choozle/)


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Added Sass and CSS Modules

`npm run eject`  
`yarn eject`

`npm i sass-loader node-sass --save`  
`yarn add sass-loader node-sass`

Modify the `webpack.config.dev.js` file  
Modify the `webpack.config.prod.js` file

```
const ExtractTextPlugin = require('extract-text-webpack-plugin');

{
  exclude: [
    /\.html$/,
    /\.(js|jsx)$/,
    /\.css$/,
    /\.json$/,
    /\.bmp$/,
    /\.gif$/,
    /\.jpe?g$/,
    /\.png$/,
    /\.scss$/,
  ],
  loader: require.resolve('file-loader'),
  options: {
    name: 'static/media/[name].[hash:8].[ext]',
  },
},
{
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
  fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
    'postcss-loader'
    ]
  })
},
{
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
  fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true,
          importLoaders: 2,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
    'sass-loader'
    ]
  })
},

plugins: [
  new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
]  

```

Create `postcss.config.js` file

```
module.exports = { plugins: [require('autoprefixer')] };
```

Added Typechecking with PropTypes  
`npm install prop-types --save`

Deployed to gh-pages  
`npm run deploy`  

[Live Demo](http://kirstenswanson.io/react-choozle/)
