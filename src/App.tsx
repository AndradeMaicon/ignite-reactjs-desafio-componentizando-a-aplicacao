import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { IGenreResonseProps } from './dtos/IGenreResponseProps';
import { IMovieProps } from './dtos/IMovieProps';

import { api } from './services/api';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<IGenreResonseProps[]>([]);

  const [movies, setMovies] = useState<IMovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<IGenreResonseProps>({} as IGenreResonseProps);

  useEffect(() => {
    api.get<IGenreResonseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<IMovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<IGenreResonseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar genresList={genres} onClickButton={handleClickButton} genreId={selectedGenreId}/>

      <Content genre={selectedGenre} movieList={movies}/>
    </div>
  )
}