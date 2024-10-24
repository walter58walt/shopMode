import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Button, TextField, IconButton, Box, Typography, Drawer
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ImportExportIcon from '@mui/icons-material/ImportExport';

const customersData = [
  { id: '474F', joiningDate: 'Oct 23, 2024', name: 'Erica', email: 'erica@gmail.com', phone: '034896344' },
  { id: '9BF6', joiningDate: 'Oct 23, 2024', name: 'Florant', email: 'florant@gmail.com', phone: '0343638091' },
  { id: '64C4', joiningDate: 'Oct 23, 2024', name: 'Katy', email: 'katy@gmail.com', phone: '0323638091' },
  { id: '81F6', joiningDate: 'Oct 22, 2024', name: 'Richard', email: 'richard@gmail.com', phone: '0338963442' },
  { id: '81F5', joiningDate: 'Oct 22, 2024', name: 'Landry', email: 'landry@gmail.com', phone: '0372005488' },
  { id: '81F4', joiningDate: 'Oct 22, 2024', name: 'Thomas', email: 'thomas@gmail.com', phone: '0383638091' },
];

const Customer = () => {
  const [search, setSearch] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState(customersData);
  const [selectedCustomer, setSelectedCustomer] = useState(null); // To store the customer being edited
  const [drawerOpen, setDrawerOpen] = useState(false); // To control the display of the drawer

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredCustomers(
      customersData.filter(customer =>
        customer.name.toLowerCase().includes(value) ||
        customer.email.toLowerCase().includes(value) ||
        customer.phone.includes(value)
      )
    );
  };

  const clearSearch = () => {
    setSearch('');
    setFilteredCustomers(customersData);
  };

  const handleEditClick = (customer) => {
    setSelectedCustomer(customer); // Set the selected customer
    setDrawerOpen(true); // Open the drawer with the form
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false); // Close the drawer
    setSelectedCustomer(null); // Clear the selected customer
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedCustomer({ ...selectedCustomer, [name]: value }); // Update the customer details in the form
  };

  return (
    <Box sx={{ p: 3, display: 'flex' }}>
      {/* Main Table Section */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" gutterBottom>Customers</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box>
            <Button variant="contained" startIcon={<ImportExportIcon />}>Export</Button>
            <Button variant="contained" sx={{ ml: 2 }} startIcon={<ImportExportIcon />}>Import</Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search by name/email/phone"
              value={search}
              onChange={handleSearch}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={clearSearch}>
                    {search ? <ClearIcon /> : <SearchIcon />}
                  </IconButton>
                ),
              }}
            />
          </Box>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Joining Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.id}</TableCell>
                  <TableCell>{customer.joiningDate}</TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>
                    <IconButton>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton onClick={() => handleEditClick(customer)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Edit Form Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{ sx: { width: 300 } }}
      >
        {selectedCustomer && (
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Edit Customer</Typography>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={selectedCustomer.name}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={selectedCustomer.email}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone"
              name="phone"
              value={selectedCustomer.phone}
              onChange={handleInputChange}
            />
            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleDrawerClose}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" sx={{ mt: 2 }} onClick={handleDrawerClose}>
              Cancel
            </Button>
          </Box>
        )}
      </Drawer>
    </Box>
  );
};

export default Customer;
