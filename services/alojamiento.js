import api from "./api";

export const getAlojamientos = async (id) => {
    try {
        const response = await api.get(`/api/alojamientos/anfitrion/${id}`);
        return response.data.alojamientos;
    } catch (error) {
        throw error;
    }
};

export const actualizarAlojamiento = async (id, datosActualizados, ) => {
    try {
        const response = await api.put(`/api/alojamientos/${id}`, datosActualizados);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const crearAlojamiento = async (datosAlojamiento) => {
    try {
        const response = await api.post('/api/alojamientos/crearAlojamiento', datosAlojamiento);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const eliminarAlojamiento = async (id) => {
    try {
        const response = await api.delete(`/api/alojamientos/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};