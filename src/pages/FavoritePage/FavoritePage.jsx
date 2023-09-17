import FavoritesList from "components/FavoritesList/FavoritesList"
import Filter from "components/Filter/Filter";
import { useSelector } from "react-redux";
import { selectFavorites } from "redux/CarsSelector";

import css from '../CatalogPage/CatalogPage.module.css'

 const FavotitePage = () => {
    const favoriteCars = useSelector(selectFavorites);
    return (
<div 
className={css.container}
>
      <div 
    
      >
       <Filter cars={favoriteCars}/>
       <FavoritesList/>
      </div>
    </div>
    )
}

export default FavotitePage