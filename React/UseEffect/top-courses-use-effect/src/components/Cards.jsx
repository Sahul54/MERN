import React from 'react'
import Card from './Card';

const Cards = ({courses}) => {
    // sara data ek array mai convert
    let allCourses = [];
     
    const getcourses = () => {
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        }) 
        return allCourses; 
    }
  return (
    <div>
        {
            getcourses().map( (course) => {
                return (<Card course = {course} />)
            })
        }
    </div>
  )
}

export default Cards