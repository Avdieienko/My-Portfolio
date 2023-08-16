import './App.css';
import {Main} from "./Main"
import {useState, useEffect } from "react"
import PropagateLoader  from "react-spinners/PropagateLoader";
import { Typewriter } from './components/Typewriter';


function App() {
  const [loading,setLoading] = useState(false);
  const loaded = true


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
      <div className={`App ${loaded ? "loaded_app":""}`}>
        <h1 className={loaded ? "loaded_logo" : ""}>VDNK</h1>
        <Typewriter className="loaded_name" delay={100} text="Dmytro Avdieienko"/>
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
