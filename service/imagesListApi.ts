import axios from 'axios';
import { Alert } from 'react-native';

const api = axios.create({
  baseURL: 'https://picsum.photos/v2',
});

export const getImagesList = async (page: number = 1, limit: number = 10) => {
  try {
    const response = await api.get('/list', { params: { page, limit } });
    return response.data;
  } catch (error) {
    Alert.alert('Error', 'Failed to load data. Please try again.');
    throw error;
  }
};
