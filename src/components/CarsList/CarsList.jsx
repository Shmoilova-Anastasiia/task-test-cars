import PropTypes from 'prop-types';

import { CarsItem } from "./CarsItem"
import { useState } from 'react';

export const CarsList = ({ adverts }) => {
    const useLoadMore = (initialCount = 8) => {
        const [currentPage, setCurrentPage] = useState(1);
        const [carsLimit] = useState(initialCount);
      
        const loadMore = () => setCurrentPage(prevPage => prevPage + 1);
      
        return [carsLimit, currentPage, loadMore];
      };

      const filteredCars = (arr, num) => {
        const newArr = arr?.slice(0, num);
        return newArr;
      };
    const [currentPage, carsLimit, loadMore] = useLoadMore(8);

    // const indexOfLastCar = currentPage * carsLimit;


    return (
        <>
        <ul>
            {filteredCars(adverts).map(car => (
          <CarsItem car={car} key={car.id} />
        ))}
        </ul>
        {/* {adverts?.length >= indexOfLastCar && (
            <button onClick={loadMore}>Load more</button>
          )} */}
        </>
    )
}