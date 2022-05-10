import React, { useEffect } from "react";
import '../styles/Home.css'
import { Button } from 'reactstrap'

const Home = () =>{

    useEffect(()=>{
        document.title = 'Home'
    }, []);

    return (
        <div>
            <div className="jumbotron">
                <h1>Courses Application</h1>
                <p>This Course Application is developed by Sagar Rashinkar for learning purpose and
                    its Backend is in Spring Boot and Frontend is in React.
                </p>
                <Button color="primary" outline>Start Using</Button>
            </div>
        </div>
    )
}

export default Home;