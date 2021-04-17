import { MovieCard } from './MovieCard';
import { IGenreResonseProps } from '../dtos/IGenreResponseProps';
import { IMovieProps } from '../dtos/IMovieProps';
import { Header } from './Header';

import '../styles/content.scss';

interface ContentProps {
  genre: IGenreResonseProps;
  movieList: IMovieProps[];
}

export function Content({genre, movieList}: ContentProps) {
  return (
    <div className="container"> 
      <Header title={genre.title}/>

      <main>
        <div className="movies-list">
          {movieList.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}