import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/App.css';
import {Routes, Route, useNavigate, NavLink} from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import TemplateSelection from './components/TemplateSelection';
import Configuration from './components/Configuration';

function App() {
  const navigate = useNavigate();

  const [templateList, setTemplateList] = useState([
    {
        id:0,
        name:"empty Template",
        item1:null,
        item2:null,
        item3:null,
        item4:null
    },
    {
        id:1,
        name:"office Template",
        item1:"Dual Sim",
        item2:"Encrypted",
        item3:"good Battery life",
        item4:"Stylus included"
    },
    {
        id:2,
        name:"gaming Template",
        item1:"Fast CPU",
        item2:"Retina Display",
        item3:"120 Hz",
        item4:"good Battery life"
    }
])

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" style={{height:"10vh"}} >
        <Container>
        <Navbar.Brand >
            <img
            id="projectLogo"
              alt="LOGO"
              width={80}
              height={80}
              style={{marginTop:"2px", outlineStyle:"solid",outlineColor:"black",outlineWidth:"2px", color:"black"}}
              className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" style={{textDecoration:"none", color:"black"}}>Home</NavLink>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
       
      <Routes>
        <Route path="/" element={
          <TemplateSelection
          templateList={templateList}
          />

        }/>
        <Route path="/configurator/template=:id" element={
          <>
          <Configuration
          templateList={templateList}
          />
          </>

        }/>
      </Routes>

    </div>
  );
}

export default App;
