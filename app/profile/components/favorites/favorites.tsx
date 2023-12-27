import { FC } from 'react';
import style from './favorites.module.css';
interface IFavorites {}

const Favorites: FC<IFavorites> = () => {
  return <div className={style.favoritesContainer}></div>;
};
export default Favorites;
