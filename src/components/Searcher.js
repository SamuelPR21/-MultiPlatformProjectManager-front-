import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function Searcher() {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Buscar..."
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%', // Ajusta el ancho
    },
    input: {
        backgroundColor: '#e0e0e0',
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 40,
        width: '100%', // Ocupa todo el espacio disponible
    },
});