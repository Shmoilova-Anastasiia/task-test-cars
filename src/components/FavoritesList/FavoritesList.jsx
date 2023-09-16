import { useSelector } from 'react-redux';

import { selectFavorites, selectFilter } from '../../redux/CarsSelector';


import NotFound from '../NotFound';

import  CarsItem  from '../CarsList/CarsItem';

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
    // className="flex flex-col items-center justify-center gap-5 pb-4"
    >
      {!filteredCars.length && <NotFound />}
      <ul 
    //   className="cards-list"
      >
        {filteredCars.map(car => (
          <CarsItem car={car} key={car.id} />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;