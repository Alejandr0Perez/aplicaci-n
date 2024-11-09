import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>NOTIFICACIONES</Text>
        <Text style={styles.headerBrand}>ResiWork</Text>
      </View>

      {/* Icons */}
      <View style={styles.iconContainer}>
        <Ionicons name="notifications-outline" size={48} color="black" />
        <MaterialIcons name="push-pin" size={24} color="black" style={styles.icon} />
        <MaterialIcons name="delete" size={24} color="black" style={styles.icon} />
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.notificationsContainer}>
        <View style={styles.notification}>
          <Text style={styles.title}>Nueva Vacante en...</Text>
          <Text style={styles.description}>tecnologico de zamora</Text>
          <Text style={styles.note}>Aviso muy importante</Text>
          <Text style={styles.date}>Hace 20 días</Text>
        </View>

        <View style={styles.notification}>
          <Text style={styles.title}>Cambiaste contraseña</Text>
          <Text style={styles.description}>Cuida tus contraseñas pues son...</Text>
          <Text style={styles.date}>Hace 25 días</Text>
        </View>

        <View style={styles.notification}>
          <Text style={styles.title}>Actualización mañana</Text>
          <Text style={styles.description}>
            Te informamos que estaremos en mantenimiento de 8 a 7 de la noche por...
          </Text>
          <Text style={styles.date}>Hace 26 días</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    marginLeft: -24, // Adjust to center title
  },
  headerBrand: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  icon: {
    marginHorizontal: 8,
  },
  notificationsContainer: {
    flex: 1,
  },
  notification: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  note: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'right',
  },
});

export default NotificationsScreen;
