import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function VacantesScreen() {
  const vacantes = [
    {
      titulo: "Proyecto Calidad",
      fecha: "01/10/2024",
      carreras: ["Ingeniería en Matemática", "Ingeniería Industrial"],
      solicitudes: 48,
      estado: "ACTIVA",
    },
    {
      titulo: "Marketing",
      fecha: "22/03/2024",
      carreras: ["Ingeniería en Gestión"],
      solicitudes: 16,
      estado: "CONCLUIDA",
    },
    {
      titulo: "Proyecto Sistemas",
      fecha: "20/01/2024",
      carreras: ["TICS", "Ingeniería en Sistemas"],
      solicitudes: 5,
      estado: "CONCLUIDA",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>ResiWork</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.tabText}>SOLICITUDES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabTextInactive}>VACANTES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabTextInactive}>SELECCIONADOS</Text>
        </TouchableOpacity>
      </View>

      {/* Vacantes List */}
      <ScrollView contentContainerStyle={styles.vacantesList}>
        {vacantes.map((vacante, index) => (
          <View key={index} style={styles.vacanteCard}>
            <Text style={styles.vacanteTitle}>VACANTE {vacante.titulo}</Text>
            <Text style={styles.vacanteFecha}>Publicada: {vacante.fecha}</Text>
            <Text style={styles.vacanteCarreras}>Carreras:</Text>
            {vacante.carreras.map((carrera, i) => (
              <Text key={i} style={styles.carrera}>{carrera}</Text>
            ))}
            <Text style={styles.solicitudes}>{vacante.solicitudes} solicitudes</Text>
            <Text style={[styles.estado, vacante.estado === "ACTIVA" ? styles.estadoActiva : styles.estadoConcluida]}>
              ESTADO – {vacante.estado}
            </Text>
            <TouchableOpacity style={styles.botonDetalle}>
              <Text style={styles.botonDetalleText}>abrir detalle</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Ayuda - Sugerencias</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#FF6600',
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FF6600',
  },
  tabTextInactive: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#AAAAAA',
  },
  vacantesList: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  vacanteCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  vacanteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  vacanteFecha: {
    fontSize: 12,
    color: '#777777',
  },
  vacanteCarreras: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8,
  },
  carrera: {
    fontSize: 12,
    color: '#777777',
    marginLeft: 10,
  },
  solicitudes: {
    fontSize: 12,
    color: '#555555',
    marginTop: 8,
  },
  estado: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8,
  },
  estadoActiva: {
    color: '#00AA00',
  },
  estadoConcluida: {
    color: '#AA0000',
  },
  botonDetalle: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  botonDetalleText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  footer: {
    padding: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    backgroundColor: '#FF6600',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});
