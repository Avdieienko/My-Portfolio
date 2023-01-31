import './App.css';
import {Main} from "./Main"
import {useState, useEffect } from "react"
import PropagateLoader  from "react-spinners/PropagateLoader";
import logo from "./images/logo.svg"


function App() {
  const [loading,setLoading] = useState(false);



  const [loaded,setLoaded] = useState(false);

  useEffect(()=>{
    setLoading(true)
    if(loaded){
      setTimeout(() =>{
        setLoading(false)
      },3000)
    }
  },[loaded])

  return (
    <>
    {
      loading ?
      <div className={`App ${loaded ? "loaded_app":""}`}>
        <img className={loaded ? "loaded_img" : ""} alt="logo" src={logo} onLoad={() =>setLoaded(true)}></img>
        {loaded?<PropagateLoader
          color="#baff39"
          loading={loading}
          size={10}
          speedMultiplier="1.5"
          aria-label="Loading Spinner"
        />:""}
      </div>
      :

    <Main></Main>
    }
    </>
  );
}

export default App;
