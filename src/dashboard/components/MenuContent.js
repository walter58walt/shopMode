// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Stack from '@mui/material/Stack';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
// import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
// import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
// import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
// import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
// import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import MessageIcon from '@mui/icons-material/Message';
// import InventoryIcon from '@mui/icons-material/Inventory';
// import HistoryIcon from '@mui/icons-material/History';
// import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
// import { useNavigate } from 'react-router-dom'; 

// const mainListItems = [
//   { text: 'Acceuil', icon: <HomeRoundedIcon />, path: '/' },
//   { text: 'Gestion des Produits', icon: <InventoryIcon />, path: '/produit' },
//   { text: 'Commandes', icon: <ShoppingCartIcon />, path: '/commande' },
//   { text: 'Messages', icon: <MessageIcon />, path: '/message' },
//   { text: 'Historique', icon: <HistoryIcon />, path: '/historique' },
//   { text: 'Clients', icon: <PeopleRoundedIcon />, path: '/clients' },
//   { text: 'Photos', icon:<InsertPhotoIcon />}
// ];

// const secondaryListItems = [
//   { text: 'Settings', icon: <SettingsRoundedIcon />, path: '/settings' },
//   { text: 'About', icon: <InfoRoundedIcon />, path: '/about' }, 
//   { text: 'Feedback', icon: <HelpRoundedIcon />, path: '/feedback' }, 
// ];

// export default function MenuContent() {
//   const navigate = useNavigate(); // useNavigate hook

//   const handleMenuItemClick = (path) => {
//     navigate(path); // Navigate to the clicked item's path
//   };

//   return (
//     <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
//       <List dense>
//         {mainListItems.map((item, index) => (
//           <ListItem key={index} disablePadding sx={{ display: 'block' }}>
//             <ListItemButton onClick={() => handleMenuItemClick(item.path)}>
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>

//       <List dense>
//         {secondaryListItems.map((item, index) => (
//           <ListItem key={index} disablePadding sx={{ display: 'block' }}>
//             <ListItemButton onClick={() => handleMenuItemClick(item.path)}>
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Stack>
//   );
// }

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse'; // Import the Collapse component
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import InventoryIcon from '@mui/icons-material/Inventory';
import HistoryIcon from '@mui/icons-material/History';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CategoryIcon from '@mui/icons-material/Category'; // For categories sub-menu
import ExpandLess from '@mui/icons-material/ExpandLess'; // Arrow up icon for collapse
import ExpandMore from '@mui/icons-material/ExpandMore'; // Arrow down icon for expand
import { useNavigate } from 'react-router-dom'; 

const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon />, path: '/' },
  { text: 'Orders', icon: <ShoppingCartIcon />, path: '/orders' },
  { text: 'Messages', icon: <MessageIcon />, path: '/message' },
  { text: 'History', icon: <HistoryIcon />, path: '/history' },
  { text: 'Customers', icon: <PeopleRoundedIcon />, path: '/customers' },
  { text: 'Photos', icon:<InsertPhotoIcon /> }
];

const secondaryListItems = [
  { text: 'Settings', icon: <SettingsRoundedIcon />, path: '/settings' },
  { text: 'About', icon: <InfoRoundedIcon />, path: '/about' }, 
  { text: 'Feedback', icon: <HelpRoundedIcon />, path: '/feedback' }, 
];

export default function MenuContent() {
  const navigate = useNavigate(); // useNavigate hook
  const [openProductsMenu, setOpenProductsMenu] = React.useState(false); // Manage collapse state

  const handleMenuItemClick = (path) => {
    navigate(path); // Navigate to the clicked item's path
  };

  const handleProductsMenuToggle = () => {
    setOpenProductsMenu(!openProductsMenu); // Toggle open/close state
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={() => handleMenuItemClick(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Gestion des Produits with sub-menu */}
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton onClick={handleProductsMenuToggle}>
            <ListItemIcon>
              <InventoryIcon />
            </ListItemIcon>
            <ListItemText primary="Catalog" />
            {openProductsMenu ? <ExpandLess /> : <ExpandMore />} {/* Show arrow up/down */}
          </ListItemButton>
          
          {/* Sub-menu for Gestion des Produits */}
          <Collapse in={openProductsMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={() => handleMenuItemClick('/products')}>
                <ListItemIcon>
                  <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }} onClick={() => handleMenuItemClick('/categories')}>
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Categories" />
              </ListItemButton>
            </List>
          </Collapse>
        </ListItem>
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={() => handleMenuItemClick(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
