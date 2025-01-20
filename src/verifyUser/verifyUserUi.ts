export const isNotValidUser = () => {
  const error = document.getElementById("user-error");
  if (
    error !== null &&
    error !== undefined &&
    error instanceof HTMLParagraphElement
  ) {
    error.innerText = "Usuario o contraseña incorrectos";
  }
};
