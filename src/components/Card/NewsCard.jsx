import React from 'react'
import Card from 'react-bootstrap/Card';

const NewsCard = (props) => {
    const {images, title, description} = props
  return (
    <div>
      <Card style={{ width: '18em' }}>
      <Card.Img variant="top" src={images} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Link href="#">{title}</Card.Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default NewsCard
