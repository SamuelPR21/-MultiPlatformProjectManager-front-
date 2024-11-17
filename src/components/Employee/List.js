import React from "react";
import { StyleSheet ,Text, FlatList } from "react-native";

import EmpleadoCard from "./Card";

export default function List(props) {
    const {empleados} = props;

    return(
        <FlatList
            data={empleados}
            //numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(empleado) => String(empleado.id)}
            renderItem={({item}) =><EmpleadoCard empleado={item}/>} 
            contentContainerStyle={styles.flatListContainer}
        />
    );
    
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5,
    }
})