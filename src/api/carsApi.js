import axios from 'axios';

axios.defaults.baseURL = 'https://648cb0ef8620b8bae7ed42e3.mockapi.io';

export const getCars = () => axios.get('/advert');
