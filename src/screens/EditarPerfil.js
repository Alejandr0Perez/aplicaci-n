import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Button, ScrollView, Alert } from 'react-native';

const EditarPerfil = ({ navigation }) => {
  const [nombre, setNombre] = useState('Juan Pérez');
  const [email, setEmail] = useState('juan.perez@example.com');
  const [password, setPassword] = useState('');
  const [carrera, setCarrera] = useState('');

  const handleSave = () => {
    // Validaciones simples
    if (!nombre || !email || !carrera) {
      Alert.alert('Error', 'Por favor completa todos los campos requeridos.');
      return;
    }

    // Simula el guardado de información
    console.log('Información guardada:', { nombre, email, password, carrera });
    
    // Navega a Vacantes después de guardar
    navigation.navigate('Vacantes', { nombre, email, carrera });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Imagen del perfil */}
      <Image source={require('./assets/fotoP.png')} style={styles.image} />

      {/* Botón de editar */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar Foto</Text>
      </TouchableOpacity>

      {/* Texto de descripción */}
      <Text style={styles.text}>Edita tu información personal.</Text>

      {/* Campos de entrada para editar la información */}
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Nuevo Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Nueva Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Carrera Universitaria"
        value={carrera}
        onChangeText={setCarrera}
      />

      {/* Botón para guardar cambios */}
      <Button title="Guardar Cambios" onPress={handleSave} color="#007BFF" />

      {/* Información adicional (opcional) */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Nombre:</Text>
        <Text style={styles.infoText}>{nombre}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Email:</Text>
        <Text style={styles.infoText}>{email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Carrera:</Text>
        <Text style={styles.infoText}>{carrera}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, // Para que la imagen se vea circular
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 2,
  },
  editButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: '100%',
    backgroundColor: '#fff',
    fontSize: 16,
  },
  infoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    color: '#555',
  },
});

export default EditarPerfil;
