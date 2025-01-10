import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput
} from 'react-native';

const Registro = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [carrera, setCarrera] = useState('');

  const handleResidente = () => {
    if (!nombre || !email || !carrera || !password) {
      alert('Por favor completa todos los campos');
      return;
    }

    console.log('Registro como Residente');
    // Navega a la pantalla de Residente y pasa los datos
    navigation.navigate('Residente', { nombre, email, password, carrera });
  };

  const handleEmpresa = () => {
    if (!nombre || !email || !carrera || !password) {
      alert('Por favor completa todos los campos');
      return;
    }

    console.log('Registro como Empresa');
    // Navega a la pantalla de Empresa y pasa los datos
    navigation.navigate('Empresa', { nombre, email, password, carrera });
  };

  return (
    <ImageBackground
      source={require('./assets/imagenF.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image
          source={require('./assets/LOGO.jpeg')}
          style={styles.logo}
        />
        <Text style={styles.brand}>ResiWork®</Text>
        <Text style={styles.title}>REGISTRO</Text>
        <Text style={styles.subtitle}>Completa tu información...</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
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

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={handleResidente}>
            <Text style={styles.buttonText}>Residente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={handleEmpresa}>
            <Text style={styles.buttonText}>Empresa</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('InicioSesion')}>
          <Text style={styles.registerText}>
            ¿Ya tienes cuenta? <Text style={styles.registerLink}>Iniciar Sesión</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

// Estilos
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 40,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },
  brand: {
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#00ace6',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: '100%',
    backgroundColor: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#00ace6',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
  },
  registerLink: {
    color: '#00ace6',
    fontWeight: 'bold',
  },
});

export default Registro;
