import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { getClient } from "../queryClient";
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query'

const Layout: React.FC = () => {
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={'loading...'}>
        <Outlet />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Layout;
