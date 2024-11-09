import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const SesionIniciada = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./assets/imagenF.jpeg')} // Ajusta la ruta de la imagen
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.topText}>ResiWork®</Text>
        <View style={styles.centerContainer}>
          <Text style={styles.welcomeText}>¡BIENVENIDO!</Text>
          <Text style={styles.subText}>Tu futuro empieza aquí</Text>
        </View>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('Vacantes')} // Cambia la pantalla a Vacantes
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Translucent background
    borderRadius: 20, // Rounded corners
    marginHorizontal: 20,
    marginVertical: 40,
    padding: 30,
    shadowColor: '#000', // Shadow effect
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // Android shadow effect
  },
  topText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#00ace6',
    marginBottom: 20,
    textAlign: 'center',
  },
  centerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)', // Text shadow for depth
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subText: {
    fontSize: 20,
    color: '#d3d3d3',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  continueButton: {
    backgroundColor: '#00ace6',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 40,
    borderWidth: 2, // Border for button
    borderColor: '#fff', // White border color
    transition: 'background-color 0.3s ease', // CSS-like transition (not applicable in React Native)
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SesionIniciada;
