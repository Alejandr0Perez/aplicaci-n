import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// Importa las imágenes locales para los iconos de las redes sociales
import InstagramIcon from './assets/instagram.png';
import TikTokIcon from './assets/tiktok.png';
import FacebookIcon from './assets/facebook.png';

const RedesSocialesScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>Volver</Text>
        </TouchableOpacity>
        <Text style={styles.title}>REDES SOCIALES</Text>
      </View>

      {/* Redes Sociales */}
      <View style={styles.socialContainer}>
        <View style={styles.socialRow}>
          <Image source={InstagramIcon} style={styles.icon} />
          <Text style={styles.socialText}>RESI_WORK</Text>
        </View>
        <View style={styles.socialRow}>
          <Image source={TikTokIcon} style={styles.icon} />
          <Text style={styles.socialText}>RESI_WORK</Text>
        </View>
        <View style={styles.socialRow}>
          <Image source={FacebookIcon} style={styles.icon} />
          <Text style={styles.socialText}>RESI_WORK</Text>
        </View>
      </View>

      {/* Mensaje Final */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>¡Síguenos en redes sociales!</Text>
        <Text style={styles.footerSubText}>¡Y no te pierdas de nuestras actualizaciones y la comunidad!</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 20,
    paddingVertical: 40,
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
  socialContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  socialText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFA500',
    width: '100%',
    borderRadius: 10,
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  footerSubText: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default RedesSocialesScreen;
