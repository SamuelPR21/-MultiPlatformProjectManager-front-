import React from "react";
import { TextInput, Button, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterForm() {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dob, setDob] = useState(""); // Estado para almacenar la fecha seleccionada

    const showDatePicker = () => {
        setDatePickerVisibility(true); // Muestra el picker
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false); // Oculta el picker
    };

    const handleConfirm = (date) => {
        setDob(date.toLocaleDateString()); // Establece la fecha seleccionada en el estado
        hideDatePicker();
    };

    return (
        <SafeAreaView>
            <TextInput placeholder="Nombre Completo" />
            <TextInput placeholder="Correo Electronico"/>
            <TextInput placeholder="N° Identificacion"/>
             {/* Mostrar la fecha de nacimiento seleccionada */}
             <View style={styles.dateContainer}>
                <Button title="Seleccionar Fecha de Nacimiento" onPress={showDatePicker} />
                {dob ? <Text>Fecha de Nacimiento: {dob}</Text> : null}
            </View>

            {/* Modal del DateTimePicker */}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <TextInput placeholder="Password" secureTextEntry/>
            <TextInput placeholder="Nombre de Usuario" />

            
            <Button title="Resgistart" />
        </SafeAreaView>
    );

}