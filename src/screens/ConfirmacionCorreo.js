import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const ConfirmacionCorreo = ({ navigation }) => {
  const [codigo, setCodigo] = useState('');
  const [timer, setTimer] = useState(30);
  
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleResendCode = () => {
    setTimer(30);
    alert('Código reenviado al correo registrado.');
  };

  const handleNext = () => {
    navigation.navigate('InicioSesion');
  };

  return (
    <ImageBackground
      source={require('./assets/imagenF.jpeg')} // Ajusta la ruta de la imagen
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Título ResiWork® */}
        <Text style={styles.brandTitle}>ResiWork®</Text>
        
        {/* Título en azul */}
        <Text style={styles.title}>CONFIRMACIÓN DE CORREO</Text>

        <Text style={styles.infoText}>
          Te hemos enviado un código al correo que elegiste.
        </Text>
        
        <TextInput
          style={styles.input}
          placeholder="Código de 5 caracteres"
          value={codigo}
          onChangeText={(value) => setCodigo(value)}
          maxLength={5}
        />

        <Text style={styles.timerText}>
          {timer > 0 ? `Tiempo restante: ${timer} segundos` : 'Código expirado'}
        </Text>

        <TouchableOpacity 
          style={[styles.resendButton, timer > 0 && styles.resendButtonDisabled]} 
          onPress={handleResendCode}
          disabled={timer > 0}
        >
          <Text style={styles.resendButtonText}>Reenviar código</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Siguiente</Text>
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
  brandTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff',
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#00ace6', // Azul
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
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
  timerText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  resendButton: {
    backgroundColor: '#00ace6',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  resendButtonDisabled: {
    backgroundColor: 'gray',
  },
  resendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#00ace6',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConfirmacionCorreo;
