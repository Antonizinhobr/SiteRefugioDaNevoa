document.addEventListener("DOMContentLoaded", () => {
  const flashlight = document.createElement("div");
  flashlight.classList.add("cursor-glow");
  document.body.appendChild(flashlight);

  document.addEventListener("mousemove", (e) => {
    requestAnimationFrame(() => {
      flashlight.style.left = `${e.clientX}px`;
      flashlight.style.top = `${e.clientY}px`;
      flashlight.style.transform = `translate(-50%, -50%)`;
    });
  });

  document.addEventListener("mousedown", () => {
    flashlight.style.opacity = "0.6";
    flashlight.style.width = "100px";
    flashlight.style.height = "100px";
  });

  document.addEventListener("mouseup", () => {
    flashlight.style.opacity = "1"; 
    flashlight.style.width = "150px";
    flashlight.style.height = "150px";
  });

  document.addEventListener("mouseleave", () => {
    flashlight.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    flashlight.style.opacity = "1";
  });
});