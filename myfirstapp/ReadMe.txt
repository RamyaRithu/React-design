

React Setup:
    1. Install node js application:  https://nodejs.org/en/download/
    2. Check your node version ===> node -v
    3. Create React application using:
        npm install -g create-react-app
    4. create-react-app myfirstapp =======> myfirstapp:(project name)
    5. To Run react app:
        PS E:\Thulasy\Training\react_workspace> cd myfirstapp
        PS E:\Thulasy\Training\react_workspace\myfirstapp> npm start


  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.37:3000

-----------------------------------------------------------------------------------------
Project Structure of REACT JS:

        node_modules:
            contains all our project dependencies
        public:
            contains static-files(css,js,html etc...) , index.html,images,video,audios
        src:
            contains all js files (.js extension) - source code
        package-lock.json:(yarn.lock)
            records all exact version of packages that we install
        package.json
            records our project dependencies and configures our project
        README.md
            Instructions on how to use this project

-------------------------------------------------------------------------------------------

1. Your index.html runs first where   <div id="root"></div> , it is intialized in 
index.js file. ====> document.getElementById("root")

2. 
import React from 'react';
import ReactDOM from 'react-dom/client';

3. App.js is used as Parent class.

import './index.css';
import App from './App';//App.js is been imported 


4. index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';//App.js is been imported 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 


5. App.js

function App() {
  return (
    <div>
      <h1> Hello React Application </h1>
    </div>
  );
}

export default App;

------------------------------------------------------------------------------------------------------------------------------
CHAPTER 1 : REACT JS : 


        *Variable declartion , import libraries, Component creation, function based component , class based component.
        *Loading bootstrap,jquery libraries.
        *Applying styles in js pages

Step 1 : How to install 3rd party libraries:
  Bootstrap & Jquery
  https://www.npmjs.com/package/bootstrap
  ===> Install with npm: 
    *npm install bootstrap@v5.2.3
    check into node_modules folder
    import into index.js page


  *npm install jquery


------------------------------------------------------------------------------------------------------------------------------
CHAPTER 2 : 
    STATE,properties,lifecycle of react component, how to pass data from one component to another, validation Applying\
    

    Install Router dom - navigate between links (NavLink | Link | Browser Router | Routes)
    -Server -> React Router

npm install react-router-dom
Ctrl + c ===> command line terminates (stop the server)


------------------------------------------------------------------------------------------------------------------------------
