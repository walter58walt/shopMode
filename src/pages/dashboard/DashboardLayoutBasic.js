import React from 'react';
import Grid from '@mui/material/Grid2';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Skeleton } from './SkeletonComponent';
import { NAVIGATION } from './navigation';
import { demoTheme } from './theme';
import OrdersPage from './OrdersPage';  // Import the OrdersPage component
import MessagesPage from './MessagesPage'; // Import the MessagesPage component

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

export default function DashboardLayoutBasic(props) {
  const { window } = props;
  const router = useDemoRouter('/dashboard');
  const demoWindow = window ? window() : undefined;

  // Logique pour déterminer quelle page afficher
  let content;
  if (router.pathname === '/dashboard') {
    content = (
      <Grid container spacing={1}>
        <Grid size={5} />
        <Grid size={12}>
          <Skeleton height={14} />
        </Grid>
        <Grid size={12}>
          <Skeleton height={14} />
        </Grid>
        <Grid size={4}>
          <Skeleton height={100} />
        </Grid>
        <Grid size={8}>
          <Skeleton height={100} />
        </Grid>

        <Grid size={12}>
          <Skeleton height={150} />
        </Grid>
        <Grid size={12}>
          <Skeleton height={14} />
        </Grid>

        <Grid size={3}>
          <Skeleton height={100} />
        </Grid>
        <Grid size={3}>
          <Skeleton height={100} />
        </Grid>
        <Grid size={3}>
          <Skeleton height={100} />
        </Grid>
        <Grid size={3}>
          <Skeleton height={100} />
        </Grid>
      </Grid>
    );
  } else if (router.pathname === '/orders') {
    // Afficher la page des commandes
    content = <OrdersPage />;
  } else if (router.pathname === '/messages') {
    // Afficher la page des messages
    content = <MessagesPage />;
  }

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          {content}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
