import { useEffect, useState } from 'react'
import ParentModel from './components/ParentModel.jsx'


function App() {
  const [inputData, setInputData] = useState([])
  console.log(inputData)

  const fetchData = async () =>{
  try {
       const response = await fetch("http://127.0.0.1:8000/api/v1/countries");
    const data = await response.json();
    setInputData(data)
  } catch (error) {
    console.log(error)
  }
  } 
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <>
        <ParentModel />
    </>
  )
}

export default App


