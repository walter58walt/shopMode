import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  TextField,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Pagination,
  InputAdornment,
} from '@mui/material';
import { Search, Download, Print, Visibility } from '@mui/icons-material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

// Sample orders data
const initialOrders = [
  { invoice: 11353, date: '24 Oct, 2024 3:12 PM', customer: 'Lura Moore', method: 'Cash', amount: 152.34, status: 'Cancel' },
  { invoice: 11331, date: '24 Oct, 2024 3:10 PM', customer: ' Hassan', method: 'Cash', amount: 568.03, status: 'Pending' },
  { invoice: 11296, date: '24 Oct, 2024 12:19 PM', customer: ' Francine', method: 'Cash', amount: 833.04, status: 'Processing' },
  { invoice: 11352, date: '24 Oct, 2024 3:51 AM', customer: 'Lura ', method: 'Cash', amount: 486.68, status: 'Pending' },
  { invoice: 11349, date: '24 Oct, 2024 3:24 AM', customer: 'Carpenter', method: 'Cash', amount: 22118.88, status: 'Pending' },
  { invoice: 11350, date: '23 Oct, 2024 6:17 PM', customer: 'Justine ', method: 'Card', amount: 640.00, status: 'Cancel' },
  { invoice: 10001, date: '23 Oct, 2024 5:53 PM', customer: 'Salah', method: 'Cash', amount: 1181.07, status: 'Processing' },
];

export default function Commande() {
  const [orders, setOrders] = useState(initialOrders);
  const [filter, setFilter] = useState({ customerName: '', status: '', method: '', startDate: null, endDate: null });

  // Handler for updating filters
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleDateChange = (name, value) => {
    setFilter({ ...filter, [name]: value });
  };

  const handleResetFilters = () => {
    setFilter({ customerName: '', status: '', method: '', startDate: null, endDate: null });
  };

  const filteredOrders = orders.filter((order) => {
    const matchesCustomer = filter.customerName === '' || order.customer.toLowerCase().includes(filter.customerName.toLowerCase());
    const matchesStatus = filter.status === '' || order.status === filter.status;
    const matchesMethod = filter.method === '' || order.method === filter.method;
    const matchesStartDate = !filter.startDate || dayjs(order.date).isAfter(filter.startDate);
    const matchesEndDate = !filter.endDate || dayjs(order.date).isBefore(filter.endDate);

    return matchesCustomer && matchesStatus && matchesMethod && matchesStartDate && matchesEndDate;
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ padding: 2 }}>
        {/* Header Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <h2>Orders</h2>
          <Button variant="contained" color="success" startIcon={<Download />}>
            Download All Orders
          </Button>
        </Box>

        {/* Filter Section */}
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="Search by Customer Name"
            name="customerName"
            value={filter.customerName}
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
            name="status"
            value={filter.status}
            onChange={handleFilterChange}
            displayEmpty
            size="small"
            variant="outlined"
          >
            <MenuItem value="">Status</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Processing">Processing</MenuItem>
            <MenuItem value="Cancel">Cancel</MenuItem>
          </Select>
          <Select
            name="method"
            value={filter.method}
            onChange={handleFilterChange}
            displayEmpty
            size="small"
            variant="outlined"
          >
            <MenuItem value="">Method</MenuItem>
            <MenuItem value="Cash">Cash</MenuItem>
            <MenuItem value="Card">Card</MenuItem>
          </Select>
          <DatePicker
            label="Start Date"
            value={filter.startDate}
            onChange={(date) => handleDateChange('startDate', date)}
            renderInput={(params) => <TextField {...params} size="small" />}
          />
          <DatePicker
            label="End Date"
            value={filter.endDate}
            onChange={(date) => handleDateChange('endDate', date)}
            renderInput={(params) => <TextField {...params} size="small" />}
          />
          <Button variant="contained" color="success">Filter</Button>
          <Button variant="outlined" onClick={handleResetFilters}>Reset</Button>
        </Box>

        {/* Table Section */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Invoice No</TableCell>
                <TableCell>Order Time</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Method</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
                <TableCell>Invoice</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.invoice}>
                  <TableCell>{order.invoice}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.method}</TableCell>
                  <TableCell>{`$${order.amount.toFixed(2)}`}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      color={
                        order.status === 'Pending' ? 'warning' :
                        order.status === 'Processing' ? 'info' :
                        'error'
                      }
                    >
                      {order.status}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Select size="small" value={order.status}>
                      <MenuItem value="Cancel">Cancel</MenuItem>
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Processing">Processing</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <IconButton><Print /></IconButton>
                    <IconButton><Visibility /></IconButton>
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
    </LocalizationProvider>
  );
}
