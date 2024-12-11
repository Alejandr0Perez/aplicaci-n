import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const FAQScreen = ({ navigation }) => {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    { id: '1', question: '¿Cómo puedo actualizar mi currículum?', answer: 'Para actualizar tu currículum, ve a la sección de perfil y selecciona "Editar Curriculum".' },
    { id: '2', question: '¿Cómo recupero mi contraseña?', answer: 'Para recuperar tu contraseña, selecciona "¿Olvidaste tu contraseña?" en la pantalla de inicio de sesión.' },
    { id: '3', question: '¿A cuántas empresas puedo solicitar residencias?', answer: 'Puedes solicitar residencias a tantas empresas como desees.' },
    { id: '4', question: '¿Cómo puedo eliminar los anuncios?', answer: 'Para eliminar los anuncios, contacta con el soporte técnico.' },
  ];

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.questionContainer}>
        <Text style={styles.questionText}>{item.question}</Text>
        <Text style={styles.expandIcon}>{expanded === item.id ? '▲' : '▼'}</Text>
      </TouchableOpacity>
      {expanded === item.id && (
        <View style={styles.answerContainer}>
          <Text style={styles.answerText}>{item.answer}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>Volver</Text>
      </TouchableOpacity>
      <Text style={styles.title}>PREGUNTAS FRECUENTES...</Text>
      <FlatList
        data={faqs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Text style={styles.footerText}>
        ¡Si necesitas más ayuda, no dudes en contactarte con nosotros!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
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
  itemContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  expandIcon: {
    fontSize: 16,
    color: '#000000',
  },
  answerContainer: {
    paddingVertical: 5,
    paddingLeft: 10,
  },
  answerText: {
    fontSize: 14,
    color: '#555555',
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    color: '#000000',
  },
});

export default FAQScreen;
