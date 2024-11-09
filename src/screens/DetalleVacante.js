import React, { useState } from 'react';
import { Image, View, Text, Modal, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

const DetalleVacante = ({ route }) => {
  const { vacante } = route.params; // Asegúrate de pasar la vacante seleccionada como parámetro
  const [modalVisible, setModalVisible] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [solicitudEnviada, setSolicitudEnviada] = useState(false); // Nuevo estado para la confirmación

  const handleInputChange = (text) => {
    const words = text.split(/\s+/);
    if (words.length <= 100) {
      setMensaje(text);
      setWordCount(words.length);
    }
  };

  const enviarSolicitud = () => {
    setModalVisible(false);
    setSolicitudEnviada(true); // Mostrar mensaje de confirmación
    setMensaje(''); // Limpiar mensaje
    setWordCount(0); // Reiniciar contador de palabras

    // Mostrar el mensaje solo por unos segundos
    setTimeout(() => {
      setSolicitudEnviada(false);
    }, 3000); // Desaparece después de 3 segundos
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        {/* Título de la vacante */}
        <Text style={styles.headerText}>{vacante.nombre}</Text>

        {/* Mostrar imagen */}
        <Image 
          source={require('./assets/tec.jpeg')}  // Asegúrate de que la ruta sea correcta
          style={styles.image} 
        />

        {/* Información de la vacante */}
        <View style={styles.infoSection}>
          <Text style={styles.infoText}><Text style={styles.bold}>Empresa:</Text> {vacante.empresa}</Text>
          <Text style={styles.infoText}><Text style={styles.bold}>Ubicación:</Text> {vacante.ubicacion}</Text>
          <Text style={styles.infoText}><Text style={styles.bold}>Horario:</Text> {vacante.horario}</Text>
        </View>

        {/* Carreras */}
        <Text style={styles.sectionTitle}>CARRERAS:</Text>
        <View style={styles.carrerasContainer}>
          {Array.isArray(vacante.carreras) && vacante.carreras.length > 0 ? (
            vacante.carreras.map((carrera, index) => (
              <Text key={index} style={styles.carreraText}>{carrera}</Text>
            ))
          ) : (
            <Text style={styles.infoText}>No hay carreras disponibles.</Text>
          )}
        </View>

        {/* Actividad */}
        <Text style={styles.sectionTitle}>ACTIVIDAD:</Text>
        <Text style={styles.infoText}>{vacante.actividad}</Text>

        {/* Prestaciones y más información */}
        <Text style={styles.sectionTitle}>Prestaciones:</Text>
        <Text style={styles.infoText}>{vacante.prestaciones}</Text>
        <Text style={styles.sectionTitle}>Más información:</Text>
        <Text style={styles.infoText}>{vacante.masInformacion}</Text>

        {/* Botón para solicitar */}
        <TouchableOpacity style={styles.buttonContainer} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>MANDAR SOLICITUD</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para enviar la solicitud */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>MENSAJE DE SOLICITUD:</Text>

            {/* Información del usuario */}
            <Text style={styles.modalText}>(Nombre de usuario automático)</Text>
            <Text style={styles.modalText}>(Carrera automática)</Text>

            {/* Área de texto para el mensaje */}
            <TextInput
              style={styles.textInput}
              placeholder="Escriba aquí... (Máx 100 palabras)"
              multiline
              value={mensaje}
              onChangeText={handleInputChange}
              maxLength={1000} // Para asegurar que no se sobrepase el límite de palabras
            />
            <Text style={styles.wordCount}>Palabras: {wordCount}/100</Text>

            {/* Botón para mandar la solicitud */}
            <TouchableOpacity style={styles.closeButton} onPress={enviarSolicitud}>
              <Text style={styles.closeButtonText}>MANDAR SOLICITUD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Mensaje de confirmación después de enviar la solicitud */}
      {solicitudEnviada && (
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>Su solicitud ha sido enviada exitosamente.</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', // Fondo gris claro
    paddingHorizontal: 15,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5, // Sombra para Android
  },
  headerText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoSection: {
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    lineHeight: 22,
  },
  bold: {
    fontWeight: 'bold',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    marginTop: 15,
    textTransform: 'uppercase',
  },
  carrerasContainer: {
    marginBottom: 15,
  },
  carreraText: {
    fontSize: 16,
    color: '#ff7f50', // Naranja más suave
    backgroundColor: '#fff7f0',
    padding: 8,
    borderRadius: 5,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: '500',
  },
  buttonContainer: {
    backgroundColor: '#ff7f50',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    shadowColor: '#ff7f50',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 6, // Sombra para Android
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  textInput: {
    height: 100,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  wordCount: {
    alignSelf: 'flex-end',
    marginBottom: 10,
    fontSize: 12,
    color: '#888',
  },
  closeButton: {
    backgroundColor: '#ff7f50',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmationContainer: {
    position: 'absolute',
    top: '40%',  // Para colocarlo más cerca del centro vertical de la pantalla
    left: '10%', // Centrando horizontalmente
    right: '10%',
    padding: 20,
    backgroundColor: '#e7ffe7',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 10, // Para que el mensaje flote sobre otros elementos
    zIndex: 9999,  // Asegura que el mensaje esté encima de todo
  },
  confirmationText: {
    fontSize: 18,
    color: '#008000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DetalleVacante;
