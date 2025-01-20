import { fetchUsers } from "../api/usersApi.ts";
import { User } from "../model/model.ts";
import { isNotValidUser } from "./verifyUserUi.ts";

export const verifyUser = async (user: string, password: string) => {
  const users: User[] = await fetchUsers();
  const isValid = users.find(
    (u) => u.email === user && u.password === password
  );

  if (isValid) {
    console.log("Usuario correcto");
    console.log(isValid.email, isValid.password);

    window.location.href = `/userProfile.html?username=${isValid.username}`;
  } else {
    isNotValidUser();
    console.error("Usuario o contraseña incorrecta");
  }
};
