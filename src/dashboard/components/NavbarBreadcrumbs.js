// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
// import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

// const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
//   margin: theme.spacing(1, 0),
//   [`& .${breadcrumbsClasses.separator}`]: {
//     color: (theme.vars || theme).palette.action.disabled,
//     margin: 1,
//   },
//   [`& .${breadcrumbsClasses.ol}`]: {
//     alignItems: 'center',
//   },
// }));

// export default function NavbarBreadcrumbs() {
//   return (
//     <StyledBreadcrumbs
//       aria-label="breadcrumb"
//       separator={<NavigateNextRoundedIcon fontSize="small" />}
//     >
//       <Typography variant="body1">Dashboard</Typography>
//       <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
//         Home
//       </Typography>
//     </StyledBreadcrumbs>
//   );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { Link, useLocation } from 'react-router-dom';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));

export default function NavbarBreadcrumbs() {
  const location = useLocation(); 
  const pathnames = location.pathname.split('/').filter((x) => x); // Divise le chemin en segments

  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      {/* Toujours afficher le Dashboard comme premier élément */}
      <Typography variant="body1">
        <Link to="/">Dashboard</Link>
      </Typography>

      {/* Générer dynamiquement les autres éléments selon le chemin */}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`; // Construire l'URL

        // Dernier élément du chemin (actif)
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={to} variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Typography>
        ) : (
          <Typography key={to} variant="body1">
            <Link to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
          </Typography>
        );
      })}
    </StyledBreadcrumbs>
  );
}
