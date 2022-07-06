import { Dashboard } from 'layout';
import { Routes, Route, Navigate, Outlet, HashRouter } from 'react-router-dom';
import { privateRoutes } from './dashboard.routes';
import { publicRoutes } from './routes';
import { Spinner } from 'components/shared';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';

export const AppRouter = () => {
	const { isLogged } = useSelector((state: RootState) => state.session);
	return (
		<HashRouter>
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route path='/app' element={<Dashboard />}>
						{privateRoutes.map(({ path, component: Component, name }) => (
							<Route key={name} path={path} element={<Component />} />
						))}
					</Route>
					<Route path='/auth' element={<Outlet />}>
						{publicRoutes.map(({ path, name, component: Component }) => (
							<Route key={name} path={path} element={<Component />} />
						))}
					</Route>
					<Route
						path='*'
						element={
							isLogged ? <Navigate to='/app' /> : <Navigate to='/auth/login' />
						}
					/>
				</Routes>
			</Suspense>
		</HashRouter>
	);
};
