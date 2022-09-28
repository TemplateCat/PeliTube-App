import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';

import logoFt from '../img/logo-ft.png';

const Footer = () => {
	const { texts } = useContext(LanguageContext);
	const { footerHome, footerAbout, footerContact, footerCopyright } =
		texts.footer;

	return (
		<footer className="mt-auto bg-white dark:bg-slate-900">
			<div className="container mx-auto ">
				<div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-10 py-5">
					<figure>
						<img src={logoFt} alt="logo" />
					</figure>
					<nav className="flex flex-col lg:flex-row justify-between items-center gap-2 w-full">
						<ul className="flex gap-10">
							<li className="hover:text-sky-500 transition-all-500">
								<Link to="/"> {footerHome} </Link>
							</li>
							<li className="hover:text-sky-500 transition-all-500">
								<Link to="#"> {footerAbout} </Link>
							</li>
							<li className="hover:text-sky-500 transition-all-500">
								<Link to="#"> {footerContact} </Link>
							</li>
						</ul>
						<ul className="flex gap-5">
							<li className="effect-zoom cursor-pointer">
								<i className="bi bi-facebook text-3xl"></i>
							</li>
							<li className="effect-zoom cursor-pointer">
								<i className="bi bi-twitter text-3xl"></i>
							</li>
						</ul>
					</nav>
				</div>
				<p className="text-center py-5"> {footerCopyright} </p>
			</div>
		</footer>
	);
};

export default Footer;
