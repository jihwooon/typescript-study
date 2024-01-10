import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { getClient } from "../queryClient";
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil';
import Gnb from './gnb';
const { worker } = await import('../mocks/browser')

if (import.meta.env.DEV) {
  worker.start()
}

const Layout: React.FC = () => {
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot >
        <Suspense fallback={'loading...'}>
          <Gnb />
          <Outlet />
        </Suspense>
      </RecoilRoot >
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Layout;
