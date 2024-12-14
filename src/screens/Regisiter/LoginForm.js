import React, {useState} from "react";
import { TextInput, Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useFormik} from "formik"
import * as Yup from "yup";

import { loginApi } from "../../API/Authentication";



export default function LoginForms() {

    const[error, setError] = useState("");

    const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: Yup.object(validationSchema()),
      validateOnChange: false,
      onSubmit: async (formvalue) =>{
        setError("");
        const {username, password} = formvalue;
        
            try{
                const token = await loginApi({username, password});

                if(token){
                    console.log("Login exitoso" , token)
                }else{
                    setError("Error al obtener el token")
                }

            }catch(apiError){
                console.error("Error en la API de login:", apiError.message);
                setError(apiError.message);
            }
        }
    })

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>ALPELO S.A.S</Text>

            <TextInput
                placeholder="Nombre de Usuario"
                placeholderTextColor="#aaa"
                style={styles.input}
                //keyboardType="email-address"
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

            <Text style= {styles.error}>{formik.errors.username}</Text>
            <Text style= {styles.error}>{formik.errors.password}</Text>
            <Text style= {styles.error}>{error}</Text>


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

    error : {
        textAlign: "center",
        color:  "#ff0000",
        marginTop: 20
    }
    
});
