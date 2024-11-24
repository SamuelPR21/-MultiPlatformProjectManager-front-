import React, { useState } from "react";
import { SafeAreaView, TextInput, Button, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function CardUpdate({empleado, onSave, onCancel}) {

    const[formData, setFormData] = useState({...empleado});

    const [isDatePickerVisible, setDatePickerVisible] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (date) => {
        setFormData({ ...formData, fechaNacimiento: date });
        hideDatePicker();
    };

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };



    return (
        <SafeAreaView>
            <View style={styles.card}>
                <TextInput 
                    placeholder="Nombre Completo"
                    value={formData.nombreCompleto}
                    onChangeText={(value) => handleChange("nombreCompleto", value)}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Número Celular"
                    value={formData.numeroContacto}
                    onChangeText={(value) => handleChange("numeroContacto", value)}
                    style={styles.input}
                />

                <TextInput 
                    placeholder="Dirección"
                    value={formData.direccion}
                    onChangeText={(value) => handleChange("direccion", value)}
                    style={styles.input}
                />

                <TouchableOpacity onPress={showDatePicker} style={styles.dateInput}>
                    <Text style={styles.dateText}>
                        {formData.fechaNacimiento 
                        ? new Date(formData.fechaNacimiento).toLocaleDateString("es-ES")
                        : "Seleccionar fecha"}
                    </Text>
                </TouchableOpacity>

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}   
                />

                <TextInput 
                    placeholder="Número de Identificación"
                    value={formData.numeroIdentificacion}
                    onChangeText={(value) => handleChange("numeroIdentificacion", value)}
                    style={styles.input}
                />

                <TextInput 
                    placeholder="Cargo"
                    value={formData.cargo}
                    onChangeText={(value) => handleChange("cargo", value)}
                    style={styles.input}
                />

                <Text style={styles.label}>Nivel</Text>
                <Picker
                    selectedValue={formData.nivel}
                    onValueChange={(value) => handleChange("nivel", value)}
                    style={styles.picker}
                >
                    <Picker.Item label="SUPERVISOR" value="SUPERVISOR" />
                    <Picker.Item label="PATO" value="PATO" />
                    <Picker.Item label="ESTANDAR" value="ESTANDAR" />
                </Picker>

                <View style={styles.buttonContainer}>
                    <Button title="Guardar" onPress={() => onSave(formData)} />
                    <Button title="Cancelar" onPress={onCancel} color="red" />
                </View>
            </View> 
        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        padding: 20,
    },
    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: "100%",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 15,
        padding: 10,
        fontSize: 16,
        color: "#333",
    },
    dateInput: {
        borderBottomWidth: 1,
        marginBottom: 15,
        padding: 10,
        justifyContent: "center",
    },
    dateText: {
        color: "gray",
        fontSize: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        marginTop: 15,
    },
    picker: {
        height: 50,
        marginBottom: 15,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
});