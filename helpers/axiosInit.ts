import { BASE_URL } from '@/constants/BaseUrl';
import axios from 'axios';

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 120000;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;
