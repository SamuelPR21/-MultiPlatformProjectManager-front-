import React, {createRef} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {StyleSheet } from "react-native";
import LoginForms from "../screens/Regisiter/LoginForm";
import NavegacionPrincipal from "../navigation/NavigationDrawer";
import useAuth from "../hooks/useAuth";

const Stack = createStackNavigator();
export const navigationRef  = createRef();

export default function NavigationApp() {
    const {auth} = useAuth();

    return (
    <NavigationContainer  ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {auth?.token ? (
          // Si el usuario está autenticado, mostrar el flujo principal
          <Stack.Screen name="MainApp" component={NavegacionPrincipal} />
        ) : (
          // Si el usuario NO está autenticado, mostrar el flujo de autenticación
          <Stack.Screen name="Login" component={LoginForms} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#f4f4f4",
    },
});
