import React, { useEffect, useState } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import axios from 'axios';
import base_url from '../api/bootapi'
import { toast } from 'react-toastify';

const AddCourse = () => {

    useEffect(()=>{
        document.title = 'Add course'
    }, []);

    const [course, setCourse] = useState({});

    const handleForm = (e)=> {
        console.log(course);
        postDataOnServer(course)
        e.preventDefault();
    }

    // posting data to server
    const postDataOnServer = () => {
        axios.post(`${base_url}/courses`, course).then(
            (response) => {
                console.log(response);
                toast.success("Course added successfully");
            },
            (error)=>{
                console.error(error);
                toast.error("Error ! something went wrong");
            }
        )
    }

  return (
    <div>
        <h1 className='text-center'>Fill Course Details Here</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label for='userId'>Course Id</label>
                <Input type='text' placeholder='Enter id here' name='userId' id='userId' 
                onChange={(e)=>{
                    setCourse({...course, id: e.target.value});
                }}
                />
            </FormGroup>

            <FormGroup>
                <label for="courseTitle">Course Title</label>
                <Input type='text' placeholder='Enter course title here' name='courseTitle' id='courseTitle' 
                onChange={(e)=>{
                    setCourse({...course, title: e.target.value});
                }}
                />
            </FormGroup>

            <FormGroup>
                <label for="description">Course Description</label>
                <Input type='text' placeholder='Enter course description here' name='description' id='description' style={{height:"80px"}} 
                onChange={(e)=>{
                    setCourse({...course, description: e.target.value});
                }}
                />
            </FormGroup>

            <div className="text-center" style={{marginBottom: "2%"}}>
                <Button type='submit' color="success">Add Course</Button>
                <Button type='reset' color="warning" style={{marginLeft:"2%"}}>Clear</Button>
            </div>
        </Form>
    </div>
  )
}

export default AddCourse