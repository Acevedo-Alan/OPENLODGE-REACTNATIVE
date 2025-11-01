import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { Alert } from "react-native";

const api = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 10000,
  headers:{
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(
    async(config) => {
        try{
            const token = await AsyncStorage.getItem('userToken');
            if(token){
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        }catch(error){
            return config;
        }
    }, (error) => {return Promise.reject(error);}
);

api.interceptors.response.use(
    (response) => {
        return response;
    }, async (error) => {
        if(error.response){
            const {status, data} = error.response;

            if(status === 401 || status ===403){
                await AsyncStorage.removeItem('userToken');
                await AsyncStorage.removeItem('userData');

                Alert.alert('Sesion expirada', 'Tu sesión ha expirado. Por favor volve a iniciar sesión');

                //a implementar: logica para redirigir al login
            }

            if(status >= 500){
                Alert.alert('Error', 'Error del servidor, manejate papu');
            }

            return Promise.reject(new Error(data.message || 'Error en la petición'));
        }

        if (error.request) {
          Alert.alert("Error de Conexión", "No hay conexión a internet.");
          return Promise.reject(new Error("No hay conexión a internet"));
        }

        return Promise.reject(error);
    }
);

export default api;