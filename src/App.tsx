import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from './router/AppRouter';
import { Toaster } from 'react-hot-toast';
import { store } from 'app/store';
import { Provider } from 'react-redux';
// Create query client
function App() {
	return (
		<Provider store={store}>
			<ChakraProvider>
				<Toaster />
				<AppRouter />
			</ChakraProvider>
		</Provider>
	);
}

export default App;
