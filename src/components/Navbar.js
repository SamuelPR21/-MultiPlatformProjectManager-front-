import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Buscador from './Searcher'
import BotonPerfil from './ButtonProfile'

export default function Navbar() {

    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <BotonPerfil />
        <Buscador />
      </View>
    );
 }



const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fff',
      justifyContent: 'space-between', // Esto asegura que haya espacio entre el botón y el buscador
    },
  });
