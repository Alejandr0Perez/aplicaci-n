import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Importa la imagen local para el logo o imagen de la empresa
import EmpresaImage from './assets/tec.jpeg';

const FavoritosScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>Volver</Text>
        </TouchableOpacity>
        <Text style={styles.title}>FAVORITOS</Text>
      </View>

      {/* Favorito Card */}
      <View style={styles.card}>
        <View style={styles.starIcon}>
          <Text style={styles.star}>⭐</Text>
        </View>
        <Image
          source={EmpresaImage} // Imagen de la empresa
          style={styles.companyImage}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.companyName}>Empresa Tecnológico</Text>
          <Text style={styles.companyInfo}>
            Ubicación: <Text style={styles.location}>Ixtapaluca</Text>{"\n"}
            Residencia: semanales por m2{"\n"}
            Carrera: Ing. Arquitectura
          </Text>
          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreButtonText}>Ver más</Text>
          </TouchableOpacity>
          <Text style={styles.daysAgo}>Hace 8 días</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
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
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  star: {
    fontSize: 24,
    color: '#FF9900',
  },
  companyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  companyInfo: {
    fontSize: 12,
    color: '#333',
    marginVertical: 5,
  },
  moreButton: {
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    marginVertical: 10,
  },
  moreButtonText: {
    color: 'white',
    fontSize: 12,
  },
  daysAgo: {
    fontSize: 12,
    color: '#666',
  },
});

export default FavoritosScreen;
