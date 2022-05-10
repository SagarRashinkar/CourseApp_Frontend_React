import axios from 'axios'
import React from 'react'
import { Button } from 'reactstrap'
import '../styles/Course.css'
import base_url from '../api/bootapi'
import { toast } from 'react-toastify'

const Course = ({ course, update }) => {

  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
        toast.success("Course deleted",  {position: toast.POSITION.TOP_RIGHT});
        update(id);
      },
      (error)=>{
        toast.error("Course not deleted !!! server issue");
      }
    )
  }

  return (
    <div className="Card-parent">
        <div className='Card'>
            <h1>{ course.title }</h1>
            <p>{ course.description }</p>
            <Button className='Btn' color="danger" onClick={()=>{
              deleteCourse(course.id);
            }}>Delete</Button>
            <Button className='Btn' color="warning">Update</Button>
        </div>
    </div>
  )
}

export default Course