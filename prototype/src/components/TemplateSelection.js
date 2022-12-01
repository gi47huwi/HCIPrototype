import '../css/App.css';
import React, { useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

function TemplateSelection({
    templateList
}) {
    const navigate = useNavigate()

    



  return (
    <div className="main-panel">
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
    >
    {
        templateList.map((element)=>{
            return(
                <SwiperSlide key={element.id}>
                    <Card 
                    onClick={(e)=>(navigate(`/configurator/template=${element.id}`))}
                    >
                        <Card.Title style={{textTransform:"uppercase"}}>
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
                </SwiperSlide>
                    
            )
        })
    }
    </Swiper>
    </div>
  )
}

export default TemplateSelection