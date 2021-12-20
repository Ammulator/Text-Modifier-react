import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert=(message,Type)=>{
    setAlert({
      msg:message,
      type:Type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const [mode, setMode] = useState("light");
  const togglemode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="gray";
      showAlert(" Dark Mode is enabled","success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert(" Light Mode is enabled","warning");
    }
  }
  return (
    <>
    <Router>
        <Navbar title="Text Modifier" about="About" mode={mode} togglemode={togglemode} />
        <Alert Alert={alert}/>
        <div className="container my-3" >
        <Routes>
          <Route path="/about" exact element={<About mode={mode}/>}/>
          <Route path="/" exact element={<TextForm showAlert={showAlert} heading="Enter text to analysis" mode ={mode}/>}/>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
