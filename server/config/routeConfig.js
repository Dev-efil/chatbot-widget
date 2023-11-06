import axios from 'axios';
const BASE_URL = 'https://api.example.com';

export default axios.create({
    baseURL: BASE_URL
});