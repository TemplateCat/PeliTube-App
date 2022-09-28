import React, { useState } from 'react';
import { useEffect } from 'react';

const GoTopButton = ({ showGoTop }) => {
	const handleGoTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className={`${showGoTop ? 'scale-110 opacity-100 visible' : 'scale-0 opacity-0 invisible'} fixed bottom-20 right-20 transition-all duration-300 z-40`}>
			<div className="effect-zoom bg-sky-500 text-white text-2xl py-3 px-4 rounded-full cursor-pointer transition-all duration-300" onClick={handleGoTop}>
				<i className="bi bi-arrow-up-short"></i>
			</div>
		</div>
	);
};

export default GoTopButton;
