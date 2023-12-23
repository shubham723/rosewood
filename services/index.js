import { RESERVATION } from '@/constants/urlConstants';
import axios from 'axios';

export const addReservation = async (payload = {}) => {
    const response = await axios.post(`${RESERVATION}`, payload)
    return { status: 'SUCCESS', data: response.data }
};
