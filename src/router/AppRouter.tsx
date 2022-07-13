import { Dashboard } from 'layout';
import { Routes, Route, Navigate, Outlet, HashRouter } from 'react-router-dom';
import { privateRoutes } from './dashboard.routes';
import { publicRoutes } from './routes';
// import { Spinner } from 'components/shared';
// import { Suspense } from 'react';

export const AppRouter = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path='/app' element={<Dashboard />}>
					{privateRoutes.map(({ path, component: Component, name }) => (
						<Route key={name} path={path} element={<Component />} />
					))}
					<Route path='/app/*' element={<Navigate to='/app' />} />
				</Route>
				<Route path='' element={<Outlet />}>
					{publicRoutes.map(({ path, name, component: Component }) => (
						<Route key={name} path={path} element={<Component />} />
					))}
					<Route path='/' element={<Navigate to='login' />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};
