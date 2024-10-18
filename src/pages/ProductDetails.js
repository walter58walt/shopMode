import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, Container } from '@mui/material';

const products = [
  { id: 1, name: 'T-shirt', price: 25, description: 'High-quality cotton t-shirt', image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Jeans', price: 40, description: 'Comfortable denim jeans', image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Sneakers', price: 60, description: 'Stylish sneakers', image: 'https://via.placeholder.com/200' }
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <Container>
      <img src={product.image} alt={product.name} style={{ width: '100%', maxWidth: '400px' }} />
      <Typography variant="h4" component="h1" gutterBottom>{product.name}</Typography>
      <Typography variant="h5">Ariary {product.price}</Typography>
      <Typography variant="body1">{product.description}</Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>Add to Cart the product</Button>
    </Container>
  );
}

export default ProductDetails;
