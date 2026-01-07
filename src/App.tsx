import { BrowserRouter, Routes, Route } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Navigation } from '@/components/navigation';
import Home from '@/pages/home';

import { useWalletEvents, hotConnector } from '@/hooks/useNearWallet';

// Query Client configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

// Wallet Events Listener Component
function WalletEventsListener() {
  useWalletEvents();
  return null;
}

// Main App Component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WalletEventsListener />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
export { hotConnector };
