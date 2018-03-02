WARNING : For GodSake Do not use the Templates used in this project. They are copy right protected. So Do not use it other than learning.

**React-Redux-Rest-Django Integration**


To setup project directly from this repo=> To install js packages in package.json file, navigate to folder containing package.json file, then run this
command: npm install
For the django packages navigate to folder containing requirements.txt file, run this
command: pip install -r requirements.txt

==============================================================================================================================
To Integrate Django with react:-


**Create Django Project**


In root directory, where manage.py file reside perform following:-


**Integrate Django with React**

```
command: npm init
```

=> this creates the package.json file.

```
command: npm install --save-dev react webpack webpack-bundle-tracker babel babel-loader babel-core babel-preset-env babel-preset-react react-dom
```

=> this creates node_modules, package-lock.json


Follow the below steps of code to simply integrate django with react. Later we will built into a real project.

```
command: mkdir -p assets/js
command: touch assets/js/index.js
command: touch assets/js/app.jsx
```

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

```
command: touch .babelrc
```

=> creates .babelrc file. Now add below code to .babelrc:
-------------------------------------
{
  "presets": ["env", "react"]
}
-------------------------------------

```
command: touch webpack.config.js
```

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

```
command: pip install django-webpack-loader
```

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

=>Modify above code to below code To take react compiled files as static files:-
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

```
command: ./node_modules/.bin/webpack --config webpack.config.js

command: ./node_modules/.bin/webpack --config webpack.config.js --watch
```

Also run the django server


refer this- http://owaislone.org/blog/webpack-plus-reactjs-and-django/



**Setup API**


Once i integrated the required template with react and django, created models and next to fetch data from backend and display in front using redux and API
Here we need django-rest to convert data from models to serialized form.

Install Rest frame work-

```
command : pip install djangorestframework
```

Now added below 'rest_framework' in INSTALLED_APPS

'rest_framework'


Now created api folder, v1 folder, and everything in it

Now Lets create modelserializers, viewsets, urls, etc

Once api is setup, tested, lets start redux integration




**Redux Integration with API**


Now lets start redux integration.

```
command : npm install --save-dev redux react-redux redux-logger redux-thunk redux-promise-middleware
```

*react-redux - To connect react and redux
*redux-logger - For better an colorful logs in console
*redux-thunk - Is a function that wraps an expression to delay its evaluation.to enable Redux Thunk, use applyMiddleware().
*redux-promise-middleware - Redux promise middleware enables robust handling of async code in Redux. The middleware enables optimistic updates and dispatches pending, fulfilled and rejected actions. It can be combined with redux-thunk to chain async actions.

Create store, reducers, actions folders. In store folder create store.js

Then create as it looks now.

Then start configuring reducers and actions.

In store.js file we have called reducers as a single file. So if there are multiple reducers we need to combine them.


Now in actions we need to fetch data from rest-api. So to fetch we need axios.

```
command : npm install --save-dev axios
```

Now write the action to fetch the data from our api url


Now Lets connect react with redux

Do add them in our component file index.js, i mean the Provider and store

Next do the connect portion in listing file. Its in the listing file we are here pushing data to movielisting.jsx. So... thats why listing.jsx file

Now to use decorators we install

```
command: npm install --save-dev babel-plugin-transform-decorators-legacy
```

Here we are using connect decorator.
Also we add them to webpack.config file.
decorators are a great way to wrap components and to inject the props into these components
Connect, is linked to store. What ever is "return"-ed from connect is set as props




Now after actions, reducers, store, listing.jsx file etc, But on compiling got error on this "...state" in reducers. so inorder to overcome that-> Did the followings:
(solution- https://github.com/babel/babel-loader/issues/170)
We installed it to overcome above error and updated the .babelrc file.-

```
command: npm install --save-dev babel-plugin-transform-es2015-destructuring
command: npm install --save-dev babel-plugin-transform-object-rest-spread
```

Also updated .babelrc file as below.
-----------------------------------------------------------------------------------
.babelrc
{
  "presets": ["react", "es2015"],
  "plugins": ["transform-es2015-destructuring", "transform-object-rest-spread"]
}
-------------------------------------------------------------------------------------

Now error is gone. Can compile and run.

Now on compiling we might get error in console about the logger. The logger we using in store.js file
import logger from "redux-logger", will give you error, because for version issues. to solve this, we replace logger with { createLogger }. Issue solved compiled.
No errors.

Now we have moved react files to js/components. So configure web.config files and remaining files like that.

-------------------------------------------------------------------------------------

I installed below package so that i don't have to rename all 'class' in html tags to 'classname'. 'class' cannot be used with jsx. We get warnings in console.
Only warnings, not Errors. So this is not necessary. But if you want follow below lines.

command: npm install class-to-classname --save-dev

If you are installing, then add below contents to webpack.config file

module: {
	loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: "class-to-classname"
		}
	]
}

Refer this - https://www.npmjs.com/package/class-to-classname

---------------------------------------------------------------------------------------

Now to navigate from one page to another, We use routers in Reactjs.

command: npm install react-router-dom --save-dev

Followed this - https://www.tutorialspoint.com/reactjs/reactjs_router.htm


---------------------------------------------------------------------------------------

Once i'm ready with forms in template next is to implement react form submission

Installed redux form package.

command : npm install --save-dev redux-form

