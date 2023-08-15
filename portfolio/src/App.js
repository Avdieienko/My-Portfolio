import './App.css';
import {Main} from "./Main"
import {useState, useEffect } from "react"
import PropagateLoader  from "react-spinners/PropagateLoader";
import logo from "./images/logo.svg"


function App() {
  const [loading,setLoading] = useState(false);



  const loaded = true

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
        <h1 className={loaded ? "loaded_logo" : ""}>VDNK</h1>
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
