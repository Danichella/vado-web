import axios from 'axios';

const BASE_URL = 'https://117d-45-12-26-64.ngrok-free.app';
axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 120000;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;
