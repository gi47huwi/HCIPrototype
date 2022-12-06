import '../css/App.css';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { MDBAccordion, MDBAccordionItem, MDBBtn } from 'mdb-react-ui-kit';
import {FiSmartphone} from 'react-icons/fi';
import Slider from '@mui/material/Slider';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Smartphone from '../config/Smartphone.png';


function Configuration({
    templateList,
    config,
    setConfig
}) {
    const navigate = useNavigate();
    const {id} = useParams();
    const [price, setPrice] = useState(0);
    const [cpu, setCPU] = useState([
        {
            name:"Intel i9",
            performance: "high",
            price: 400
        },
        {
            name:"AMD Ryzen5",
            performance: "high",
            price: 300
        },
        {
            name:"Intel i5",
            performance: "middle",
            price: 200
        }
    ]);
    const [battery, setBattery] = useState([
        {
            name:"XYZ",
            performance: "high",
            price: 100,
            checked:false
        },
        {
            name:"ABC",
            performance: "middle",
            price: 80,
            checked:false

        },
        {
            name:"LMN",
            performance: "middle",
            price: 50,
            checked:true

        }
    ]);
    const [options, setOptions] = useState([
        {
            id:0,
            name:"Case",
            required:true,
            children:[
                {
                    childId:0,
                    childName:"classic",
                    component:
                        <MDBBtn 
                        name={'case_50'}
                        value={"classic"}
                        
                        onClick={(e)=>setData(e)} 
                        outline 
                        color="primary" 
                        className="btn mr-2">
                            <FiSmartphone className="unclickable"/>
                            <p className="unclickable">classic</p>
                        </MDBBtn>
                },
                {
                    childId:1,
                    childName:"foldable",
                    component:
                        <MDBBtn 
                        name='case_200'
                        value={"foldable"}

                        onClick={(e)=>setData(e)} outline color="primary" className="btn mr-2">
                            <FiSmartphone className="unclickable" />
                            <p className="unclickable">foldable</p>
                        </MDBBtn>
                },
                {
                    childId:0,
                    childName:"keyboard",
                    component:
                        <MDBBtn 
                        name='case_100'
                        value={"keyboard"}

                        onClick={(e)=>setData(e)} outline color="primary" className="btn mr-2">
                            <FiSmartphone className="unclickable"/>
                            <p className="unclickable">keyboard</p>
                        </MDBBtn>
                }
            ]
        },
        {
            id:1,
            name:"Size",
            required:true,

            children:[
                {
                    childId:0,
                    childName:"sizeslider",
                    component:
                        <Slider
                            aria-label="size"
                            defaultValue={30}
                            
                            valueLabelDisplay="auto"
                            name="size"
                            step={5}
                            marks
                            min={25}
                            max={50}
                            onChange={(e)=>{
                                setData(e)}}
                            />
                    
                }
            ]
        },
        {
            id:2,
            name:"CPU",
            required:true,

            children:[
                {
                    childId:0,
                    childName:"cpu",
                    component:
                    <>
                    <MDBTable>
                        <MDBTableHead>
                            <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Performance</th>
                            <th scope='col'>Price</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            
                                {cpu.map((element)=>{
                                    return(
                                        <tr>
                                        <th scope='row'>
                                        <Form.Check 
                                        name={'cpu'+"_"+element.price}
                                        onClick={(e)=>setData(e)}
                                        value={element.name}

                                        />
                                            </th>
                                        <td>{element.name}</td>
                                        <td>{element.performance}</td>
                                        <td>{element.price}</td>
                                        </tr>

                                    )
                                })}
                            
                        </MDBTableBody>
                        </MDBTable>
                        <MDBBtn name="cpu" color='info' onClick={(e)=>setData(e)}>
                            Select
                        </MDBBtn>
                    </>

                        
                }
            ]
        },
        {
            id:3,
            name:"Battery",
            required:true,

            children:[
                {
                    childId:0,
                    childName:"batterylife",
                    component:
                    <>
                    <MDBTable>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Performance</th>
                        <th scope='col'>Price</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                            {battery.map((element)=>{
                                return(
                                    <tr>
                                    <th scope='row'>
                                        <Form.Check
                                        checked={element.checked}
                                        id={"battery_"+element.name}
                                        name={'battery'+"_"+element.price}
                                        onClick={(e)=>{
                                            battery.map((el,id)=>{
                                                if(e.target.id !== "battery_"+el.name){
                                                    var newBattery = battery;
                                                    newBattery[id].checked = false;
                                                    setBattery(prev=>(newBattery));
                                                }else{
                                                    var newBattery = battery;
                                                    newBattery[id].checked = true;
                                                    setBattery(prev=>(newBattery));
                                                }
                                                
                                            })
                                            setData(e);
                                        }}
                                        value={element.name}
                                        
                                        />
                                        </th>
                                    <td>{element.name}</td>
                                    <td>{element.performance}</td>
                                    <td>{element.price}</td>
                                    </tr>

                                )
                            })}
                        
                    </MDBTableBody>
                    </MDBTable>
                    <MDBBtn name="battery" color='info' onClick={(e)=>setData(e)}>
                        Select
                    </MDBBtn>
                    </>
                },
                
            ]
        },
        {
            id:4,
            name:"Item 4",
            required:false,

            children:[
                {childId:0,
                childName:"batterylife",
                component:<></>} 
            ]
        },
        {
            id:5,
            name:"Item 5",
            required:false,

            children:[
                {childId:0,
                childName:"batterylife",
                component:<></>} 
            ]
        },
        {
            id:6,
            name:"Item 6",
            required:false,

            children:[
                {childId:0,
                childName:"batterylife",
                component:<></>} 
            ]
        }
    ]);
    const setData = (e) => {
        console.log(e.target)
        var data = e.target.name.split("_");
        console.log(data)
        setConfig(prev=>({
            ...prev,
            [data[0]]: ""+e.target.value
        }))
        if(data.length > 1){
            
            if(config[data[0]]!==null){
                setPrice(prev=>(prev + parseInt(data[1])));
            }else{
                setPrice(prev=>(prev + parseInt(data[1])));

            }


        }
    }

  return (
    <>
    
    <div className="overlay-main" style={{display:"flex", justifyContent:"center",position:"absolute" ,height:"90vh", width:"50vw"}}>
            <img src={Smartphone} style={{position:"relative",scale:String(0.02*config.size), zIndex:"200"}}></img>
    </div>
    <div className="panel">
        
        <Row style={{height:"90vh"}}>
            <Col md={6} style={{
                backgroundColor:"#ebfada", 
                padding:"50px 50px 50px 50px"}}>
            <div style={{width: `${7*config.size}px`,height: `${7*config.size}px`, left:`100px`, top:`40%`, position:"absolute"}}>
            <MDBTable as={"div"}>
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
                    </div>
                
                
                

                
            </Col>
            <Col md={6} style={{backgroundColor:"lightgrey", padding:"50px 50px 50px 50px", height:"90vh", overflowY:"scroll"}}>
                <h2>
                    {templateList[id].name}
                </h2>

                <MDBAccordion initialActive={0}>

                {
                    options.map((element)=>{
                        return(
                            <MDBAccordionItem collapseId={element.id} headerTitle={element.name + (element.required ? " *" : "") }>
                                <Container>
                                {element.children.map((child)=>{
                                    return(
                                        <>
                                        {child.component}
                                        </>

                                    )
                                })
                                }
                                </Container>
                            </MDBAccordionItem>
                        )

                    })
                }
                </MDBAccordion>

                <Alert className="price" variant='danger'>
                    {price}
                </Alert>

                <MDBBtn color="success" className='cart' onClick={()=>(navigate("/cart"))}>
                    Add to Cart
                </MDBBtn>

                
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Configuration
