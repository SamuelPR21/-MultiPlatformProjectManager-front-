import React, {useState, useEffect} from "react";
import { View, Text, Modal, StyleSheet, Button, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getEmpleadosApi, addEmpleadoApi, deleteEmpleadoApi, updateEmpleadoApi } from "../API/Employee";
import List from "../components/Employee/List"
import Navbar from "../components/Navbar";
import CreateCard from "../components/Employee/CreateCard";


export default function Profile() {
    const [empleados, setEmpleados] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    console.log('Empleados cargados--->', empleados);

    useEffect(() => {
        (async() => {
            await loadEmpleado();
        })();
    }, []);

    const loadEmpleado = async () => {
        try {
            const response = await getEmpleadosApi();
            console.log("Respuesta de la API:", response);


            if(!response || !Array.isArray(response)) {
                console.error("La api no devolvio resultados validos ", response)
                return;
            }
            

            setEmpleados(response);
            }catch(error) {
                console.error("Error al cargar empelados: ",error);
            }   
    };

    const addEmpleado = async(empladoData) =>{
        try{
            const result = await addEmpleadoApi(empladoData)
            if(result){
                setModalVisible(false);
                await loadEmpleado();
                console.log("Empleado agregado correctamente")
                
            }

        }catch(error){
            console.error("Error al agregar empleado: ", error.response?.data || error.message);
        }
    }

    const deleteEmpleado = async(id) => {
        try {
            const result = await deleteEmpleadoApi(id);
            console.log("Resultado de la eliminación:", result);
    
            if (result) {
                await loadEmpleado();
                console.log("Empleado eliminado correctamente");
            }else {
                console.log("No se pudo eliminar el empleado.");
            }
        } catch (error) {
            console.error("Error al eliminar empleado: ", error.response?.data || error.message);
        }

    }

    const updateEmpleado = async(id, empleadoData) => {
        try {
            const result = await updateEmpleadoApi(id, empleadoData);
            console.log("Resultado de la actualización:", result);
    
            if (result) {
                await loadEmpleado();
                console.log("Empleado actualizado correctamente");
            }else {
                console.log("No se pudo actualizar el empleado.");
            }
        } catch (error) {
            console.error("Error al actualizar empleado: ", error.response?.data || error.message);
        }
    }

    return(
        <SafeAreaView>
            <List empleados={empleados} deleteEmpleado={deleteEmpleado} updateEmpleado={updateEmpleado}/>

            <TouchableOpacity
                style={styles.floatingButton}
                onPress={()=> setModalVisible(true)}

            >
                <Text style={styles.buttonText}>+</Text>

            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <CreateCard
                        onSave = {addEmpleado}
                        onCancel = {() => setModalVisible(false)}
                    />
                </View>
            </Modal>    
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    floatingButton: {
        position: "absolute",
        bottom: 20, // Distancia desde la parte inferior
        right: 20, // Distancia desde el lado derecho
        backgroundColor: "#007BFF",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5, // Sombra en Android
        shadowColor: "#000", // Sombra en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
});