import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { getCarsThunk } from './CarsOperation';
  
const arrayThunk = [getCarsThunk];

const status = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const fn = status => arrayThunk.map(el => el[status]);

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  reducers: {
    setToFavorites: (state, { payload }) => {
      const carToAdd = state.items.find(car => car.id === payload.id);
      if (carToAdd) {
        state.favorites.push(carToAdd);
      }
    },
    removeFromFavorites: (state, { payload }) => {
      const indexToRemove = state.favorites.findIndex(car => car.id === payload.id);
      if (indexToRemove !== -1) {
        state.favorites.splice(indexToRemove, 1);
      }
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
    resetFilter: state => {
      state.filter = null;
    }
  },
  extraReducers: builder => {
    const { pending, rejected } = status;
    builder
      .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addMatcher(isAnyOf(...fn(pending)), handlePending)
      .addMatcher(isAnyOf(...fn(rejected)), handleRejected);
  },
});

export const { setToFavorites, removeFromFavorites, setFilter, resetFilter } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;