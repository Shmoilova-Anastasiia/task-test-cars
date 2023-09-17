import { useSelector } from 'react-redux';

import { selectFavorites, selectFilter } from '../../redux/CarsSelector';


import NotFound from '../NotFound/NotFound';

import  CarsItem  from '../CarsList/CarsItem';
import css from '../CarsList/CarsList.module.css'

const FavoritesList = () => {
  const favoriteCars = useSelector(selectFavorites);
  const filter = useSelector(selectFilter);

  const filterCars = (cars, filter) => {
    if (!filter) {
      return cars;
    }
  
    return cars.filter(car => {
      const rentalPrice = parseInt(car.rentalPrice.substring(1));
      const mileage = parseFloat(car.mileage);
  
      const brandMatch = !filter.brand || car.make.toLowerCase() === filter.brand.toLowerCase();
      const priceMatch = !filter.price || rentalPrice <= filter.price;
      const minMileageMatch = !filter.from || mileage >= filter.from;
      const maxMileageMatch = !filter.to || mileage <= filter.to;
      const companyMatch =
        !filter.rentalCompany ||
        car.rentalCompany.toLowerCase() === filter.rentalCompany.toLowerCase();
  
      return brandMatch && priceMatch && minMileageMatch && maxMileageMatch && companyMatch;
    });
  };
  const filteredCars = filterCars(favoriteCars, filter);

  return (
    <div 
   className={css.containerCatalog}
    >
      {!filteredCars.length && <NotFound />}
      <ul 
      className={css.list}
      >
        {filteredCars.map(car => (
          <CarsItem car={car} key={car.id} />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;