import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainApp from './components/MainApp';
import Error404 from './routes/Error404';
import Home from './routes/Home';
import Movie from './routes/Movie';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainApp />}>
					<Route index element={<Home />} />
					<Route path="movie/:id" element={<Movie />} />
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
