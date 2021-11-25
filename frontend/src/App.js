// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/Components/Home/Home"
import Navbar from "../src/Components/Navbar/Navbar"
import Login from "../src/Components/Login/Login"
// import Modal from './Components/modal/Modal';
import { useEffect, useState } from 'react';

function App() {

  const [linkList,setLinkList] = useState([])
  const [userName, setUserName] = useState(null);
  // console.log(userName)

  useEffect(()=>{
    setUserName("samar")
  },[])

  const loadLinks = ()=>{

    setLinkList([
      1,
      2,
      3
    ])

  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar userName={userName}/>
            <Home linkList={linkList} setLinkList={setLinkList} loadLinks={loadLinks} userName={userName}/>
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
