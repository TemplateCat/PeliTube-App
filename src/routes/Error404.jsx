import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';

const Error404 = () => {
	const { texts } = useContext(LanguageContext);

	return (
		<div className="flex-grow container m-auto my-5">
			<div className="flex flex-col justify-center items-center gap-2 text-center h-full">
				<span className="text-8xl text-gray-400">404</span>
				<h1 className="uppercase text-sky-500 text-4xl"> {texts.error404} </h1>
				<p className="text-lg">{texts.error404_info}</p>
				<Link className="effect-zoom rounded-full bg-sky-500 text-white py-2 px-3" to="/">
					{texts.error404_btn}
				</Link>
			</div>
		</div>
	);
};

export default Error404;
