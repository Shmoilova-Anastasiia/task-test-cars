import PropTypes from 'prop-types';

import css from './CarsList.module.css'

const CarsCard = ({ locationData, carData }) => {

    const findShortestString = arrStrings => {
        if (!arrStrings || arrStrings.length === 0) {
          return '';
        }
      
        let shortest = arrStrings[0];
        for (let i = 1; i < arrStrings.length; i++) {
          const currentString = arrStrings[i];
          if (currentString.split(' ').length < shortest.split(' ').length) {
            shortest = currentString;
          }
        }
      
        const shortestWords = shortest.split(' ');
      
        return shortestWords.length > 3 ? shortestWords.slice(0, 3).join(' ') : shortest;
    };
    const formatedValue = (key, value) => {
        if (key === 'functionalities') {
          return findShortestString(value);
        } else if (key === 'type') {
          return value.split(',')[0].trim();
        }
        return value;
    };

    return(
        <div>
            <ul className={css.listCard}>
                {locationData.map((item, idx) => (
                <li
                    key={idx}
                    className={css.itemCard}
                >
                    {item}
                    {idx < locationData.length - 1}
                </li>))}
            </ul>
            <ul className={css.listCard}>
                {Object.entries(carData).map(([key, value], idx, arr) => (
                    <li key={idx} className={css.itemCard}>
                    {formatedValue(key, value)}
                    {  idx < arr.length - 1}
                    </li>
                ))}
            </ul>
        </div>
    )
}

CarsCard.propTypes = {
    carData: PropTypes.object.isRequired,
    locationData: PropTypes.array.isRequired
  };

  export default CarsCard;