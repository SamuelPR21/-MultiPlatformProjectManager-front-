import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuth from "../hooks/useAuth";

export default function Profile() {
    const { auth, logout } = useAuth();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileContainer}>
                <Text style={styles.title}>Bienvenido!</Text>
                <Text style={styles.subtitle}>Esta es tu pantalla de perfil</Text>
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    profileContainer: {
        alignItems: "center",
        marginVertical: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        marginTop: 5,
    },
    logoutButton: {
        backgroundColor: "#ff5c5c",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25, // Hace los bordes redondeados
        alignItems: "center",
        marginTop: 20,
    },
    logoutButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
