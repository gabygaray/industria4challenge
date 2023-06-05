import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase/firebase.config";

import { enqueueSnackbar } from "notistack";

export const getRegister = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    enqueueSnackbar("Te has registrado exitosamente", {
      variant: "success",
    });
  } catch (e) {
    console.log(e);
    enqueueSnackbar(
      "Registrado no completado, verifica los datos ingresados.",
      {
        variant: "warning",
      }
    );
  }
};

export const getLogin = async (email: string, password: string) => {
  try {
    const userLogin = await signInWithEmailAndPassword(auth, email, password);
    console.log(userLogin);
  } catch (e) {
    enqueueSnackbar("Email o contraseña incorrecta.", {
      variant: "error",
    });
    console.log(e);
  }
};

export const getLoginWithGoogle = async () => {
  try {
    const userLoginWithGoogle = new GoogleAuthProvider();
    return signInWithPopup(auth, userLoginWithGoogle);
  } catch (e) {
    console.log(e);
    enqueueSnackbar("No se pudo realizar el registro con Google", {
      variant: "error",
    });
  }
};

export const getLogout = async () => {
  try {
    const userLogout = await signOut(auth);
    console.log(userLogout);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
