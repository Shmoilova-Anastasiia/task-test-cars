import PropTypes from 'prop-types';

import DefaultImage from "../../images/DefaultImage.jpeg"

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
    <>
        <img 
        // className={css.image}
        src={img ? img : DefaultImage} 
        alt={`${make} ${model}`}
        width="461"
        height="248"
        loading="lazy"
        />
      
      <h2>
        {make} <span className="">{model}</span>, {year}
      </h2>
      <div 
    //   className="mb-[14px] gap-[4px]"
      >
        <ul 
        // className="modal-description mb-[4px] flex items-center justify-start"
        >
          {locationData.map((item, idx) => (
    <li
      key={idx}
    //   className={
    //     className
    //       ? `text-description ${className} dark:text-white/50`
    //       : 'text-description dark:text-white/50'
    //   }
    >
      {item}
      {idx < locationData.length - 1}
    </li>))}
        </ul>
        <ul 
        // className="modal-description flex items-center justify-start"
        >
          {carData.map((item, idx) => (
    <li
      key={idx}
    //   className={
    //     className
    //       ? `text-description ${className} dark:text-white/50`
    //       : 'text-description dark:text-white/50'
    //   }
    >
      {item}
      {idx < locationData.length - 1}
    </li>))}
        </ul>
      </div>
      <div 
    //   className="modal-accent-descr dark:text-white"
      >{description}</div>
      <div 
    //   className="mb-[24px]"
      >
      <p 
    //   className="modal-second-title dark:text-white"
      >Accessories and functionalities:</p>
      <ul 
    //   className="mb-[4px] flex flex-wrap items-center justify-start"
      >
      {accessories.map((item, idx) => (
        <li key={idx} 
        // className="text-description dark:text-white/50"
        >
          {item}
          {idx < accessories.length - 1}
        </li>
      ))}
    </ul>
    <ul 
    //   className="mb-[4px] flex flex-wrap items-center justify-start"
      >
      {functionalities.map((item, idx) => (
        <li key={idx} 
        // className="text-description dark:text-white/50"
        >
          {item}
          {idx < accessories.length - 1}
        </li>
      ))}
    </ul>
    </div>
      <div 
    //   className="mb-[24px] "
      >
      <p 
    //   className="modal-second-title dark:text-white"
      >Rental Conditions:</p>
      <ul 
    //   className="modal-cond-block gap-3"
      >
        <li 
        // className="modal-btn-cond dark:bg-slate-600"
        >
            <p 
            // className="cond dark:text-white/50"
            >{rentConditions[0]}</p>
            <span 
            // className="modal-accent-cond"
            >{rentConditions[1]}</span>
        </li>
        <li 
        // className="modal-btn-cond dark:bg-slate-600"
        >
            <p 
            // className="cond dark:text-white/50"
            >{rentConditions[2]}</p>
        </li>
        <li 
        // className="modal-btn-cond dark:bg-slate-600"
        >
            <p 
            // className="cond dark:text-white/50"
            >{rentConditions[3]}</p>
        </li>
        <li 
        // className="modal-btn-cond dark:bg-slate-600"
        >
            <p 
            // className="cond dark:text-white/50"
            >{'Mileage: '}</p>
            <span 
            // className="modal-accent-cond"
            >{mile}</span>
        </li>
        <li 
        // className="modal-btn-cond dark:bg-slate-600"
        >
            <p 
            // className="cond dark:text-white/50"
            >{'Price: '}</p>
            <span 
            // className="modal-accent-cond"
            >{`${price}$`}</span>
        </li>
      </ul>
    </div>
     

      <a href="tel:+380730000000" 
    //   className="modal-btn-link"
      >
        Rental car
      </a>
    </>
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