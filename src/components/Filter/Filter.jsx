import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import PropTypes from 'prop-types';


import { resetFilter, setFilter } from '../../redux/CarsSlice';
import { selectFilter } from '../../redux/CarsSelector';
import { useUniquePropValues } from 'shared/hooks/useUniquePropValues';

import css from './Filter.module.css'


const Filter = ({ cars }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();


  const parsePrice = str => str.split('').slice(1).join('');

  const priceOptions = arr => {
    if (!arr.length) {
      return undefined;
    }
  
    let max = 0;
    const priceOptions = [];
  
    arr.forEach(item => {
      const price = +parsePrice(item.rentalPrice);
      if (price > max) {
        max = price;
      }
    });
    let i = 10;
    while (i <= max) {
      priceOptions.push(i);
      i += 10;
    }
  
    return priceOptions;
  };

  const price = priceOptions(cars);


  const uniqueBrands = useUniquePropValues(cars, 'make');

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    reset(filter);
  }, [filter, reset]);

  const onSubmit = data => {
    dispatch(setFilter(data));
  };

  const resetFilterInRedux = () => {
    dispatch(resetFilter());
    reset({
      brand: '',
      price: '',
      from: '',
      to: ''
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      
    >
      <div 
      className={css.form}
      >
        <div 
        className={css.containerForm}
        >
          <div 
          className={css.select}
          >
            <label htmlFor="brand" 
            className={css.selectLabel}
            >
              Car brand
            </label>
            <Controller
              name="brand"
              control={control}
              rules={{ required: true, message: 'Brand is required' }}
              render={({ field }) => (
                <>
                  <select {...field} 
                  className={css.selectBrand}
                  >
                    <option value="" 
                    className={css.selectPlaceholder}
                    >
                      Enter the text
                    </option>
                    {uniqueBrands &&
                      uniqueBrands.map((make, idx) => (
                        <option key={idx} value={make} 
                        className={css.selectText}
                        >
                          {make}
                        </option>
                      ))}
                  </select>
                  {errors.brand && (
                    <p className={css.errorMessage}>
                      {errors.brand.type === 'required'
                        ? 'Brand is required'
                        : errors.brand.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div 
       className={css.select}
          >
            <label htmlFor="price" 
            className={css.selectLabel}
            >
              Price/ 1 hour
            </label>
            <div>
              <Controller
                name="price"
                control={control}
                rules={{
                  required: true,
                  min: {
                    value: 0,
                    message: 'Must be 0 or greater'
                  }
                }}
                render={({ field }) => (
                  <>
                    <select {...field} 
                     className={css.selectBrand}
                    
                    >
                      <option value="" 
                      >
                        To $
                      </option>
                      {price &&
                        price.map((price, index) => (
                          <option key={index} value={price} 
                  
                          >
                            {price}
                          </option>
                        ))}
                    </select>
                    {errors.price && (
                      <p className={css.errorMessage}>
                        {errors.price.type === 'required'
                          ? 'Price is required'
                          : errors.price.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <div 
       className={css.containerPrice}
          >
            <label htmlFor="minMileage" 
            className={css.selectLabel}
            >
              Car mileage / km (from)
            </label>
            <div 
            className={css.containerSelect}
            >
              <label 
             className={css.selectLabel}
              >
                <input
                  type="number"
                  placeholder='From'
                className={css.selectPrice}
                  {...register('from', {
                    required: 'This field is required',
                    min: {
                      value: 0,
                      message: 'Must be 0 or greater'
                    }
                  })}
                />
              </label>
              <label 
            className={css.selectLabel}
              >
                <input
                  type="number"
                  placeholder='To'
                  className={css.selectPrice}
                  {...register('to', {
                    required: 'This field is required',
                    min: {
                      value: 0,
                      message: 'Must be 0 or greater'
                    },
                    validate: (value, { from }) => {
                      if (parseInt(value) > parseInt(from)) {
                        return true;
                      }
                      return 'To must be greater than From';
                    }
                  })}
                />
              </label>
              <p
                className={css.errorMessage}
              >
                {errors?.from && <span>{errors.from.message}</span>}
                {errors?.to && <span>{errors.to.message}</span>}
              </p>
            </div>
          </div>
        </div>
        <div 
        className={css.containerButton}
        >
          <button type="submit" 
          className={css.buttonFilter}
          >Search</button>
          <button
            type="button"
            className={css.buttonFilter}
            onClick={resetFilterInRedux}
          >Reset</button>
        </div>
      </div>
    </form>
  );
};

Filter.propTypes = {
  cars: PropTypes.array.isRequired
};

export default Filter;