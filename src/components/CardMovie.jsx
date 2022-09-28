import React from 'react';
import { Link } from 'react-router-dom';

const CardMovie = ({ item }) => {
	const { id, title, poster_path, overview, release_date } = item;

	return (
		<div className="col-span-12 xs:col-span-4 lg:col-span-2 relative group">
			<Link className="flex flex-col h-full" to={`movie/${id}`}>
				<div className="bg-slate-900 h-full rounded-lg overflow-hidden">
					<img className="h-full w-full object-cover group-hover:opacity-50 transition-all-500" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
				</div>
				<h2 className="clamp-1 text-center group-hover:text-sky-500 transition-all-500">{title}</h2>
			</Link>
			<div className="hidden lg:block absolute invisible opacity-0 scale-0 bg-slate-900 top-[6%] left-[60%] rounded-lg overflow-hidden pointer-events-none transition-all-500 w-72 z-10 group-hover:visible group-hover:opacity-100 group-hover:scale-100">
				<div className="relative">
					<img className="absolute inset-0 h-full w-full object-cover blur-md scale-150 opacity-50" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
					<div className="relative p-4">
						<h3 className="font-bold text-sm text-white">{title}</h3>
						<span className="inline-block text-xs text-slate-400 my-4 mr-2">{release_date}</span>
						<p className="text-xs text-slate-400 clamp-7">{overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardMovie;
