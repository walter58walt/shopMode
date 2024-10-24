import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

// Simuler une liste de commandes avec des images
const orders = [
  { id: 1, customer: 'John Doe', total: 250.0, status: 'Delivered', imageUrl: 'https://via.placeholder.com/150', product: 'Laptop' },
  { id: 2, customer: 'Jane Smith', total: 150.5, status: 'Pending', imageUrl: 'https://via.placeholder.com/150', product: 'Headphones' },
  { id: 3, customer: 'Mike Johnson', total: 320.75, status: 'Shipped', imageUrl: 'https://via.placeholder.com/150', product: 'Smartphone' },
];

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false); // État pour savoir si l'image est chargée
  const [status, setStatus] = useState(''); // État pour le statut sélectionné

  // Fonction pour afficher les détails de la commande
  const handleViewDetails = (order) => {
    setSelectedOrder(order); // Met à jour l'état avec la commande sélectionnée
    setImageLoaded(false); // Réinitialiser l'état d'image lorsque les détails changent
    setStatus(order.status); // Initialiser le statut avec le statut de la commande
  };

  // Gérer le changement de statut
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  // Fonction de suppression de la commande (simulée)
  const handleCancelOrder = () => {
    alert(`Order ${selectedOrder.id} has been cancelled.`);
    setSelectedOrder(null); // Retourner à la liste après l'annulation
  };

  // Fonction pour modifier la commande (simulée)
  const handleModifyOrder = () => {
    alert(`Modifying order ${selectedOrder.id}.`);
  };

  // Si une commande est sélectionnée, afficher ses détails
  if (selectedOrder) {
    return (
      <Paper style={{ padding: 16 }}>
        <Typography variant="h5">Order Details</Typography>
        <Typography><strong>Order ID:</strong> {selectedOrder.id}</Typography>
        <Typography><strong>Customer:</strong> {selectedOrder.customer}</Typography>
        <Typography><strong>Total:</strong> ${selectedOrder.total.toFixed(2)}</Typography>
        <Typography><strong>Status:</strong> {selectedOrder.status}</Typography>
        <Typography><strong>Product:</strong> {selectedOrder.product}</Typography>

        {/* Cadre pour l'image, soit un Skeleton avant chargement soit l'image réelle */}
        <Box sx={{ width: '100%', maxWidth: 200, height: 200, marginTop: 2, position: 'relative' }}>
          {!imageLoaded && <Skeleton variant="rectangular" width="100%" height="100%" />}
          <img
            src={selectedOrder.imageUrl}
            alt={selectedOrder.product}
            style={{ display: imageLoaded ? 'block' : 'none', maxWidth: '100%', height: 'auto', position: 'absolute', top: 0, left: 0 }}
            onLoad={() => setImageLoaded(true)} // Marque l'image comme chargée lorsqu'elle est prête
          />
        </Box>

        {/* Sélecteur de statut */}
        <FormControl fullWidth style={{ marginTop: 16 }}>
          <InputLabel id="status-label">Select Status</InputLabel>
          <Select
            labelId="status-label"
            value={status}
            label="Select Status"
            onChange={handleStatusChange}
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Shipped">Shipped</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </Select>
        </FormControl>

        {/* Boutons */}
        <Box style={{ marginTop: 16, display: 'flex', gap: 8 }}>
          <Button variant="contained" color="secondary" onClick={handleCancelOrder}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleModifyOrder}>
            Modify
          </Button>
          <Button variant="contained" color="primary" onClick={() => setSelectedOrder(null)}>
            Back to Orders
          </Button>
        </Box>
      </Paper>
    );
  }

  // Afficher la liste des commandes
  return (
    <TableContainer component={Paper} style={{ marginTop: 16 }}>
      {/* <Typography variant="h4" gutterBottom style={{ padding: 16 }}>
        Orders
      </Typography> */}
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Order ID</strong></TableCell>
            <TableCell><strong>Customer</strong></TableCell>
            <TableCell><strong>Total</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
            <TableCell><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>${order.total.toFixed(2)}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleViewDetails(order)}>
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
