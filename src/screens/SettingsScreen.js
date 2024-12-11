import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar, Divider } from 'react-native-paper';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Ajustes" />
      </Appbar.Header>

      <View style={styles.content}>
        <Text style={styles.title}>AJUSTES</Text>
        <Text style={styles.updateText}>Última actualización</Text>
        <Text style={styles.date}>El 29 de febrero del 2024</Text>
        <Text style={styles.version}>versión 1.22</Text>

        <Divider style={styles.divider} />

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>• Notificaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>• Ajustes de Privacidad</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>• Términos y condiciones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>• Acerca de nosotros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  updateText: {
    fontSize: 14,
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  version: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  divider: {
    width: '100%',
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  option: {
    marginVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
});

export default SettingsScreen;
