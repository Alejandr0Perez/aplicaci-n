import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioSesion from './src/screens/InicioSesion'; // Asegúrate de la ruta correcta
import Registro from './src/screens/Registro'; // La vista de registro que ya has creado
import Residente from './src/screens/Residente'; // Agrega la vista de residente
import ConfirmacionCorreo from './src/screens/ConfirmacionCorreo'; // Nueva vista de confirmación de correo
import SesionIniciada from './src/screens/SesionIniciada';
import Vacantes from './src/screens/Vacantes'; // Importa la nueva pantalla de Vacantes
import DetalleVacante from './src/screens/DetalleVacante';
import EditarPerfil from './src/screens/EditarPerfil'; // Importa tu nuevo componente
import NotificationsScreen from './src/screens/NotificationsScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InicioSesion">
        <Stack.Screen name="InicioSesion" component={InicioSesion} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Residente" component={Residente} />
        <Stack.Screen name="ConfirmacionCorreo" component={ConfirmacionCorreo} />
        <Stack.Screen name="SesionIniciada" component={SesionIniciada} />
        <Stack.Screen name="Vacantes" component={Vacantes} />
        <Stack.Screen name="DetalleVacante" component={DetalleVacante} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
