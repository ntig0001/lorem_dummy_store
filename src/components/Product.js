import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({item, onPurchased}) => {
  return (
      <Card className='product-card'>
        <Card.Img variant="top" style={{height: '200px', padding: '5px'}} src={item.image} />
        <Card.Body>
        <Card.Title style={{fontSize: '15px', maxHeight: '20px', paddingBottom: '5px'}}>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Card.Subtitle className="mb-2" as="h5">${item.price}</Card.Subtitle>
          <Button variant="primary" onClick={() => onPurchased(item)}>Add to Cart</Button>
        </Card.Body>
      </Card>
  )
}

export default Product;