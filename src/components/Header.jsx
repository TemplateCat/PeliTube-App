import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';
import ThemeContext from '../context/ThemeContext';

import logo from '../img/logo.png';
import Search from './Search';

const Header = ({ stickyMenu }) => {
	const { texts, handleLanguage } = useContext(LanguageContext);
	const { theme, handleClick } = useContext(ThemeContext);

	const {
		headerHome,
		headerAbout,
		headerContact,
		headerSearch,
		headerLogin,
		headerRegister,
	} = texts.header;

	return (
		<header
			className={`${
				stickyMenu ? 'sticky top-0' : 'relative'
			} bg-white transition-all duration-300 py-5 z-50 dark:bg-slate-900`}
		>
			<div className="container mx-auto flex justify-between gap-12">
				<figure>
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</figure>
				<div className="hidden lg:flex items-center flex-grow">
					<nav className="w-full">
						<ul className="flex gap-10 dark:text-white">
							<li className="hover:text-sky-500 transition-all-500">
								<Link to="/"> {headerHome} </Link>
							</li>
							<li className="hover:text-sky-500 transition-all-500">
								<Link to="#"> {headerAbout} </Link>
							</li>
							<li className="hover:text-sky-500 transition-all-500">
								<Link to="#"> {headerContact} </Link>
							</li>
						</ul>
					</nav>
					<div className="flex gap-5">
						<Search headerSearch={headerSearch} />
						<button className="effect-zoom"> {headerLogin} </button>
						<button className="effect-zoom bg-sky-500 text-white rounded-full py-2 px-3 whitespace-nowrap">
							{' '}
							{headerRegister}{' '}
						</button>
						<select
							className="bg-transparent outline-none cursor-pointer"
							name="language"
							onChange={handleLanguage}
						>
							<option value="es">ES</option>
							<option value="en">EN</option>
						</select>
						<button
							className="effect-zoom text-2xl transition-all-500 dark:hover:text-white"
							onClick={handleClick}
						>
							<i
								className={`bi bi-${
									theme === 'dark' ? 'brightness-high-fill' : 'moon-fill'
								} pointer-events-none`}
							></i>
						</button>
					</div>
				</div>
				<div className="lg:hidden flex items-center bg-sky-500 px-3 rounded-full">
					<i className="bi bi-list flex text-white text-4xl"></i>
				</div>
			</div>
		</header>
	);
};

export default Header;
