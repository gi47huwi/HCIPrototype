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
            <Col md={6} style={{backgroundColor:"lightgrey"}}>
                
            </Col>
            <Col md={6} style={{backgroundColor:"grey"}}>
                <h2>
                    {templateList[id].name}
                </h2>

                <MDBAccordion initialActive={1}>

                {
                    options.map((element)=>{
                        return(
                            <MDBAccordionItem collapseId={element.id} headerTitle={element.name}>
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
