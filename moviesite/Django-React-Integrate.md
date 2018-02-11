To Integrate Django with react:-

In root directory, where manage.py file reside perform following:-


command: npm init
=> this creates the package.json file.


command: npm install --save-dev react webpack webpack-bundle-tracker babel babel-loader babel-core babel-preset-env babel-preset-react react-dom
=> this creates node_modules, package-lock.json


command: mkdir -p assets/js
command: touch assets/js/index.js
command: touch assets/js/app.jsx
=> this creates assets/js folder and add index.js and app.jsx, which are our react files. This is where we must code in react.


=>Now add below code to index.js file:
------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

ReactDOM.render(<App />, document.getElementById('react-app'));
------------------------------------


=>Now add below code to app.jsx file:
------------------------------------
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            Hello World!!! welocme to world of shit and react
            <h2>Great great!</h2>
         </div>
      );
   }
}

export default App
------------------------------------


command: touch .babelrc
=> creates .babelrc file. Now add below code to .babelrc:
-------------------------------------
{
  "presets": ["env", "react"]
}
-------------------------------------


command: touch webpack.config.js
=> this creates webpack.config.js file. Now add below code:
-------------------------------------
var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry: './assets/js/index.js', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}, // to transform JSX into JS
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
}
-------------------------------------
In webpack.config.js file we are pointing to index.js file in assets/js folder as entry point. Thats the react files. The Compiled files resides in assets/bundles folder. 



==>Now in our django project
=> Hope you have already set the django project. A django app to with a simple view connected to index.html. In templates folder, there exist index.html. (static urls, media url, etc)
=> In templates folder, in index.html add below code
--------------------------------------
{% load render_bundle from webpack_loader %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Example</title>
  </head>

  <body>
    <h1>Helloom</h1>
    <div id="react-app"></div>
    {% render_bundle 'main' %}
  </body>
</html>
--------------------------------------


command: pip install django-webpack-loader
=> To connect django with webpack.(that is, django to react connection)
=> Add 'webpack_loader' to INSTALLED_APPS

=>Look the below code, Just look:-
---------------------------------------
STATIC_URL = '/static/'

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
----------------------------------------

=>Modify above code to below code:-
----------------------------------------
STATIC_URL = '/static/'

# STATICFILES_DIRS = (
#     os.path.join(BASE_DIR, 'static'),
# )

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'assets'), # We do this so that django's collectstatic copies or our bundles to the STATIC_ROOT or syncs them to whatever storage we use.
)

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
----------------------------------------


=> Add below code to settings.py file
----------------------------------------
WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
    }
}
----------------------------------------



Now Django and React are integrated.

To compile use any of the following. 2nd command will continueously check. However since hotload is not installed and setup, hotload wont happen.

command: ./node_modules/.bin/webpack --config webpack.config.js

command: ./node_modules/.bin/webpack --config webpack.config.js --watch

Also run the django server


refer this- http://owaislone.org/blog/webpack-plus-reactjs-and-django/
