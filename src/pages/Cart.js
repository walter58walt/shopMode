import React from 'react';
import { Typography, Container } from '@mui/material';

function Cart() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Shopping Cart
      </Typography>
      <Typography>
        Add items to it from the product listings.
      </Typography>
    </Container>
  );
}

export default Cart;
