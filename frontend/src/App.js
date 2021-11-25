// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/Components/Home/Home"
import Navbar from "../src/Components/Navbar/Navbar"
import Login from "../src/Components/Login/Login"
// import Modal from './Components/modal/Modal';
import { useEffect, useState } from 'react';

function App() {

  const [linkList,setLinklist] = useState([])
  const [userName, setUserName] = useState(null);
  console.log(userName)

  useEffect(()=>{
    setUserName("")
  },[userName])

  const loadLinks = ()=>{

    setLinklist([
      1,
      2,
      3
    ])

  }

  const submit = ()=>{

  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home linkList={linkList} loadLinks={loadLinks} submit={submit} />
          </Route>
        </Switch>
        <Route exact path="/Login">
          <Login/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
