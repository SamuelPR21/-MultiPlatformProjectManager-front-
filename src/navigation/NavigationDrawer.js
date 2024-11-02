import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Perfil from "../screens/Profile";
import Maquina from "../screens/Machine";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Profile" component={Perfil} />
            <Drawer.Screen name="Machine" component={Maquina} />
        </Drawer.Navigator>
    );
}