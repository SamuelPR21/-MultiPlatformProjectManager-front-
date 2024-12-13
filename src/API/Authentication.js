import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_AUTH } from "../utils/constants"; 
// Función para guardar el token
export const saveToken = async (token) => {
  await AsyncStorage.setItem("authToken", token);
};

// Función para obtener el token almacenado
export const getToken = async () => {
  return await AsyncStorage.getItem("authToken");
};

// Configuración del interceptor para axios
axios.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Función para realizar login y obtener el token desde la API
export const loginApi = async (credentials) => {
  try {
    const response = await axios.post(`${API_AUTH}/login`, credentials);
    return response.data; // Devuelve el token o la información relevante
  } catch (error) {
    console.error("Error en la API de login:", error.response?.data || error.message);
    throw new Error(
      error.response?.data?.message || "Error al autenticar. Por favor, verifica tus credenciales."
    );
  }
};
