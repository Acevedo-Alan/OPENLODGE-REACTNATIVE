import { createContext, useEffect, useState } from "react";
import {
    getCurrentUser,
    login as loginService,
    logout as logoutService,
} from "../services/auth";

// Crear el contexto
export const AuthContext = createContext();

// Provider del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verificar si hay sesión al iniciar la app
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const userData = await getCurrentUser();
      setUser(userData);
    } catch (error) {
      console.error("Error al verificar autenticación:", error);
    } finally {
      setLoading(false);
    }
  };

  // Función de login
  const login = async (username, password) => {
    try {
      const userData = await loginService(username, password);
      setUser(userData);
      return userData;
    } catch (error) {
      throw error;
    }
  };

  // Función de logout
  const logout = async () => {
    try {
      await logoutService();
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  // Verificar si es anfitrión
  const isAnfitrion = () => {
    return user?.rol === "ANFITRION";
  };

  // Verificar si es huésped
  const isHuesped = () => {
    return user?.rol === "HUESPED";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAnfitrion,
        isHuesped,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
