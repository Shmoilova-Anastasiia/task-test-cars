import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCars } from 'api/carsApi';

export const getCarsThunk = createAsyncThunk(
  'advert/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const {data}  = await getCars();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);