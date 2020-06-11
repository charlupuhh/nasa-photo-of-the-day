import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";

import Header from './Header'
import Image from './Image'
import variables from './secret'


function App() {
  var mykey = variables.MY_KEY;
  const [apiData, setAPIData] = useState({})
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${mykey}`)
     .then(res => {
       setAPIData(res.data)
     })
     .catch(err => {
       console.log(`There's an error of ${err}`)
     })
  }, [])

  useEffect(() => {
    console.log('It works')
  },[])

  console.log(apiData)

  return (
    <div className="App">
      <Header />

      <Image data={apiData} />
    </div>
  );
}

export default App;
