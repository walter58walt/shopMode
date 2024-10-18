import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ariary {product.price}
        </Typography>
        <Button variant="contained" component={Link} to={`/product/${product.id}`}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default Product;
