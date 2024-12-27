import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Filter from './components/Filter'
import { filterData, apiUrl } from './data'
import { useEffect } from 'react'

function App() {
  const [courses, setCourses] = useState(null);

  useEffect( ()=>{
    const fetchData = async() =>{
      try{
        const res = await fetch(apiUrl);
        const getdata = await res.json();

        // save data into a variable
        console.log(data);
        setCourses(getdata.data)
      }
      catch(err){

      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <Filter filterData={filterData}/>
      <Cards courses={courses}/>
    </>
  )
}

export default App
