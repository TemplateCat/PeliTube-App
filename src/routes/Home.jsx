import React, { useContext } from 'react';
import CardMovie from '../components/CardMovie';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import AsideMovies from '../components/AsideMovies';
import LanguageContext from '../context/LanguageContext';
import { useFetch } from '../hooks/useFetch';
import useCounter from '../hooks/useCounter';

const Home = () => {
	const { texts } = useContext(LanguageContext);
	const { counter, handleDecrement, handleIncrement, handleReset } = useCounter(1);
	const { data, loading } = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=2e3e8c32d7e1e659740c5dfb8580b732&page=${counter}&language=${texts.langURL}`);

	const { results } = data;
	const { homeH1 } = texts.home;
	const dataCounter = { counter, handleDecrement, handleIncrement, handleReset };

	if (loading) {
		return <Loading />;
	}

	return (
		<div className="container mx-auto my-5">
			<h1 className="font-bold text-2xl mb-5 dark:text-white"> {homeH1} </h1>
			<div className="grid grid-cols-2 lg:grid-cols-12 gap-10">
				<div className="col-span-2 lg:col-span-9">
					<div className="grid grid-cols-12 gap-5">
						{results?.map((item) => (
							<CardMovie key={item.id} item={item} />
						))}
					</div>
					<Pagination dataCounter={dataCounter} />
				</div>
				<div className="col-span-2 lg:col-span-3">
					<AsideMovies />
				</div>
			</div>
		</div>
	);
};

export default Home;
