import React from 'react'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
const Circleimages = (props) => {
    const {image} = props
  return (
    <div>
      
        
        <Col xs={6} md={4}>
          <Image src={image} roundedCircle />
        </Col>
        
      
    </div>
  )
}

export default Circleimages
