export function addVibration() {
  const botones = document.querySelectorAll(".boton-contenedor");
  const botonClear = document.querySelector(".boton-clear");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      navigator.vibrate(25);
    });
  });
  
  botonClear.addEventListener("click", () => {
    navigator.vibrate(25);
  });
}