import FavoritesList from "components/FavoritesList/FavoritesList"
import Filter from "components/Filter/Filter";
import { useSelector } from "react-redux";
import { selectFavorites } from "redux/CarsSelector";

 const FavotitePage = () => {
    const favoriteCars = useSelector(selectFavorites);
    return (
<div 
// className="mt-[-3rem] w-full wide:mt-[-8rem]"
>
      <div 
    //   className="relative mx-auto my-0 w-full "
      >
       <Filter cars={favoriteCars}/>
       <FavoritesList/>
      </div>
    </div>
    )
}

export default FavotitePage