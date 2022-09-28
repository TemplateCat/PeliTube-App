import React from 'react';
import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const Pagination = ({ dataCounter }) => {
	const { texts } = useContext(LanguageContext);
	const { counter, handleDecrement, handleIncrement, handleReset } = dataCounter;

	const { paginationPrevious, paginationNext } = texts.pagination;

	return (
		<div className="flex justify-center gap-10 pt-5">
			{counter >= 3 && (
				<button className="effect-zoom flex items-center text-white bg-sky-500 rounded-full py-2 px-3" onClick={handleReset}>
					<i className="bi bi-chevron-double-left flex text-3xl"></i>
				</button>
			)}
			<button className={`${counter <= 1 ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 pointer-events-none' : 'bg-sky-500 text-white'} effect-zoom flex items-center rounded-full py-2 px-3`} onClick={handleDecrement}>
				<i className="bi bi-arrow-left-short flex text-3xl"></i>
				<span className="hidden sm:flex text-lg uppercase font-semibold"> {paginationPrevious} </span>
			</button>
			<button className="effect-zoom flex items-center text-white bg-sky-500 rounded-full py-2 px-3" onClick={handleIncrement}>
				<span className="hidden sm:flex text-lg uppercase font-semibold"> {paginationNext} </span>
				<i className="bi bi-arrow-right-short flex text-3xl"></i>
			</button>
		</div>
	);
};

export default Pagination;
