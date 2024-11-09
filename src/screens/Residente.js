import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';

const Residente = ({ navigation }) => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  
  const [termsAccepted, setTermsAccepted] = useState(false); // Estado para los términos aceptados

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    const { username, email, phone, password, confirmPassword } = form;

    // Validar campos vacíos
    if (!username || !email || !phone || !password || !confirmPassword) {
      Alert.alert('Por favor completa todos los campos.');
      return;
    }

    // Validar formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Por favor ingresa un correo válido.');
      return;
    }

    // Validar longitud del teléfono (mínimo 10 dígitos)
    if (phone.length < 10) {
      Alert.alert('El teléfono debe tener al menos 10 dígitos.');
      return;
    }

    // Validar longitud de la contraseña (mínimo 8 caracteres)
    if (password.length < 8) {
      Alert.alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      Alert.alert('Las contraseñas no coinciden.');
      return;
    }

    // Validar si se aceptaron los términos y condiciones
    if (!termsAccepted) {
      Alert.alert('Debes aceptar los términos y condiciones.');
      return;
    }

    // Aquí iría la lógica para manejar el registro del residente
    console.log('Usuario:', username);
    console.log('Correo:', email);
    console.log('Teléfono:', phone);
    console.log('Contraseña:', password);

    // Navegar a la vista de confirmación de correo
    navigation.navigate('ConfirmacionCorreo');
  };
  
  return (
    <ImageBackground
      source={require('./assets/imagenF.jpeg')} // Ajusta la ruta de la imagen
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>REGISTRO</Text>
        <Text style={styles.subTitle}>RESIDENTE</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuario/Nombre"
          value={form.username}
          onChangeText={(value) => handleChange('username', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={form.email}
          onChangeText={(value) => handleChange('email', value)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={form.phone}
          onChangeText={(value) => handleChange('phone', value)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={form.password}
          onChangeText={(value) => handleChange('password', value)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          value={form.confirmPassword}
          onChangeText={(value) => handleChange('confirmPassword', value)}
          secureTextEntry
        />

        <View style={styles.termsContainer}>
          <TouchableOpacity onPress={() => setTermsAccepted(!termsAccepted)}>
            <View style={[styles.checkbox, termsAccepted && styles.checkboxChecked]}>
              {termsAccepted && <Text style={styles.checkboxText}>✓</Text>}
            </View>
          </TouchableOpacity>
          <Text style={styles.termsText}>Acepto términos y condiciones</Text>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Registrarse</Text>
        </TouchableOpacity>

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
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#00ace6', // Azul
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#d3d3d3', // Gris
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#00ace6',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#00ace6',
  },
  checkboxText: {
    color: '#fff',
    fontSize: 16,
  },
  termsText: {
    fontSize: 16,
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#00ace6',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
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

export default Residente;