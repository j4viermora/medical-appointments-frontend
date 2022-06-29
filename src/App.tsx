import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from './router/AppRouter';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'react-hot-toast';
import { useAtomsDevtools } from 'jotai/devtools';
// Create query client
const queryClient = new QueryClient();
function App() {
  useAtomsDevtools('store');
  return (
    <ChakraProvider>
      {/* Provide the client to app */}
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <AppRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
