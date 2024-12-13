import React from "react";
import { TextInput, Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useFormik} from "formik"
import * as Yup from "yup";

export default function LoginForms() {

    const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: Yup.object(validationSchema()),
      onSubmit: () =>{
        console.log("Formulario enviado", formik.values);
      }
    })

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>ALPELO S.A.S</Text>

            <TextInput
                placeholder="Nombre de Usuario"
                placeholderTextColor="#aaa"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue("username", text)}
            />
            <TextInput
                placeholder="Contraseña"
                placeholderTextColor="#aaa"
                style={styles.input}
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue("password", text)}

            />

            <TouchableOpacity style={styles.loginButton} onPress={formik.handleSubmit}> 
                <Text style={styles.loginText}>Ingresar</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
                No tienes una cuenta? <Text style={styles.link}>Registrate</Text>
            </Text>
        </SafeAreaView>
    );
}

function initialValues() {
    return {
        username: "",
        password: "",
    };
}

function validationSchema() {
    return {
        username: Yup.string().required("El nombre de usuario es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria"),
    };
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        padding: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 32,
    },
    input: {
        width: "90%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#333",
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
        elevation: 2,
    },
    loginButton: {
        width: "90%",
        height: 50,
        backgroundColor: "#007bff",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
    },
    loginText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    footerText: {
        marginTop: 16,
        fontSize: 14,
        color: "#555",
    },
    link: {
        color: "#007bff",
        fontWeight: "bold",
    },
});
