import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HelpCenterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>Volver</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>CENTRO DE AYUDA</Text>
      
      <Text style={styles.description}>
        ¡Comunícate libremente con nosotros!
      </Text>
      <Text style={styles.description}>
        A través del correo oficial o nuestras redes sociales. ¡Encantados de poder ayudarte!
      </Text>
      
      <Text style={styles.email}>CORREO</Text>
      <Text style={styles.emailAddress}>Resiejemplojjj@gmail.com</Text>

      {/* Imagen local */}
      <Image
        source={require('./assets/LOGO.jpeg')} // Reemplaza con la ruta correcta de tu imagen local
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  backText: {
    fontSize: 16,
    color: '#000000',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
    color: '#000000',
  },
  email: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  emailAddress: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555555',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 20,
  },
});

export default HelpCenterScreen;
