// MessagesPage.js
import React, { useState } from 'react';
import { Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const messages = [
  { id: 1, sender: 'Alice', content: 'Bonjour, comment ça va ?', status: 'unread' },
  { id: 2, sender: 'Bob', content: 'Réunion demain à 10h.', status: 'unread' },
  { id: 3, sender: 'Charlie', content: 'Voici les documents demandés.', status: 'read' },
  { id: 4, sender: 'David', content: 'À quelle heure es-tu disponible ?', status: 'unread' },
];

export default function MessagesPage() {
  const [messageList, setMessageList] = useState(messages);

  const handleMarkAsRead = (id) => {
    const updatedMessages = messageList.map((message) =>
      message.id === id ? { ...message, status: 'read' } : message
    );
    setMessageList(updatedMessages);
  };

  return (
    <Grid container spacing={3}>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Expéditeur</strong></TableCell>
              <TableCell><strong>Message</strong></TableCell>
              <TableCell><strong>Statut</strong></TableCell>
              <TableCell><strong>Action</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messageList.map((message) => (
              <TableRow key={message.id}>
                <TableCell>{message.sender}</TableCell>
                <TableCell>{message.content}</TableCell>
                <TableCell>
                  <Typography variant="body2" style={{ color: message.status === 'unread' ? 'red' : 'green' }}>
                    {message.status === 'unread' ? 'Non Lu' : 'Lu'}
                  </Typography>
                </TableCell>
                <TableCell>
                  {message.status === 'unread' && (
                    <Button variant="contained" color="primary" onClick={() => handleMarkAsRead(message.id)}>
                      Marquer comme lu
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
