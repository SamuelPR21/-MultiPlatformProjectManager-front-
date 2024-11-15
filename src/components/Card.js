import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, Modal, StyleSheet, ScrollView } from "react-native";

export default function CardComponent() {
    // Estado para mostrar/ocultar el modal
    const [isModalVisible, setModalVisible] = useState(false);

    // Función para mostrar/ocultar el modal
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    // Datos estáticos (quemados) con Lorem Ipsum
    const item = {
        title: "Card Title Example",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia augue eu metus vehicula, vitae fermentum risus cursus.",
        specificData: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula urna vel orci convallis pretium."
    };

    return (
        <View style={styles.cardContainer}>
            {/* Vista previa de la tarjeta */}
            <TouchableOpacity onPress={toggleModal}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardDescription}>
                        {/* Limita la longitud de la descripción y agrega "..." si es más larga */}
                        {item.description.length > 100
                            ? item.description.substring(0, 100) + "..."
                            : item.description}
                    </Text>
                    {/* Otros datos resumidos */}
                    <Text style={styles.cardInfo}>Otros datos...</Text>
                </View>
            </TouchableOpacity>

            {/* Modal para mostrar los detalles completos de la tarjeta */}
            <Modal visible={isModalVisible} animationType="slide" onRequestClose={toggleModal}>
                <View style={styles.modalContainer}>
                    <ScrollView contentContainerStyle={styles.modalContent}>
                        {/* Título */}
                        <Text style={styles.modalTitle}>{item.title}</Text>

                        {/* Descripción completa */}
                        <Text style={styles.modalDescription}>{item.description}</Text>

                        {/* Datos adicionales */}
                        <Text style={styles.modalData}>Datos Específicos:</Text>
                        <Text>{item.specificData}</Text>

                        {/* Botón para cerrar el modal */}
                        <Button title="Cerrar" onPress={toggleModal} />
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
    cardDescription: {
        fontSize: 14,
        color: "#666",
    },
    cardInfo: {
        fontSize: 12,
        color: "#888",
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
    modalDescription: {
        fontSize: 16,
        marginBottom: 20,
    },
    modalData: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
});
