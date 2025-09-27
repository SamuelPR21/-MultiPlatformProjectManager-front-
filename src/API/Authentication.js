import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_AUTH } from "../utils/constants"; 
import { jwtDecode } from "jwt-decode";

// Función para guardar el token
export const saveToken = async (token) => {
  await AsyncStorage.setItem("authToken", token);
};

// Función para obtener el token
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    return token || null; // Devuelve null si no hay token almacenado
  } catch (error) {
    console.error("Error al obtener el token:", error);
    return null;
  }
};

// Configuración del interceptor para axios
axios.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = token; // Ya incluye "Bearer" desde el backend
  }
  return config;
});


// Función para realizar login y obtener el token desde la API
export const loginApi = async (credentials) => {
  try {
    const response = await axios.post(`${API_AUTH}/login`, credentials);
    console.log("Respuesta de la API de login:", response);

    // Obtén el token del header "Authorization"
    const token = response.headers['authorization']; 
    console.log("El token se ha obtenido del backend", token)

    if (token) {
      
      await saveToken(token);
    } else {
      throw new Error("No se recibió el token de autenticación.");
    }
  
    return token; // Devuelve el token 
  } catch (error) {
    console.error("Error en la comunicacion de API de login:", error.response?.data || error.message);
    throw error;
  }
  
};
