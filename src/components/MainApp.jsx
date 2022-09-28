import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LanguageProvider } from '../context/LanguageContext';
import { ThemeProvider } from '../context/ThemeContext';
import Footer from './Footer';
import GoTopButton from './GoTopButton';
import Header from './Header';

const MainApp = () => {
	const [stickyMenu, setStickyMenu] = useState(false);
	const [showGoTop, setShowGoTop] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', (e) => {
			const scroll = document.documentElement.scrollTop;
			scroll > 50 ? setStickyMenu(true) : setStickyMenu(false);
			scroll > 100 ? setShowGoTop(true) : setShowGoTop(false);
		});
	}, []);

	return (
		<ThemeProvider>
			<LanguageProvider>
				<Header stickyMenu={stickyMenu} />
				<Outlet />
				<GoTopButton showGoTop={showGoTop} />
				<Footer />
			</LanguageProvider>
		</ThemeProvider>
	);
};

export default MainApp;
