import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioSesion from './src/screens/InicioSesion'; // Asegúrate de la ruta correcta
import registro from './src/screens/registro'; // La vista de registro que ya has creado
import Residente from './src/screens/Residente'; // Agrega la vista de residente
import ConfirmacionCorreo from './src/screens/ConfirmacionCorreo'; // Nueva vista de confirmación de correo
import SesionIniciada from './src/screens/SesionIniciada';
import Vacantes from './src/screens/Vacantes'; // Importa la nueva pantalla de Vacantes
import DetalleVacante from './src/screens/DetalleVacante';
import EditarPerfil from './src/screens/EditarPerfil'; // Importa tu nuevo componente
import NotificationsScreen from './src/screens/NotificationsScreen';
import CurriculumScreen from './src/screens/CurriculumScreen';
import FavoritosScreen from './src/screens/FavoritosScreen';
import RedesSocialesScreen from './src/screens/RedesSocialesScreen';
import ShareScreen from './src/screens/ShareScreen';
import AboutScreen from './src/screens/AboutScreen';
import FAQScreen from './src/screens/FAQScreen';
import HelpCenterScreen from './src/screens/HelpCenterScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SubscriptionScreen from './src/screens/SubscriptionScreen';
import empresa from './src/screens/empresa';






const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InicioSesion">
        <Stack.Screen name="InicioSesion" component={InicioSesion} />
        <Stack.Screen name="registro" component={registro} />
        <Stack.Screen name="Residente" component={Residente} />
        <Stack.Screen name="ConfirmacionCorreo" component={ConfirmacionCorreo} />
        <Stack.Screen name="SesionIniciada" component={SesionIniciada} />
        <Stack.Screen name="Vacantes" component={Vacantes} />
        <Stack.Screen name="DetalleVacante" component={DetalleVacante} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
        <Stack.Screen name="CurriculumScreen" component={CurriculumScreen} />
        <Stack.Screen name="FavoritosScreen" component={FavoritosScreen} />
        <Stack.Screen name="RedesSocialesScreen" component={RedesSocialesScreen} />
        <Stack.Screen name="ShareScreen" component={ShareScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="FAQScreen" component={FAQScreen} />
        <Stack.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
        <Stack.Screen name="empresa" component={empresa} />










      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
