import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { useFetch } from '../hooks/useFetch';
import LanguageContext from '../context/LanguageContext';

import { CircularProgressbar } from 'react-circular-progressbar';
import Rater from 'react-rater';

import 'react-rater/lib/react-rater.css';
import '../css/customRater.css';

import 'react-circular-progressbar/dist/styles.css';
import '../css/customCircularProgressbar.css';

const Movie = () => {
	const params = useParams();
	const { texts } = useContext(LanguageContext);

	const { data, loading } = useFetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=2e3e8c32d7e1e659740c5dfb8580b732&language=${texts.langURL}`);
	const { movieVotes } = texts.movie;

	if (loading) {
		return <Loading />;
	}

	const { original_title, title, poster_path, overview, vote_count, vote_average, runtime, release_date } = data;

	const porcentage = vote_average * 10;
	const ratingStar = vote_average / 2;

	return (
		<div className="container mx-auto my-5">
			<div className="flex gap-10">
				<img className="h-[300px] w-[212px] rounded object-cover max-w-[unset]" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
				<div>
					<h1 className="dark:text-white text-3xl font-semibold">{title}</h1>
					<h2>{original_title}</h2>
					<div className="flex items-center my-5">
						<div className="flex items-center gap-2 pr-5 mr-5 border-r border-slate-400">
							<CircularProgressbar value={porcentage} valueStart={0} valueEnd={100} text={`${porcentage}%`} />
							<div className="flex flex-col">
								<Rater total={5} rating={ratingStar} interactive={false} />
								<small className="text-xs">
									({vote_count} {movieVotes} {ratingStar} / 5)
								</small>
							</div>
						</div>
						<p className="flex gap-5">
							<span>{runtime}min</span> <span>{release_date.slice(0, 4)}</span>
						</p>
					</div>
					<p className="text-slate-400">{overview}</p>
				</div>
			</div>
		</div>
	);
};

export default Movie;
