import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function ButtonProfile() {
  const navigation = useNavigation(); 

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.reset({
          index: 0, // Restablece la pila, asegurando que solo haya una pantalla (Home)
          routes: [{ name: 'Home' }], // Asegura que la pantalla Home sea la única en la pila
        });
        navigation.navigate('Profile'); // Luego navega al perfil
      }}
    >
      <Text style={styles.text}>Perfil</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
