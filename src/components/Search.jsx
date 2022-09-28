import React, { useState } from 'react';
import SearchResult from './SearchResult';

const Search = ({ headerSearch }) => {
	const [words, setWords] = useState('');

	const handleChange = ({ target }) => setWords(target.value);

	const handleMovieClick = () => setWords('');

	window.addEventListener('click', ({ target }) => !target.closest('.search-result-popup') && setWords(''));

	return (
		<form className="relative" onClick={(e) => e.stopPropagation()} onSubmit={(e) => e.preventDefault()}>
			<input className="bg-white outline-none border border-sky-500  text-slate-400 rounded-full py-2 pl-4 pr-9 w-52 transition-all-500 focus:w-60 dark:bg-slate-800 dark:border-sky-700" type="search" name="search" id="search" placeholder={headerSearch} autoComplete="off" value={words} onChange={handleChange} />
			<button className="absolute top-0 right-0 py-2 pr-4 effect-zoom" type="submit">
				<i className="bi bi-search text-sky-500"></i>
			</button>
			<div className="absolute bg-gray-50 dark:bg-slate-800 top-full right-0 rounded-lg mt-3">{words.trim().length > 0 && <SearchResult words={words} handleMovieClick={handleMovieClick} />}</div>
		</form>
	);
};

export default Search;
