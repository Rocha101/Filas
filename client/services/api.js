import axios from 'axios';

const api = axios.create({baseURL: 'http://10.40.0.42:3001/'})

export default api;