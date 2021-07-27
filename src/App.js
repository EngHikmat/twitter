import React from 'react';
import Login from './Component/Login';
import Home from './Component/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import {AuthProvider, AuthContext} from './Component/AuthContext';
import Intro from './Component/Intro';


function App() {
  const authContext = React.useContext(AuthContext);

  return (
    <div className="App">

      {authContext.auth.email?
        <BrowserRouter>
      <Intro/>
      </BrowserRouter>
      :<Login/>}
      
      
    </div>
  );
}

function Appwithstore(){

  return(
    <AuthProvider>
      <App/>
    </AuthProvider>
  );
}

export default Appwithstore;
