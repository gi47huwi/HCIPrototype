import '../css/App.css';
import React, { useState } from 'react';
import 'swiper/css';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import Smartphone from '../config/Smartphone.png';

function TemplateSelection({
    templateList
}) {
    const navigate = useNavigate()

    



  return (
    <div className="main-panel" >
    <div className="overlay">
        <img src={Smartphone}></img>
    </div>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      modules={[Navigation]} 
      navigation={true}
      
    >
    {
        templateList.map((element)=>{
            return(
                <SwiperSlide key={element.id} >
                    {element.id!==undefined?
                    <Card 
                    style={{width:"300px", padding:"10px 10px 10px 10px"}}
                    onClick={(e)=>(navigate(`/configurator/template=${element.id}`))}
                    >
                        <Card.Title style={{textTransform:"uppercase", marginLeft:"20px"}}>
                            {element.name}
                        </Card.Title>
                        {element.item1&&
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item>
                                    {element.item1}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {element.item2}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {element.item3}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {element.item4}
                                </ListGroup.Item>
                            </ListGroup>

                        </Card.Body>
                        }
                    </Card>
                    :<Card style={{width:"300px", backgroundColor:"#ebfada", boxShadow:"none"}}>
                        <Card.Title style={{textTransform:"uppercase", marginLeft:"20px"}}>
                            {element.name}
                        </Card.Title>
                        {element.item1&&
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item>
                                    {element.item1}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {element.item2}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {element.item3}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {element.item4}
                                </ListGroup.Item>
                            </ListGroup>

                        </Card.Body>
                        }
                    </Card>
                    }
                </SwiperSlide>
                    
            )
        })
    }
    </Swiper>
    </div>
  )
}

export default TemplateSelection