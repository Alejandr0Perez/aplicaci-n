import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet, ScrollView, Share } from 'react-native';

// Iconos locales (asegúrate de agregar tus propios íconos aquí)
import EmailIcon from './assets/corazon.png';
import SmsIcon from './assets/corazon.png';
import WhatsAppIcon from './assets/corazon.png';
import MoreOptionsIcon from './assets/corazon.png';
import LinkIcon from './assets/enlace.png';

const ShareScreen = ({ navigation }) => {
  const shareLink = async () => {
    try {
      await Share.share({
        message: '', // Deja este campo vacío para abrir el menú de compartir sin contenido.
      });
    } catch (error) {
      Alert.alert("Error", "No se pudo abrir el menú de compartir.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Volver</Text>
        </TouchableOpacity>
      </View>

      {/* Mensaje principal */}
      <Text style={styles.mainText}>¡No olvides invitar a tus amigas a ser parte de esta gran aventura!</Text>

      {/* Opciones de compartir */}
      <View style={styles.shareContainer}>
        <TouchableOpacity onPress={() => Alert.alert("Compartir por", "Abrir aplicación de Email")}>
          <View style={styles.shareRow}>
            <Image source={EmailIcon} style={styles.icon} />
            <Text style={styles.shareText}>EMAIL</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Compartir por", "Abrir aplicación de SMS")}>
          <View style={styles.shareRow}>
            <Image source={SmsIcon} style={styles.icon} />
            <Text style={styles.shareText}>SMS</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Compartir por", "Abrir aplicación de WhatsApp")}>
          <View style={styles.shareRow}>
            <Image source={WhatsAppIcon} style={styles.icon} />
            <Text style={styles.shareText}>WHATSAPP</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Más opciones", "Abrir otras opciones de compartir")}>
          <View style={styles.shareRow}>
            <Image source={MoreOptionsIcon} style={styles.icon} />
            <Text style={styles.shareText}>MÁS OPCIONES...</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={shareLink}>
          <View style={styles.shareRow}>
            <Image source={LinkIcon} style={styles.icon} />
            <Text style={styles.shareText}>Copiar Link</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Mensaje final */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>¡Ayuda a las demás a encontrar sus residencias con ResiWork!</Text>
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
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  shareContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  shareRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  shareText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
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
    color: 'black',
  },
});

export default ShareScreen;
