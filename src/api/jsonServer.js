import axios from 'axios';

export default axios.create({
    //TODO : server changeable every 8 hours
    baseURL: 'https://8dad-2403-6200-8956-9f93-5819-66c2-7c4-d277.ngrok-free.app'
});