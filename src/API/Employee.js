import {API_HOST} from "../utils/constants"


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