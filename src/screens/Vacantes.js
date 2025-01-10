import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SectionList, Modal, ScrollView,Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Asegúrate de instalar esta dependencia
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from './firebaseConfig'; // Asegúrate de tener tu configuración de Firebase aquí

const db = getFirestore(app);


const Vacantes = ({ navigation }) => {
  const [vacante, setVacante] = useState({
    empresa: '',
    ubicacion: '',
    horario: '',
    carreras: '',
    actividad: '',
    espacio: '',
    prestaciones: '',
    requisitos: '',
    masInformacion: '',
  });
  const [darkTheme, setDarkTheme] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [appearanceModalVisible, setAppearanceModalVisible] = useState(false);
  const [favoritos, setFavoritos] = useState({});
  const handleInputChange = (field, value) => {
    setVacante({ ...vacante, [field]: value });
  };

  const guardarVacante = async () => {
    try {
      await addDoc(collection(db, 'vacantes'), vacante);
      Alert.alert('Vacante guardada', 'La vacante se ha guardado correctamente.');
      setModalVisible(false);
      setVacante({
        empresa: '',
        ubicacion: '',
        horario: '',
        carreras: '',
        actividad: '',
        espacio: '',
        prestaciones: '',
        requisitos: '',
        masInformacion: '',
      });
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al guardar la vacante.');
      console.error(error);
    }
  };

  useEffect(() => {
    const loadPreferences = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      const storedFavoritos = await AsyncStorage.getItem('favoritos');
      
      if (storedTheme) {
        setDarkTheme(storedTheme === 'dark');
      }

      if (storedFavoritos) {
        setFavoritos(JSON.parse(storedFavoritos));
      }
    };

    loadPreferences();
  }, []);

  const toggleTheme = async (theme) => {
    setDarkTheme(theme === 'dark');
    await AsyncStorage.setItem('theme', theme); // Guarda la preferencia de tema
    setAppearanceModalVisible(false);
  };

  const toggleFavorito = async (id) => {
    const updatedFavoritos = {
      ...favoritos,
      [id]: !favoritos[id],
    };
    
    setFavoritos(updatedFavoritos);
    await AsyncStorage.setItem('favoritos', JSON.stringify(updatedFavoritos)); // Guarda favoritos en AsyncStorage
  };

  const secciones = [
    {
      title: 'Vacantes Disponibles',
      data: [
        { id: '1', titulo: 'VACANTE: Proyecto fiu', empresa: 'Tecnológico de Mich.', fecha: 'Hace 2 días' },
        { id: '2', titulo: 'VACANTE: Proyecto fiu', empresa: 'Tecnológico de Mich.', fecha: 'Hace 13 días' },
        { id: '3', titulo: 'VACANTE: Proyecto fiu', empresa: 'Tecnológico de Mich.', fecha: 'Hace 1 día' },
        { id: '4', titulo: 'VACANTE: Proyecto fiu', empresa: 'Tecnológico de Mich.', fecha: 'Hace 3 días' },
      ],
    },
  ];

  const dynamicStyles = darkTheme ? darkStyles : lightStyles;

  const renderItem = ({ item }) => (
    <View style={dynamicStyles.vacanteContainer}>
      <TouchableOpacity onPress={() => toggleFavorito(item.id)}>
        <Image
          source={favoritos[item.id] ? require('./assets/estrellaB.png') : require('./assets/estrella.png')}
          style={dynamicStyles.starIcon}
        />
      </TouchableOpacity>
      <View style={dynamicStyles.vacanteInfo}>
        <Text style={dynamicStyles.vacanteTitulo}>{item.titulo}</Text>
        <Text style={dynamicStyles.vacanteEmpresa}>Empresa: {item.empresa}</Text>
        <Text style={dynamicStyles.vacanteFecha}>{item.fecha}</Text>
      </View>
      <Image source={require('./assets/tec.jpeg')} style={dynamicStyles.tecImage} />
      <TouchableOpacity style={dynamicStyles.verMasButton} onPress={() => navigation.navigate('DetalleVacante', { vacante: item })}>
        <Text style={dynamicStyles.buttonText}>VER MÁS</Text>
      </TouchableOpacity>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={dynamicStyles.sectionHeader}>{title}</Text>
  );

  const renderMenu = () => (
    <View style={dynamicStyles.menuContainer}>
      <ScrollView>
        <TouchableOpacity style={dynamicStyles.menuItem}>
          <Image source={require('./assets/fotoP.png')} style={dynamicStyles.menuIcon} />
          <Text style={dynamicStyles.menuText}>Nombre del Usuario</Text>
          <TouchableOpacity style={dynamicStyles.editButton} onPress={() => navigation.navigate('EditarPerfil')}>
            <Text style={dynamicStyles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        {renderMenuItems()}
        
      </ScrollView>
    </View>
  );

  const renderMenuItems = () => {
    const menuItems = [
      { 
        text: 'Notificaciones', 
        icon: require('./assets/notificaciones.png'), 
        action: () => navigation.navigate('NotificationsScreen') // Navega a la pantalla de notificaciones
      },
      { text: 'Mi Curriculum', 
        icon: require('./assets/curriculum.png') ,
        action: () => navigation.navigate('CurriculumScreen'),
      },
      { text: 'Favoritos', 
        icon: require('./assets/favoritos.png'), 
        action: () => navigation.navigate('FavoritosScreen'),
      },
      { text: 'Redes Sociales', 
        icon: require('./assets/redes.png'),
        action: () => navigation.navigate('RedesSocialesScreen'),
      },
      { text: 'Invita a tus amigos',
        icon: require('./assets/invita.png'),
        action: () => navigation.navigate('ShareScreen'),
      },
      { text: 'Apariencia', icon: require('./assets/apariencia.png'), action: () => setAppearanceModalVisible(true) },
      
      { text: 'Plan Suscripción',
        icon: require('./assets/estrellaM.png'),
        action: () => navigation.navigate('SubscriptionScreen'),
      },

      { 
        text: '__________________'
      },
      
      { 
        text: 'Acerca de nosotros', 
        action: () => navigation.navigate('AboutScreen') // Navega a la pantalla "Acerca de Nosotros"
      },
      { 
        text: 'Preguntas Frecuentes', 
        action: () => navigation.navigate('FAQScreen') // Navega a la pantalla "Acerca de Nosotros"
      },
      { 
        text: 'Centro de Ayuda', 
        action: () => navigation.navigate('HelpCenterScreen') // Navega a la pantalla "Acerca de Nosotros"
      },
      { 
        text: 'Ajustes', 
        action: () => navigation.navigate('SettingsScreen') // Navega a la pantalla "Acerca de Nosotros"
      }
  
    ];

    return menuItems.map((item, index) => (
      <TouchableOpacity key={index} style={styles.menuItem} onPress={item.action}>
        <Image source={item.icon} style={styles.menuIcon} />
        <Text style={styles.menuText}>{item.text}</Text>
      </TouchableOpacity>
    ));
  };

  const renderAboutItems = () => {
    const aboutItems = [
    ];

    return aboutItems.map((item, index) => (
      <TouchableOpacity key={index} style={styles.menuItem}>
        <Text style={styles.menuText}>{item}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={dynamicStyles.container}>
      <Image
        source={require('./assets/fondoM.jpeg')}
        style={dynamicStyles.backgroundImage}
        resizeMode="cover"
      />
      <View style={dynamicStyles.header}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={require('./assets/icono.png')} style={dynamicStyles.menuIcon} />
          style={styles.addButton}
        onPress={() => setModalVisible(true)}
        <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <Text style={dynamicStyles.resiworkText}>Resiwork®</Text>
      </View>

      <SectionList
        sections={secciones}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={false}
      />

      <TouchableOpacity style={dynamicStyles.footer} onPress={() => {}}>
        <Text style={dynamicStyles.footerText}>Ayuda y Sugerencia</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
         <ScrollView style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Agregar Vacante</Text>
          <TextInput
            style={styles.input}
            placeholder="Empresa"
            value={vacante.empresa}
            onChangeText={(text) => handleInputChange('empresa', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Ubicación"
            value={vacante.ubicacion}
            onChangeText={(text) => handleInputChange('ubicacion', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Horario"
            value={vacante.horario}
            onChangeText={(text) => handleInputChange('horario', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Carreras (separadas por comas)"
            value={vacante.carreras}
            onChangeText={(text) => handleInputChange('carreras', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Actividad"
            value={vacante.actividad}
            onChangeText={(text) => handleInputChange('actividad', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Espacio"
            value={vacante.espacio}
            onChangeText={(text) => handleInputChange('espacio', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Prestaciones"
            value={vacante.prestaciones}
            onChangeText={(text) => handleInputChange('prestaciones', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Requisitos"
            value={vacante.requisitos}
            onChangeText={(text) => handleInputChange('requisitos', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Más información"
            value={vacante.masInformacion}
            onChangeText={(text) => handleInputChange('masInformacion', text)}
          />
          <TouchableOpacity
            style={styles.saveButton}
            onPress={guardarVacante}
          >
            <Text style={styles.saveButtonText}>Guardar Vacante</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={dynamicStyles.modalBackground}>
          <View style={dynamicStyles.modalContainer}>
            <TouchableOpacity style={dynamicStyles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={dynamicStyles.closeButtonText}>X</Text>
            </TouchableOpacity>
            {renderMenu()}
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={appearanceModalVisible}
        onRequestClose={() => setAppearanceModalVisible(false)}
      >
        <View style={dynamicStyles.modalBackgroundAppearance}>
          <View style={dynamicStyles.appearanceModal}>
            <Text style={dynamicStyles.modalTitle}>Elige un modo de apariencia:</Text>
            <TouchableOpacity onPress={() => toggleTheme('light')} style={dynamicStyles.optionButton}>
              <Text style={dynamicStyles.optionText}>Modo Claro</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleTheme('dark')} style={dynamicStyles.optionButton}>
              <Text style={dynamicStyles.optionText}>Modo Oscuro</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAppearanceModalVisible(false)} style={dynamicStyles.closeButton}>
              <Text style={dynamicStyles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: 'transparent', // Cambiar a transparente para ver la imagen de fondo
  },
  addButton: {
    backgroundColor: '#007BFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    elevation: 5,
  },
  addButtonText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#DC3545',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
    zIndex: 1, // Asegúrate de que el encabezado esté por encima de la imagen de fondo
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  resiworkText: {
    fontSize: 12,
    color: '#000',
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    marginBottom: 10,
  },
  vacanteContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#f7f7f7',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    zIndex: 1, // Asegúrate de que el contenedor de vacante esté por encima de la imagen de fondo
  },
  starIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  vacanteInfo: {
    flex: 1,
    marginBottom: 10, // Espacio entre la información y la imagen
  },
  vacanteTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  vacanteEmpresa: {
    fontSize: 14,
    color: '#555',
  },
  vacanteFecha: {
    fontSize: 12,
    color: '#777',
  },
  tecImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
    marginBottom: 10,
  },
  verMasButton: {
    backgroundColor: '#00ace6',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#00ace6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    color: '#000',
  },
  editButton: {
    marginLeft: 10,
    backgroundColor: '#00ace6',
    borderRadius: 5,
    padding: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  menuSectionTitle: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  modalBackgroundAppearance: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  appearanceModal: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#00ace6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    color: '#000',
    fontSize: 16,
  }
});


const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#ffffff', // Fondo blanco para modo claro
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  resiworkText: {
    fontSize: 12,
    color: '#000', // Texto negro para modo claro
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Encabezado negro para modo claro
    marginTop: 20,
    marginBottom: 10,
  },
  vacanteContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#f7f7f7', // Fondo gris claro
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  starIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  vacanteInfo: {
    flex: 1,
    marginBottom: 10, // Espacio entre la información y la imagen
  },
  vacanteTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Texto negro para modo claro
  },
  vacanteEmpresa: {
    fontSize: 14,
    color: '#555', // Texto gris oscuro para modo claro
  },
  vacanteFecha: {
    fontSize: 12,
    color: '#777', // Texto gris medio para modo claro
  },
  tecImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
    marginBottom: 10,
  },
  verMasButton: {
    backgroundColor: '#00ace6',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // Texto blanco en botones
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#00ace6', // Azul brillante para modo claro
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  footerText: {
    color: '#fff', // Texto blanco en pie de página
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff', // Fondo blanco para el modal
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Texto negro para el botón de cerrar
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    color: '#000', // Texto negro para los ítems del menú
  },
  editButton: {
    marginLeft: 10,
    backgroundColor: '#00ace6',
    borderRadius: 5,
    padding: 5,
  },
  editButtonText: {
    color: '#fff', // Texto blanco para el botón de edición
    fontSize: 12,
  },
  menuSectionTitle: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  appearanceModal: {
    width: '80%',
    backgroundColor: '#fff', // Fondo blanco para el modal de apariencia
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Texto negro para el título del modal
    marginBottom: 15,
  },
  optionButton: {
    backgroundColor: '#00ace6', // Azul para los botones del modal
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  optionText: {
    color: '#fff', // Texto blanco para los botones del modal
    fontSize: 16,
    fontWeight: 'bold',
  },
});


const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#121212', // Fondo oscuro
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.2, // Imagen de fondo tenue para modo oscuro
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff', // Icono en blanco para que resalte
  },
  resiworkText: {
    fontSize: 12,
    color: '#fff', // Texto en blanco
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Texto claro
    marginTop: 20,
    marginBottom: 10,
  },
  vacanteContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#1e1e1e', // Fondo oscuro para las vacantes
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  starIcon: {
    width: 24,
    height: 24,
    tintColor: '#ffd700', // Estrella dorada
  },
  vacanteInfo: {
    flex: 1,
    marginBottom: 10,
  },
  vacanteTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Texto claro
  },
  vacanteEmpresa: {
    fontSize: 14,
    color: '#bbbbbb', // Texto gris claro
  },
  vacanteFecha: {
    fontSize: 12,
    color: '#888888', // Texto gris oscuro
  },
  tecImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  verMasButton: {
    backgroundColor: '#00ace6',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // Texto en blanco
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#00ace6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  footerText: {
    color: '#fff', // Texto en blanco
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo más oscuro
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#1e1e1e', // Fondo oscuro para el modal
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Texto en blanco
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff', // Icono en blanco
  },
  menuText: {
    fontSize: 16,
    color: '#fff', // Texto en blanco
  },
  editButton: {
    marginLeft: 10,
    backgroundColor: '#00ace6',
    borderRadius: 5,
    padding: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  appearanceModal: {
    width: '80%',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Texto en blanco
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#333', // Fondo oscuro para los botones de opción
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  optionText: {
    color: '#fff', // Texto en blanco
    fontSize: 16,
  },
});




export default Vacantes;
