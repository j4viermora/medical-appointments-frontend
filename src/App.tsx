import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from './router/AppRouter';
import { Toaster } from 'react-hot-toast';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// Create query client
function App() {
	return (
		<Provider store={store}>
			<ChakraProvider>
				<HashRouter>
					{/* Provide the client to app */}
					<Toaster />
					<AppRouter />
				</HashRouter>
			</ChakraProvider>
		</Provider>
	);
}

export default App;
