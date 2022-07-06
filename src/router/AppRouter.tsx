import { Dashboard } from 'layout';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { privateRoutes } from './dashboard.routes';
import { publicRoutes } from './routes';
import { useAuth } from 'hooks';
import { Spinner } from 'components/shared';
import { Suspense } from 'react';

export const AppRouter = () => {
	const { checking, isAuthenticated } = useAuth();
	if (checking) return <Spinner />;

	return (
		<Suspense fallback={<h2>Loading..</h2>}>
			<Routes>
				<Route
					path='/app'
					element={
						isAuthenticated ? <Dashboard /> : <Navigate to='/auth/login' />
					}
				>
					{privateRoutes.map(({ path, component: Component, name }) => (
						<Route key={name} path={path} element={<Component />} />
					))}
				</Route>

				<Route
					path='/auth'
					element={isAuthenticated ? <Navigate to='/app' /> : <Outlet />}
				>
					{publicRoutes.map(({ path, name, component: Component }) => (
						<Route key={name} path={path} element={<Component />} />
					))}
				</Route>
				<Route
					path='*'
					element={
						isAuthenticated ? (
							<Navigate to='/app' />
						) : (
							<Navigate to='/auth/login' />
						)
					}
				/>
			</Routes>
		</Suspense>
	);
};
