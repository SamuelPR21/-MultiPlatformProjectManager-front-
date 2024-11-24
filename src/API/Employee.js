import {API_HOST} from "../utils/constants"
import axios from "axios";


export async function getEmpleadosApi() {
    try {
        const url = `${API_HOST}/todos?limit=20&offset=0`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("Error al consumir la API de listar empleados: ", error);
        return null;
    }
}

export async function getEmpleadoByIdApi(id) {
    try {
        const url = `${API_HOST}/search/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("Error al consumir la API de obtenr un empleado por ID: ", error);
        return null;
    }
}

export const addEmpleadoApi = async (empladoData) => {
    try {
        const url = `${API_HOST}/crear`;
        const response = await axios.post(url, empladoData);
        return response.data;
    } catch (error) {
        console.log("Error al consumir la API de agregar empleado: ", error);
        return null;
    }
}

export const deleteEmpleadoApi = async (id) => {
    try {
        const url = `${API_HOST}/elminar/${id}`;
        const response = await axios.delete(url);
        
        if(response.status === 204){
            return true;
        }

        console.log("Error al consumir la API de eliminar empleado: ", response.status);
        return false;

    } catch (error) {
        console.log("Error al consumir la API de eliminar empleado: ", error);
        return null;
    }
}

export const updateEmpleadoApi = async (id, empleadoData) => {
    try{
        const url = `${API_HOST}/update/${id}`;
        const response = await axios.put(url, empleadoData);
        

        if(response.status === 200){
            return true;
        }else{
            console.log("Error al consumir la API de actualizar empleado: ", response.status);
            return false;
        }

    }catch(error){
        console.log("Error al consumir la API de actualizar empleado: ", error);
        return null;
    }
}