import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Volver</Text>
        </TouchableOpacity>
      </View>

      {/* Título Principal */}
      <Text style={styles.mainTitle}>Acerca de Nosotros</Text>
      <Text style={styles.subtitle}>¡Somos una empresa creada por estudiantes para estudiantes!</Text>

      {/* Sección Misión */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>MISIÓN</Text>
        <Text style={styles.sectionText}>
        “Ser un facilitador e intermediario entre la búsqueda de residencias para los estudiantes con las empresa, mediante una aplicación adaptada para cubrir las necesidades individuales de cada estudiante, brindando la información actualizada para así ayudarlos a conectar y tomar y una decisión certera y segura.”        </Text>
      </View>

      {/* Sección Visión */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>VISIÓN</Text>
        <Text style={styles.sectionText}>
        “Ser el mayor  apoyo de fácil acceso para los estudiantes de nivel superior que estén cursando sus últimos semestres y deseen realizar sus residencias con empresas utilizando herramientas viables para asegurar una vinculación exitosa entre ellos y en el menor tiempo posible a nivel nacional”        </Text>
      </View>

      {/* Sección Valores */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>VALORES</Text>
        <Text style={styles.sectionText}>
        -Honestidad
        -Compromiso
        -Responsabilidad
        -Respeto
        -Confidencialidad
        -Transparencia
        -Colaboración</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 16,
    color: 'black',
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    backgroundColor: '#DCEAFB', // Color de fondo azul claro
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007ACC', // Azul oscuro
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'justify',
  },
});

export default AboutScreen;
