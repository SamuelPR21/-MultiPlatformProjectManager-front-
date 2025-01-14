import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Alert } from "react-native";
import Perfil from "../screens/Profile";
import Maquina from "../screens/Machine";
import Cliente from "../screens/Customer";
import Inicion from "../screens/HomeScreen"
import Empleado from "../screens/Employee"
import Trabajo from "../screens/Job"
import Pago from "../screens/Payment"
import TipoTrabajo from "../screens/TypeJob"
import LoginForms from "../screens/Regisiter/LoginForm";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationBanner from "./NavigationNavbarProfile"
//import useAuth from "../hooks/useAuth"
//import {navigationRef} from './NavigationApp'

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {

    //const {logout} = useAuth();

    //const handleLogout = () => {
      //  Alert.alert(
        //    "Cerrar Sesión",
          //  "¿Estás seguro de que quieres cerrar sesión?",
            //[
              //  {text: "Cancelar", style: "cancel" },
                //{
                  //  text: "Salir",
                    //onPress: async () => {
                      //  await logout();
                        //navigationRef.current?.navigate("Login");
                    //},
                      
                //},
            //],
            //{ cancelable: true }
        //)
    //}

    //const LogoutScreen = () => {
      //  React.useEffect(() => {
        //    handleLogout();
        //}, []);

        //return null;
    //}


    return (
        <Drawer.Navigator>
            <Drawer.Screen 
            name="Inicio" 
            component={NavigationBanner}
            options={{
                drawerIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={size} />
                ),
            }}
        
            />
            <Drawer.Screen 
                name="Trabajo" 
                component={Trabajo}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="briefcase" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen 
                name="Machine" 
                component={Maquina} 
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="tractor" color={color} size={size}/>
                    ),
                }} 
            />

            <Drawer.Screen 
                name="Cliente" 
                component={Cliente}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="account-group" color={color} size={size} />
                    ),
                }} 
            />
            <Drawer.Screen 
                name="Empleado" 
                component={Empleado}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="account" color={color} size={size} />
                    ),
                }} 
            />
            <Drawer.Screen 
                name="Pago" 
                component={Pago}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="cash" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen 
                name="Tipo de Trabajo" 
                component={TipoTrabajo}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="format-list-bulleted" color={color} size={size} />
                    ),
                }}
                
            />
            <Drawer.Screen 
                name="Perfil" 
                component={Perfil} 
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="account-circle" color={color} size={size} />
                    ),
                }}
            />


        </Drawer.Navigator>
    );
}