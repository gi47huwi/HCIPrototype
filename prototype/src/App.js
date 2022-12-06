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
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


function App() {
  const navigate = useNavigate();

  const [templateList, setTemplateList] = useState([
    {},
    {
        id:1,
        name:"empty Template",
        item1:null,
        item2:null,
        item3:null,
        item4:null
    },
    {
        id:2,
        name:"Office Template",
        item1:"Dual Sim",
        item2:"Encrypted",
        item3:"good Battery life",
        item4:"Stylus included"
    },
    {
        id:3,
        name:"Gaming Template",
        item1:"Fast CPU",
        item2:"Retina Display",
        item3:"120 Hz",
        item4:"good Battery life"
    },
    {
        id:4,
        name:"Template 4",
        item1:"ITEM",
        item2:"ITEM",
        item3:"ITEM",
        item4:"ITEM"
    },
    {
        id:5,
        name:"Template 5",
        item1:"ITEM",
        item2:"ITEM",
        item3:"ITEM",
        item4:"ITEM"
    },
    {
        id:6,
        name:"Template 6",
        item1:"ITEM",
        item2:"ITEM",
        item3:"ITEM",
        item4:"ITEM"
    },
    {}
]);
const [config, setConfig] = useState({
  case: null,
  size:30,
  cpu:null,
  battery:null
});

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" style={{height:"10vh", width:"100vw"}} >
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
          config={config}
          setConfig={setConfig}
          />
          </>

        }/>
        <Route path="/cart" element={
          <>
          <MDBTable>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'></th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Auswahl</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {Object.keys(config).map((element)=>{
                        if(config[element]){
                            
                            return(
                                <tr>
                                <th></th>
                                <td>
                                    {element}
                                </td>
                                <td>{config[element]}</td>
                                </tr>
                                )
                            }
                            
                            
                        })}
                        
                    </MDBTableBody>
                    </MDBTable>
          
          </>

        }/>
      </Routes>

    </div>
  );
}

export default App;
