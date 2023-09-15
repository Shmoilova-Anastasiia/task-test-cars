import { CarsList } from "components/CarsList/CarsList"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarsThunk } from "redux/CarsOperation";
import { selectCars, selectFilter } from "redux/CarsSelector";
import { setFilter } from "redux/CarsSlice";

const CatalogPage = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);
  
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

    const filteredCars = filterCars(cars, filter);
  
    useEffect(() => {
      dispatch(getCarsThunk());
    }, [dispatch]);
  
    useEffect(() => {
      dispatch(setFilter(null));
    }, [dispatch]);

    return (
        <>
{cars?.length > 0 && <CarsList adverts={filteredCars} />}
</>
    )
}
export default CatalogPage