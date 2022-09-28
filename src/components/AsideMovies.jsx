import React from 'react';
import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import { useFetch } from '../hooks/useFetch';
import CardMovieUpcoming from './CardMovieUpcoming';

const AsideMovies = () => {
	const { texts } = useContext(LanguageContext);
	const { data, loading } = useFetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=2e3e8c32d7e1e659740c5dfb8580b732&language=${texts.langURL}`);

	const { homeUpComming } = texts.home;
	const { results } = data;

	if (loading) return;

	return (
		<>
			<h2 className="text-center bg-white py-4 rounded mb-5 dark:text-white dark:bg-slate-500"> {homeUpComming} </h2>
			{results?.slice(0, 5).map((item) => (
				<CardMovieUpcoming key={item.id} item={item} />
			))}
		</>
	);
};

export default AsideMovies;
