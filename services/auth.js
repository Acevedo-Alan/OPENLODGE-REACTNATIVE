import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api';

export const login = async(username, password) => {
    try {
        const response = await api.post("/autenticacion/login", {
        username,
        password,
        });
        const { token, user } = response.data;

        await AsyncStorage.setItem("userToken", token);
        await AsyncStorage.setItem("userData", JSON.stringify(user));

        return user;      
    } catch (error) {
        throw new Error(error.message || 'Error al iniciar sesión');
    }
};


export const register = async(username, password, email, nombre, apellido, fechaNacimiento) => {
    try{
        const response = await api.post('/autenticacion/registro', {
            username, password, email, nombre, apellido, fechaNacimiento,
        });
        const {token, user} = response.data;
        await AsyncStorage.setItem('userToken', token);
        await AsyncStorage.setItem('userData', JSON.stringify(user));

        return user;
    }catch(error){
        throw new Error(error.message || 'Error al registrar usuario');
    }
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userData");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

export const getCurrentUser = async() =>{
    try{
        const userData = await AsyncStorage.getItem('userData');
        return userData ? JSON.parse(userData): null;
    }catch(error){
        return null;
    }
};