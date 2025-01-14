import React, {useEffect, createContext, useState} from "react";
import {getToken, saveToken} from "../API/Authentication"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";


export const AuthContext = createContext({
    auth: null,
    login: () => {},
    logout: () => {}
});

export function AuthProvider({children}) {

    const [auth, setAuth] = useState(null)

    useEffect(() => {
        (async () => {


            const token = await getToken();
          if (token) {
            setAuth(token); 
        }
        })();
      }, []);

    const login = async (token) => {
        try {
            // Limpia cualquier token anterior
            //await clearToken();

            // Guarda el nuevo token
            await saveToken(token);

            // Decodifica el token
            const decodedToken = jwtDecode(token);
            console.log("Usuario logueado:", decodedToken);

            // Establece el token y la información del usuario en el contexto
            setAuth({
                token, // Token en texto
            });
        } catch (error) {
            console.error("Error en el login:", error);
        }
};


    const logout = async() => {
        try{
            await AsyncStorage.removeItem("authToken");
            setAuth(null);
            console.log("Sesión cerrada");
        }catch(error){
            console.error("Error al cerrar sesión:", error);
        }
    }

    const clearToken = async () => {
        try {
            // Elimina el token de AsyncStorage
            await AsyncStorage.removeItem("authToken");
            console.log("Token eliminado de AsyncStorage");
        } catch (error) {
            console.error("Error al intentar eliminar el token:", error);
        }
    };


    const valueContext = {
        auth, 
        login,
        logout
    }
    
    return(
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}