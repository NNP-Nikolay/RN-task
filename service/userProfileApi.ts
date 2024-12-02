import axios from "axios";
import { Alert } from "react-native";

const api = axios.create({
  baseURL: 'https://reqres.in/api/',
});

export const getDataUserProfile = async (randomId: number) => {
  try {
    const response = await api.get(`/users/${randomId}`);
    return response.data.data; 
  } catch (error) {
    Alert.alert('Error', 'Failed to load data. Please try again.');
    throw error;
  }
};
