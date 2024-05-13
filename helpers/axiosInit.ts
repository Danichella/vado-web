import axios from 'axios';

const BASE_URL = 'https://5e3e-45-12-26-158.ngrok-free.app';
axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 2500;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;
