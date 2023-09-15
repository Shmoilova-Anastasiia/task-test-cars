import { combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './CarsSlice';

export const rootReducer = combineReducers({
    cars: carsReducer
  });