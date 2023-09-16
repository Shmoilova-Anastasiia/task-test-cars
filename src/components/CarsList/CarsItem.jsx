import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { AiFillHeart } from 'react-icons/ai';


import CarsCard from "./CarsCard"
import DefaultImage from "../../images/DefaultImage.jpeg"

import css from "./CarsList.module.css"
import { removeFromFavorites, setToFavorites } from 'redux/CarsSlice';
import { selectFavorites } from 'redux/CarsSelector';
import Modal from 'components/Modal/Modal';
import ModalCard from 'components/Modal/ModalCard';
import { useState } from 'react';

const CarsItem = ({car}) => {

    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);

    const useToggle = (initialState = false) => {
        const [isOpen, setIsOpen] = useState(initialState);
        const open = () => setIsOpen(true);
        const close = () => setIsOpen(false);
        const toggle = () => setIsOpen(isOpen => !isOpen);
      
        return { isOpen, open, close, toggle };
      };
    const { isOpen, open, close } = useToggle(false);

    const isFavorite = favorites?.some(favCar => favCar.id === car.id);

    const handleToggleFavorite = () => {
      return isFavorite ? dispatch(removeFromFavorites(car)) : dispatch(setToFavorites(car));
    };

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
<li className={css.item}>
    <div className={css.thumbImage}>
        <button  
        className={css.buttonImage}
        type="button"
        onClick={handleToggleFavorite}> 
            <AiFillHeart className={` ${isFavorite ? css.iconHeart_favorite : css.iconHeart}`}/>    
        </button>
        <img 
        className={css.image}
        src={car.img ? car.img : DefaultImage} 
        alt={`${car.make} ${car.model}`}
        width="274"
        height="268"
        loading="lazy"
        />
    </div>
    <h2 className={css.titleCard}> <span> {car.make}  <span>{car.model}</span>, {car.year}</span> <span className={css.titlePart}>{car.rentalPrice}</span></h2>
    <CarsCard locationData={locationData} carData={ carData}/>
    <button className={css.buttonCard} onClick={open}>Learn more</button>
    {isOpen && (
          <Modal isOpen={isOpen} onClose={close}>
            <ModalCard car={car} />
          </Modal>
        )}
</li>
    )
}

CarsItem.propTypes = {
    car: PropTypes.shape({
      id: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      functionalities: PropTypes.array.isRequired,
      rentalPrice: PropTypes.string.isRequired,
      rentalCompany: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      mileage: PropTypes.number.isRequired
    }).isRequired,
    fav: PropTypes.bool
  };

  export default CarsItem;