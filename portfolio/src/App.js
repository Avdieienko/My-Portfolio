import './App.css';
import {Main} from "./Main"
import {useState, useEffect } from "react"
import PropagateLoader  from "react-spinners/PropagateLoader";
import logo from "./images/logo.svg"


function App() {
  const [loading,setLoading] = useState(false);

useEffect(()=>{
  setLoading(true)
  setTimeout(() =>{
    setLoading(false)
  },3000)
},[])

  return (
    <>
    {
      loading ?
      <div className='App'>
        <img alt="logo" src={logo}></img>
        <PropagateLoader
          color="#baff39"
          loading={loading}
          size={10}
          speedMultiplier="1.5"
          aria-label="Loading Spinner"
        />
      </div>
      :

    <Main></Main>
    }
    </>
  );
}

export default App;
