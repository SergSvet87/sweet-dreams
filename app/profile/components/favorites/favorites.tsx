import { FC } from 'react';
import style from './favorites.module.css';
import Catalog from '@/components/catalog/Catalog';
import SortSelect from '@/components/sorting/SortSelect';
interface IFavorites {}

const Favorites: FC<IFavorites> = () => {
  return (
    <div className={style.favoritesContainer}>
      <div className={style.header}>
        <h2 className={style.titleFilter}>Favorites list</h2>
        <SortSelect onChange={() => {}} />
      </div>
      <div className={style.shop__content}>
        <Catalog allProducts={[]} />
      </div>
    </div>
  );
};
export default Favorites;
