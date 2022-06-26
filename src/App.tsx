import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from './router/AppRouter';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Create query client
const queryClient = new QueryClient();
function App() {
	return (
		<ChakraProvider>
			{/* Provide the client to app */}
			<QueryClientProvider client={queryClient}>
				<AppRouter />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ChakraProvider>
	);
}

export default App;
