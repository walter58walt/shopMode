import React, { useState } from 'react';
import {
  List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider,
  Typography, Button, TextField, Box, Grid, useTheme
} from '@mui/material';

// Exemple de données de messages
const messagesData = [
  {
    id: 1,
    client: 'Jean Dupont',
    avatar: 'https://via.placeholder.com/150',
    lastMessage: 'Merci pour votre réponse !',
    conversation: [
      { sender: 'client', message: 'Bonjour, j’ai une question concernant ma commande.' },
      { sender: 'admin', message: 'Bonjour, comment puis-je vous aider ?' },
      { sender: 'client', message: 'Quand vais-je recevoir ma commande ?' },
      { sender: 'admin', message: 'Votre commande arrivera d’ici 3 jours.' },
      { sender: 'client', message: 'Merci pour votre réponse !' }
    ]
  },
  {
    id: 2,
    client: 'Marie Lefevre',
    avatar: 'https://via.placeholder.com/150',
    lastMessage: 'Pouvez-vous vérifier cela ?',
    conversation: [
      { sender: 'client', message: 'Bonjour, j’ai reçu un mauvais produit.' },
      { sender: 'admin', message: 'Désolé pour l’erreur, pouvez-vous envoyer une photo ?' },
      { sender: 'client', message: 'Voici la photo.' },
      { sender: 'admin', message: 'Merci, nous allons corriger cela.' },
      { sender: 'client', message: 'Pouvez-vous vérifier cela ?' }
    ]
  }
];

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [reply, setReply] = useState('');
  const theme = useTheme(); // Récupérer le thème actuel (clair ou sombre)

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleSendReply = () => {
    if (selectedConversation && reply) {
      const newMessage = { sender: 'admin', message: reply };
      setSelectedConversation({
        ...selectedConversation,
        conversation: [...selectedConversation.conversation, newMessage]
      });
      setReply('');  // Réinitialiser le champ de réponse
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* Liste des clients et messages récents */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom>
            Messages clients
          </Typography>
          <List>
            {messagesData.map((conversation) => (
              <React.Fragment key={conversation.id}>
                <ListItem button onClick={() => handleSelectConversation(conversation)}>
                  <ListItemAvatar>
                    <Avatar src={conversation.avatar} alt={conversation.client} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={conversation.client}
                    secondary={conversation.lastMessage}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
          </List>
        </Grid>

        {/* Détails de la conversation */}
        <Grid item xs={12} md={8}>
          {selectedConversation ? (
            <Box>
              <Typography variant="h6" gutterBottom>
                Conversation avec {selectedConversation.client}
              </Typography>
              <Box
                sx={{
                  height: '300px',
                  overflowY: 'auto',
                  padding: '10px',
                  border: '1px solid',
                  borderColor: theme.palette.divider,
                  marginBottom: '20px',
                  backgroundColor: theme.palette.background.paper, // Fond selon le thème
                  color: theme.palette.text.primary // Texte selon le thème
                }}
              >
                {selectedConversation.conversation.map((msg, index) => (
                  <Box
                    key={index}
                    sx={{
                      marginBottom: '10px',
                      textAlign: msg.sender === 'admin' ? 'right' : 'left',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        backgroundColor: msg.sender === 'admin'
                          ? (theme.palette.mode === 'dark' ? '#004d40' : '#e0f7fa') // Couleur en mode nuit
                          : (theme.palette.mode === 'dark' ? '#424242' : '#f1f1f1'), // Couleur en mode clair
                        display: 'inline-block',
                        padding: '10px',
                        borderRadius: '10px',
                        color: theme.palette.text.primary // Adapter la couleur du texte
                      }}
                    >
                      {msg.message}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Répondre au message */}
              <TextField
                label="Votre réponse"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={reply}
                onChange={handleReplyChange}
                sx={{
                  backgroundColor: theme.palette.background.paper, // Fond du champ de texte
                  color: theme.palette.text.primary
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: '10px' }}
                onClick={handleSendReply}
              >
                Envoyer
              </Button>
            </Box>
          ) : (
            <Typography variant="h6" gutterBottom>
              Sélectionnez une conversation pour voir les détails
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
