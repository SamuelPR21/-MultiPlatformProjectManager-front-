import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import NavigationApp from './src/navigation/NavigationApp';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (

    <AuthProvider>
       <NavigationApp />
    </AuthProvider>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
