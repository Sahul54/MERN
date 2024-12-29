import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Filter from './components/Filter';
import { filterData, apiUrl } from './data';

function App() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const getdata = await res.json();

        // save data into the state
        console.log(getdata); 
        setCourses(getdata.data);
      } catch (err) {
        console.error("Error fetching data:", err); 
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Filter filterData={filterData} />
      {
        courses 
          ? <Cards courses={courses} /> 
          : <p>Loading courses...</p> // Show a loading message while courses is null
      }
    </>
  );
}

export default App;
