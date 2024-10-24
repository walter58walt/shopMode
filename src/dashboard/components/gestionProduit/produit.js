import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Select,
  MenuItem,
  Paper,
  Pagination,
  InputAdornment,
  Stack,
} from '@mui/material';
import { Delete, Edit, Search, Visibility, Add } from '@mui/icons-material';

const productsData = [
  { id: 1, name: 'Robe Émeraude', category: 'Robe', price: 5000, salePrice: 4000, stock: 50, status: 'Selling', published: true },
  { id: 2, name: 'Chapeau de Soleil', category: 'Chapeau', price: 6600, salePrice: 5000, stock: 120, status: 'Selling', published: true },
  { id: 3, name: 'Veste ', category: 'Vêtement', price: 7000, salePrice: 6000, stock: 70, status: 'Selling', published: true },
  { id: 4, name: 'Chaussures ', category: 'Chaussure', price: 6000, salePrice: 6000, stock: 30, status: 'Selling', published: true },
  { id: 5, name: 'Robe de Soirée', category: 'Robe', price: 4000, salePrice: 4000, stock: 25, status: 'Selling', published: true },
];


export default function Produit() {
  const [filter, setFilter] = useState({ name: '', category: '', price: '' });
  const [products, setProducts] = useState(productsData);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleResetFilter = () => {
    setFilter({ name: '', category: '', price: '' });
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <h2>Products</h2>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<Search />}>Export</Button>
          <Button variant="outlined" startIcon={<Search />}>Import</Button>
          <Button variant="contained" color="success" startIcon={<Add />}>Add Product</Button>
          <Button variant="outlined" color="error" startIcon={<Delete />}>Delete</Button>
        </Stack>
      </Box>

      {/* Filter Section */}
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="Search Product"
          name="name"
          value={filter.name}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Select
          label="Category"
          name="category"
          value={filter.category}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
          displayEmpty
        >
          <MenuItem value="">Category</MenuItem>
          <MenuItem value="Water">Robe</MenuItem>
        </Select>
        <Select
          label="Price"
          name="price"
          value={filter.price}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
          displayEmpty
        >
          <MenuItem value="">Price</MenuItem>
          <MenuItem value="asc">Low to High</MenuItem>
          <MenuItem value="desc">High to Low</MenuItem>
        </Select>
        <Button variant="contained" color="success">Filter</Button>
        <Button variant="outlined" onClick={handleResetFilter}>Reset</Button>
      </Box>

      {/* Table Section */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox"></TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Sale Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>View</TableCell>
              <TableCell>Published</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell padding="checkbox">
                  <input type="checkbox" />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{`Ar${product.price.toFixed(2)}`}</TableCell>
                <TableCell>{`Ar${product.salePrice.toFixed(2)}`}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <Button variant="contained" size="small" color={product.status === 'Selling' ? 'success' : 'error'}>
                    {product.status}
                  </Button>
                </TableCell>
                <TableCell>
                  <IconButton>
                    <Visibility />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <Switch checked={product.published} />
                </TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination count={1} />
      </Box>
    </Box>
  );
}
