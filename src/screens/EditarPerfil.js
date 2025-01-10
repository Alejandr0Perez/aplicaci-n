import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Button, ScrollView, Alert } from 'react-native';
import database from '@react-native-firebase/database'; // Importa Firebase Database

const EditarPerfil = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');  // Agregar un estado para el userId

  useEffect(() => {
    // Recuperar los datos desde Firebase cuando el componente se monta
    const loadUserData = async () => {
      try {
        // Obtener el userId dinámicamente (puede ser obtenido desde autenticación o navegación)
        const userId = '123'; // Esto debe ser dinámico, depende de la autenticación
        setUserId(userId); // Establecer el userId

        const snapshot = await database().ref(`/usuarios/${userId}`).once('value');
        const userData = snapshot.val();
        
        if (userData) {
          setNombre(userData.nombre);
          setEmail(userData.email);
          setPassword(userData.password);
        }
      } catch (error) {
        console.log('Error al cargar los datos desde Firebase:', error);
      }
    };

    loadUserData();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  const handleSave = async () => {
    // Validaciones simples
    if (!nombre || !email) {
      Alert.alert('Error', 'Por favor completa todos los campos requeridos.');
      return;
    }

    // Actualizar los datos en Firebase
    try {
      if (!userId) {
        throw new Error('User ID no encontrado');
      }

      await database().ref(`/usuarios/${userId}`).update({
        nombre: nombre,
        email: email,
        password: password,
      });

      Alert.alert('Éxito', 'Los datos se han guardado correctamente.');

      // Navegar a la página de Vacantes después de guardar
      navigation.navigate('Vacantes', { nombre, email });

    } catch (error) {
      console.log('Error al guardar los datos en Firebase:', error);
      Alert.alert('Error', 'Hubo un problema al guardar los datos.');
    }
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
