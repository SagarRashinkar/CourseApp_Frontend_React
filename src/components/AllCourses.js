import React, { useState, useEffect } from 'react'
import Course from './Course'
import '../styles/AllCourses.css'
import axios from 'axios';
import base_url from '../api/bootapi'
import { toast } from 'react-toastify';

const AllCourses = () => {
  
  useEffect(()=>{
    document.title = 'All courses'
    getAllCoursesFromServer();
  }, []);

  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) =>{
        console.log(response.data);
        setCourses(response.data);
        toast.success("Courses has been loaded");
      },
      (error) =>{
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };

  const [courses, setCourses] = useState([])

  const updateCourses = (id)=>{
    setCourses(courses.filter((c)=> c.id != id ))
  }

    return (
    <div>
        <h1>AllCourses</h1>
        <p>List of courses are as follow</p>

        {
            courses.length>0? courses.map((item)=>(
                <Course key={item.id} course={item} update={updateCourses} />
            )) : "No courses are available"
        }

    </div>
  )
}

export default AllCourses