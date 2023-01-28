import './App.css';
import {Main} from "./Main"
import {useState, useEffect } from "react"
import PacmanLoader from "react-spinners/PacmanLoader";


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
        <PacmanLoader
          color="#baff39"
          loading={loading}
          size={100}
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
