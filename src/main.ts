import { verifyUser } from "./verifyUser/verifyUser";

const hamburgerButton = document.querySelector(".hamburger-svc");
const hamburgerMenu = document.querySelector(".toogle-menu");

if (
  hamburgerButton !== null &&
  hamburgerButton !== undefined &&
  hamburgerButton instanceof HTMLImageElement &&
  hamburgerMenu instanceof HTMLElement
) {
  hamburgerButton.addEventListener("click", () => {
    hamburgerMenu.classList.add("active");
  });
}

const closeMenu = document.querySelector(".close-menu");
if (
  closeMenu !== null &&
  closeMenu !== undefined &&
  closeMenu instanceof HTMLImageElement &&
  hamburgerMenu instanceof HTMLElement
) {
  closeMenu.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
  });
}

const closeAnchors = document.querySelectorAll("a");

if (hamburgerMenu instanceof HTMLElement && closeAnchors.length > 0) {
  closeAnchors.forEach((anchor) => {
    if (anchor instanceof HTMLAnchorElement) {
      anchor.addEventListener("click", () => {
        hamburgerMenu.classList.remove("active");
      });
    }
  });
}

const cards = document.querySelectorAll(".card");

// Crear el observador
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible"); // Añadir clase cuando sea visible
      observer.unobserve(entry.target); // Dejar de observar la tarjeta (opcional)
    }
  });
});

// Vincular el observador a cada tarjeta
cards.forEach((card) => {
  observer.observe(card);
});

//Login

const userInputValue = () => {
  const userInput = document.getElementById("user-input-menu");

  if (!userInputValue) {
    throw new Error("Usuario vacío");
  }

  if (
    userInput !== null &&
    userInput !== undefined &&
    userInput instanceof HTMLInputElement
  ) {
    const userName = userInput.value;
    return userName;
  }
};

const passwordInputValue = () => {
  const passwordInput = document.getElementById("password-input-menu");

  if (
    passwordInput !== null &&
    passwordInput !== undefined &&
    passwordInput instanceof HTMLInputElement
  ) {
    const password = passwordInput.value;
    return password;
  }
};

const button = document.getElementById("login-button-menu");
if (
  button !== undefined &&
  button !== null &&
  button instanceof HTMLButtonElement
) {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.querySelector("form");
    const user = userInputValue();
    const password = passwordInputValue();

    if (user && password) {
      verifyUser(user, password);
    } else {
      throw new Error("El usuario o la contraseña están vacíos");
    }
    if (form) {
      form.reset();
    }
  });
}

console.log("Hello PlantiWiki");
