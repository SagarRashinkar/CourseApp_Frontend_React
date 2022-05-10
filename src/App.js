import "./App.css";
// import { Button } from 'reactstrap'
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import { Container, Row, Col } from "reactstrap";
import Header from "./components/Header";
import Menus from "./components/Menus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const toastHandler = () =>{
    toast("This is my first message");
  }

  return (
    <>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/view-courses" element={<AllCourses />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
