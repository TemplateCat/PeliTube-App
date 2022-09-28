import React from 'react';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

import imageNotFound from '../img/notfound.png';

const SearchResult = memo(({ words, handleMovieClick }) => {
	const { data, loading } = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=2e3e8c32d7e1e659740c5dfb8580b732&query=${words}&language=es-ES`);

	if (loading) return;

	const { results } = data;

	return (
		<div className="search-result-popup max-h-64 min-w-[290px] overflow-y-auto p-2">
			{results.length > 0 ? (
				results.map((item) => (
					<Link className="flex gap-2 p-2 transition-all duration-300 hover:bg-slate-700" key={item.id} to={`movie/${item.id}`} onClick={handleMovieClick}>
						<div>
							<img className="h-16 w-16 object-cover max-w-[unset]" src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : imageNotFound} alt={item.title} />
						</div>
						<span className="text-slate-400 dark:text-white">{item.title}</span>
					</Link>
				))
			) : (
				<p className="text-slate-400 text-sm">No se encontraron resultados</p>
			)}
		</div>
	);
});

export default SearchResult;
