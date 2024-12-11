import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Importa la imagen local
import CurriculumImage from './assets/curriculum1.png';

const CurriculumScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>Volver</Text>
        </TouchableOpacity>
        <Text style={styles.title}>MI CURRÍCULUM</Text>
        <TouchableOpacity>
          <Text style={styles.editIcon}>✏️</Text>
        </TouchableOpacity>
      </View>

      {/* Curriculum Image */}
      <View style={styles.curriculumContainer}>
        <Image
          source={CurriculumImage} // Imagen local
          style={styles.curriculumImage}
          resizeMode="contain"
        />
        <Text style={styles.pageIndicator}>1 / 2</Text>

        {/* Navigation Arrows */}
        <View style={styles.navigation}>
          <TouchableOpacity>
            <Text style={styles.arrow}>◀️</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.arrow}>▶️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>GUARDAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 16,
    color: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editIcon: {
    fontSize: 18,
  },
  curriculumContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  curriculumImage: {
    width: 300,
    height: 400,
    marginBottom: 10,
    backgroundColor: '#E0E0E0',
  },
  pageIndicator: {
    fontSize: 16,
    marginVertical: 10,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginTop: 10,
  },
  arrow: {
    fontSize: 20,
    color: 'black',
  },
  saveButton: {
    width: '90%',
    padding: 15,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CurriculumScreen;
