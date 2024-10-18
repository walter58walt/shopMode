import React from 'react';
import { Grid, Container } from '@mui/material';
import Product from '../components/Product';

const products = [
  { id: 1, name: 'T-shirt', price: 25, image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Jeans', price: 40, image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Sneakers', price: 60, image: 'https://via.placeholder.com/200' }
];

function Home() {
  return (
    <Container>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
