import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, Modal, StyleSheet, ScrollView } from "react-native";

export default function CardComponent(props) {

    const{empleado, deleteEmpleado} = props;

    //const {empleado} = props;
    // Estado para mostrar/ocultar el modal
    const [isModalVisible, setModalVisible] = useState(false);

    // Función para mostrar/ocultar el modal
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleDelete = () => {
        if(deleteEmpleado){
            deleteEmpleado(empleado.id);
            toggleModal();
        }
    };


    return (
        <View style={styles.cardContainer}>

            {/* Vista previa de la tarjeta */}
            <TouchableOpacity onPress={toggleModal}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>{empleado.nombreCompleto}</Text>

                   

                    <View style={styles.cardRow}> 
                        <View style={styles.cardColumn}>
                            <Text style={styles.cardInfo}>Contacto: {empleado.numeroContacto}</Text>
                            <Text style={styles.cardInfo}>Dirrecion: {empleado.direccion}</Text>
                        </View>
                        <View style={styles.cardColumn}>
                            <Text style={styles.cardInfo}>fecha Nacimiento: {empleado.fechaNacimiento}</Text>
                            <Text style={styles.cardInfo}>ID: {empleado.numeroIdentificacion}</Text>
                        </View>
                    </View>

                    <Text style={styles.cardInfo}>Nivel: {empleado.nivel}</Text>
                    <Text style={styles.cardInfo}>Cargo: {empleado.cargo}</Text>
                </View>
                
    

            </TouchableOpacity>


            {/* Modal para mostrar los detalles completos de la tarjeta */}
            <Modal visible={isModalVisible} animationType="slide" onRequestClose={toggleModal}>
                <View style={styles.modalContainer}>
                    <ScrollView contentContainerStyle={styles.modalContent}>

                        <Text style={styles.modalTitle}>{empleado.nombreCompleto}</Text>
                        <Text style={styles.modalData}>Número de Contacto: {empleado.numeroContacto}</Text>
                        <Text style={styles.modalData}>Dirección: {empleado.direccion}</Text>
                        <Text style={styles.modalData}>Fecha de Nacimiento: {empleado.fechaNacimiento}</Text>
                        <Text style={styles.modalData}>Número de Identificación: {empleado.numeroIdentificacion}</Text>
                        <Text style={styles.modalData}>Cargo: {empleado.cargo}</Text>
                        <Text style={styles.modalData}>Nivel: {empleado.nivel}</Text>

                       
                        <Button title="Atras" onPress={toggleModal} />
                        
                        <Button 
                            title = "Elminar" 
                            onPress={handleDelete}
                            color={"red"}
                        
                        />

                    </ScrollView>
                </View>
            </Modal>

        </View>
    );
}


const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#fff",
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    card: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: "#f8f8f8",
        borderWidth: 1,
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 4 },
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    cardRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    cardColumn: {
        flex: 1,
    },
    cardInfo: {
        fontSize: 12,
        color: "#666",
        marginBottom: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        width: "80%",
        maxHeight: "80%",
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },
    modalData: {
        fontSize: 16,
        marginBottom: 10,
    },
});
