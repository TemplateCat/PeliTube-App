import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';

const CardMovieUpcoming = ({ item }) => {
	const { texts } = useContext(LanguageContext);
	const { id, title, poster_path, overview, release_date } = item;

	const { homeDate } = texts.home;

	return (
		<div className="flex gap-2 mb-4">
			<Link className="h-36 w-24 min-w-max" to={`movie/${id}`}>
				<img className="h-full w-full object-cover" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
			</Link>
			<div>
				<Link to={`movie/${id}`}>
					<h3>{title}</h3>
				</Link>
				<p className="clamp-4 text-xs text-slate-400 my-2">{overview}</p>
				<span className="text-sm">
					{homeDate}: <span className="text-xs text-slate-400">{release_date}</span>
				</span>
			</div>
		</div>
	);
};

export default CardMovieUpcoming;
