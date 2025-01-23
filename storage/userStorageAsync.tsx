import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "@react-native-google-signin/google-signin";

const USUARIO_KEY = "@usuario:key";

async function saveUser(usuario: User) {
  try {
    await AsyncStorage.setItem(USUARIO_KEY, JSON.stringify(usuario));
    return JSON.stringify(usuario);
  } catch (error) {
    //Error
    console.log("error al guardar: " + error);
    return "Error de sintaxis";
  }
}

async function getUser() {
  try {
    const item = await AsyncStorage.getItem(USUARIO_KEY);
    if (item !== null) {
      return JSON.parse(item);
    }
  } catch (error) {
    // Error retrieving data
    console.log("Error al recuperar:" + error);
    return null;
  }
}

async function deleteUser() {
  try {
    await AsyncStorage.removeItem(USUARIO_KEY);
    const item = await AsyncStorage.getItem(USUARIO_KEY);
    return item == null ? "usuario removido" : "usuario no removido";
  } catch (error) {
    console.log("Error al eliminar" + error);
    return "Error de sintaxis";
  }
}

export { saveUser, getUser, deleteUser };
