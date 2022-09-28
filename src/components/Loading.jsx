import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const Loading = () => {
	const { texts } = useContext(LanguageContext);

	return (
		<div className="flex flex-grow justify-center items-center">
			<div className="flex flex-col items-center gap-2">
				<span className="text-3xl font-semibold text-gray-200">{texts.loading}</span>
				<div className="flex gap-1 h-1 w-40 bg-gray-200 overflow-hidden">
					<div className="animation-loader w-20 h-full bg-sky-500"></div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
