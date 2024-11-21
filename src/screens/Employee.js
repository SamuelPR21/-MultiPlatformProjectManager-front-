import React, {useState, useEffect} from "react";
import { View, Text, Modal, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getEmpleadosApi, addEmpleadoApi } from "../API/Employee";
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


            if(!response || !Array.isArray(response)) {
                console.error("La api no devolvio resultados validos")
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
            console.error("Error al agregar empleado: ", error)
        }
    }

    return(
        <SafeAreaView>
            <Navbar/>
            <List empleados={empleados}/>
            <Button title=" + " onPress={() => setModalVisible(true)}/>


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
        padding: 10,
    },
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
    },
});