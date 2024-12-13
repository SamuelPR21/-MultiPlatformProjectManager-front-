import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationDrawer from './src/navigation/NavigationDrawer';
import NavigationApp from './src/navigation/NavigationApp';

export default function App() {
  return (
  <NavigationContainer style={styles.container}>
    <NavigationApp/>
  </NavigationContainer>
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
