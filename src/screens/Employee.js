import React, {useState, useEffect} from "react";
import { Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getEmpleadosApi, getEmpleadoByIdApi } from "../API/Employee";
import List from "../components/Employee/List"
import Navbar from "../components/Navbar";
import Tarjeta from "../components/Employee/Card"

export default function Profile() {
    const [empleados, setEmpleados] = useState([]);
    console.log('Empleados cargados--->', empleados);

    useEffect(() => {
        (async() => {
            await loadEmpleado();
        })();
    }, []);

    const loadEmpleado = async () => {
        try {
            const response = await getEmpleadosApi();


            if(!response || !Array.isArray(response)) {
                console.error("La api no devolvio resultados validos")
                return;
            }
            

            setEmpleados(response);
            //const empleadoArray =[];
            //for await (const empleado of response.results) {
             //   const empleadoDetails = await getEmpleadoByIdApi(empleado.id);

                //if (!empleadoDetails) {
               //     console.error(`No se encontró información para el empleado con ID ${empleado.id}`);
             //   }

                //empleadoArray.push(
                  //  {
                    //    id: empleado.id,
                    //    nombreCompleto: empleado.nombre,
                    //    numeroContacto: empleado.nuemroContacto,
                    //    direccion: empleado.direccion,
                    //    fechaNacimiento: empleado.fechaNacimiento,
                    //    nivel: empleado.nivel,
                    //    cargo: empleado.cargo,
                    //    numeroIdentificacion: empleado.numeroIdentificacion

                    //}
                //);
            }catch(error) {
                console.error("Error al cargar empelados: ",error);
            }

            //setEmpleados((prevState) => [...prevState, ...empleadoArray]);

        //}catch(error) {
          //  console.error("Error al cargar empelados: ",error);
        //}    
    };

    return(
        <SafeAreaView>
            <Navbar/>
            <List empleados={empleados}/>
        </SafeAreaView>
    );
}