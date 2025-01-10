import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Ajusta la ruta si es necesario

export const agregarVacante = async (vacante) => {
  try {
    const docRef = await addDoc(collection(db, "vacantes"), vacante);
    console.log("Vacante agregada con ID: ", docRef.id);
    Alert.alert("Éxito", "Vacante agregada correctamente.");
  } catch (error) {
    console.error("Error al agregar la vacante: ", error);
    Alert.alert("Error", "Hubo un problema al guardar la vacante.");
  }
};
