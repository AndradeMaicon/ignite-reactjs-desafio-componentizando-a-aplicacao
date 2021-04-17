import { Button } from './Button';

import '../styles/sidebar.scss';

import { IGenreResonseProps } from '../dtos/IGenreResponseProps';

interface SideBarProps {
  genresList: IGenreResonseProps[];
  onClickButton: (id: number) => void;
  genreId: number;
}

export function SideBar({genresList, onClickButton, genreId}: SideBarProps) {
  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genresList.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickButton(genre.id)}
            selected={genreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}