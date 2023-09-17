import PropTypes from 'prop-types';

import DefaultImage from "../../images/DefaultImage.jpeg"
import css from './Modal.module.css'

const ModalCard = ({ car }) => {
  const {
    year,
    make,
    model,
    img,
    rentalPrice,
    address,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage
  } = car;


  const getFuelEngineData = car => {
    const { fuelConsumption, engineSize } = car;
    return [`Fuel Consumption: ${fuelConsumption}`, `Engine Size: ${engineSize}`];
  };
  const carData = getFuelEngineData(car);
  
  const getFullCarData = (address, car) => {
    const arr = address.split(', ');
    const city = arr[1];
    const country = arr[arr.length - 1];
    const { year, type, id } = car;
    return [city, country, `Id: ${id}`, `Year: ${year}`, `Type: ${type}`];
  };
  const locationData = getFullCarData(address, car);

  const parseRentalConditions = str => {
    const arr = str.split('\n');
    const num = arr[0].split(' ').slice(-1).join('');
  
    arr[0] = arr[0].replace(num, '');
    arr.splice(1, 0, num);
  
    return arr;
  };
  const rentConditions = parseRentalConditions(rentalConditions);

  const parseMileage = num => num.toLocaleString('en-EN');
  const mile = parseMileage(mileage);

  const parsePrice = str => str.split('').slice(1).join('');
  const price = parsePrice(rentalPrice);

  return (
    <div className={css.containerCard}>
        <img 
        className={css.image}
        src={img ? img : DefaultImage} 
        alt={`${make} ${model}`}
        width="461"
        height="248"
        loading="lazy"
        />
      
      <h2 className={css.titleCard}>
        {make} <span className={css.titleAccent}>{model}</span>, {year}
      </h2>
      <div 
      // className={css.containerLocation}
      >
        <ul className={css.listLocation}>
          {locationData.map((item, idx) => (
    <li
      key={idx}
     className={css.itemLocation} 
    >
      {item}
      {idx < locationData.length - 1}
    </li>))}
        </ul>
        <ul 
        className={css.listLocation} 
        >
          {carData.map((item, idx) => (
    <li
      key={idx}
      className={css.itemLocation}
    >
      {item}
      {idx < locationData.length - 1}
    </li>))}
        </ul>
      </div>
      <div 
      className={css.containerDescription}
      >{description}</div>
      <div 
      className={css.containerFunc}
      >
      <h3 
      className={css.titleFunc}
      >Accessories and functionalities:</h3>
      <ul 
     className={css.listAcces}
      >
      {accessories.map((item, idx) => (
        <li key={idx} 
        className={css.itemAcces}
        >
          {item}
          {idx < accessories.length - 1}
        </li>
      ))}
    </ul>
    <ul 
     className={css.listAcces}
      >
      {functionalities.map((item, idx) => (
        <li key={idx} 
        className={css.itemAcces}
        >
          {item}
          {idx < accessories.length - 1}
        </li>
      ))}
    </ul>
    </div>
      <div 
   className={css.containerFunc}
      >
      <h3 
        className={css.titleFunc}
      >Rental Conditions:</h3>
      <ul 
    className={css.listRental}
      >
        <li 
        className={css.itemRental}
        >
            <p 
            
            >{rentConditions[0]}</p>
            <span 
            className={css.itemAccent}
            >{rentConditions[1]}</span>
        </li>
        <li 
        className={css.itemRental}
        >
            <p 
            
            >{rentConditions[2]}</p>
        </li>
        <li 
        className={css.itemRental}
        >
            <p 
            
            >{rentConditions[3]}</p>
        </li>
        <li 
        className={css.itemRental}
        >
            <p 
            
            >{'Mileage: '}</p>
            <span 
             className={css.itemAccent}
            >{mile}</span>
        </li>
        <li 
        className={css.itemRental}
        >
            <p 
            
            >{'Price: '}</p>
            <span 
             className={css.itemAccent}
            >{`${price}$`}</span>
        </li>
      </ul>
    </div>
     

      <a href="tel:+380730000000" 
    className={css.linkModal}
      >
        Rental car
      </a>
    </div>
  );
};

ModalCard.propTypes = {
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
    mileage: PropTypes.number.isRequired,
    accessories: PropTypes.array.isRequired,
    rentalConditions: PropTypes.string.isRequired
  }).isRequired
};

export default ModalCard;