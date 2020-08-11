import React, {useState, useEffect} from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation'
import Frontpage from './components/frontpage/frontpage'
import Footer from './components/footer/footer'
import Login from './components/login/login'

function App() {

  const [loginData, setLoginData] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('token')){
      console.log("SESSIONSTORAGE IS PRESENT")
      setLoginData(JSON.parse(localStorage.getItem('token')))
    }
  }, [])

  return (
    <Router>
      <Navigation loginData={loginData} setLoginData={setLoginData}/>
      <Switch>
        <Route path="/login"><Login loginData={loginData} setLoginData={setLoginData}/></Route>
        <Route path="/"><Frontpage setLoginData={setLoginData}/></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
