import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Perfil from "../screens/Profile";
import Home from "../screens/HomeScreen";

const Stack = createStackNavigator();   


export default function NavigationNavbarProfile() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}   />
            <Stack.Screen name="Profile" component={Perfil}/>
        </Stack.Navigator>
    );
}