import { create } from 'axios';


const api = create({
    baseURL: 'http://192.168.100.2:3000',
});

export default api;