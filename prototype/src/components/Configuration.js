import '../css/App.css';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBAccordion, MDBAccordionItem, MDBBtn } from 'mdb-react-ui-kit';

function Configuration({
    templateList
}) {
    const {id} = useParams();

    const [options, setOptions] = useState([
        {
            id:0,
            name:"Case",
            required:true,
            children:[
                {
                    childId:0,
                    childName:"classic"
                },
                {
                    childId:1,
                    childName:"foldable"
                },
                {
                    childId:0,
                    childName:"keyboard"
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
                    childName:"classic"
                },
                {
                    childId:1,
                    childName:"foldable"
                },
                {
                    childId:0,
                    childName:"keyboard"
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
                    childName:"classic"
                },
                {
                    childId:1,
                    childName:"foldable"
                },
                {
                    childId:0,
                    childName:"keyboard"
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
                    childName:"classic"
                },
                {
                    childId:1,
                    childName:"foldable"
                },
                {
                    childId:0,
                    childName:"keyboard"
                }
            ]
        }
    ])

  return (
    <div className="panel">
        <Row style={{height:"90vh"}}>
            <Col md={6} style={{backgroundColor:"grey"}}>
                
            </Col>
            <Col md={6} style={{backgroundColor:"lightgrey"}}>
                <h2>
                    {templateList[id].name}
                </h2>

                <MDBAccordion initialActive={0}>

                {
                    options.map((element)=>{
                        return(
                            <MDBAccordionItem collapseId={element.id} headerTitle={element.name + (element.required ? " *" : "") }>
                                {element.children&&
                                element.children.map((child)=>{
                                    return(
                                        <MDBBtn>
                                            {child.childName}
                                        </MDBBtn>

                                    )
                                })
                                }
                            </MDBAccordionItem>
                        )

                    })
                }
                </MDBAccordion>

                
            </Col>
        </Row>
    </div>
  )
}

export default Configuration
