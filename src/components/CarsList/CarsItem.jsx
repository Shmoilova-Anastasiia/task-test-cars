import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineHeart } from 'react-icons/ai';

import { CarsCard } from "./CarsCard"
import DefaultImage from "../../images/DefaultImage.jpeg"

export const CarsItem = ({car}) => {
    const dispatch = useDispatch();

    // const { id, year, make, model, img, rentalPrice, address } = car;

    const getCarData = car => {
        const { type, mileage, functionalities } = car;
        return { type, mileage, functionalities };
    };


    const getLocationData = (car) => {
        const {address, rentalCompany} = car;
        const arr = address.split(', ');
        const city = arr[1];
        const country = arr[arr.length - 1];
        return [city, country, rentalCompany];
    };

    const locationData = getLocationData(car);
    const carData = getCarData(car);

    return (
<li>
    <button  type="button"> <AiOutlineHeart/> </button>
    <img 
    src={car.img ? car.img : DefaultImage} 
    alt={`${car.make} ${car.model}`}/>
   <h2>  {car.make}  <span>{car.model}</span> <span>{car.rentalPrice}</span></h2>
    <CarsCard locationData={locationData} carData={ carData}/>
    <button>Learn more</button>
</li>
    )
}