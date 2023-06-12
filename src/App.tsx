/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from 'routes';
import DefaultLayout from 'layouts';

function App() {
	return (
		<Router>
			<Routes>
				{publicRoutes.map((route: any, index: number) => {
					const Page = route.component;

					// let Layout: any = DefaultLayout;

					// if (route.layout) {
					// 	Layout = route.layout;
					// } else if (route.layout === null) {
					// 	Layout = React.Fragment;
					// }

					let Layout = route.layout
						? route.layout
						: route.layout === null
						? React.Fragment
						: DefaultLayout;

					return (
						<Route
							key={index}
							path={route.path}
							element={
								<Layout>
									<Page />
								</Layout>
							}
						/>
					);
				})}
			</Routes>
		</Router>
	);
}

export default App;
