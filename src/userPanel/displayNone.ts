export const displayNone = () => {
  const plantsSection = document.getElementById("plants-user-section");
  const tipSection = document.querySelector(".name-tip-flex");
  const flexEnd = document.querySelector(".panel-section");
  if (plantsSection && plantsSection instanceof HTMLElement) {
    plantsSection.style.display = "none";
  }
  if (tipSection && tipSection instanceof HTMLDivElement) {
    tipSection.style.display = "none";
  }
  if (flexEnd && flexEnd instanceof HTMLElement) {
    flexEnd.style.justifyContent = "flex-end";
  }
};
