import React, { createContext, useReducer } from "react";
import { SignInSuccessResponse } from "@react-native-google-signin/google-signin";
import { deleteUser, saveUser } from "../storage/userStorageAsync";
import { router } from "expo-router";

export enum UsuarioActionType {
  LOGIN = "login",
  LOGOUT = "logout",
}

const initialState: {
  user: SignInSuccessResponse["data"] | null;
} = { user: null };

const UserReducer = (
  state = initialState,
  payload: {
    type: UsuarioActionType;
    data: SignInSuccessResponse["data"] | null;
  }
) => {
  switch (payload.type) {
    case UsuarioActionType.LOGIN:
      console.log("Bienvenidos al sistema");
      if (!payload.data) return state;
      saveUser(payload.data).then((msg) => {
        router.replace("./dashboard/", {
          withAnchor: true,
        });
      });
      return { ...state, user: payload.data, activo: true };

    case UsuarioActionType.LOGOUT:
      deleteUser().then((msg) => {
        console.log(msg);
      });

      return { ...state, user: null, activo: false };
    default:
      return state;
  }
};

const UserContext = createContext<{
  user: SignInSuccessResponse["data"] | null;
  loginAction: React.Dispatch<{
    type: UsuarioActionType;
    data: SignInSuccessResponse["data"] | null;
  }>;
}>({
  user: null,
  loginAction: () => null,
});

function UserProvider({ children }: { children: React.ReactNode }) {
  const [login, loginAction] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ user: login.user, loginAction }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
