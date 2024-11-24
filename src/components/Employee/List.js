import React from "react";
import { StyleSheet ,Text, FlatList } from "react-native";

import EmpleadoCard from "./Card";

export default function List(props) {
    const {empleados, deleteEmpleado, updateEmpleado} = props;

    return(
        <FlatList
            data={empleados}
            showsVerticalScrollIndicator={false}
            keyExtractor={(empleado) => String(empleado.id)}
            renderItem={({item}) => <EmpleadoCard empleado={item} deleteEmpleado={deleteEmpleado} updateEmpleado={updateEmpleado}/>} 
            contentContainerStyle={styles.flatListContainer}
        />
    );
    
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5,
    }
})