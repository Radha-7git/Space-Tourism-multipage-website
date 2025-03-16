
fetch("nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;
    requestAnimationFrame(() => {
      const show = document.getElementById("show");
      const hide = document.getElementById("hide");
      const navbar = document.getElementById("navbar");

      show.addEventListener("click", () => {
        navbar.classList.remove("hidden");
        navbar.classList.add("block");
        show.classList.add("hidden");
      });
      hide.addEventListener("click", () => {
        navbar.classList.remove("block");
        navbar.classList.add("hidden");
        show.classList.remove("hidden");
        show.classList.add("block");
      });
    });
  })
  .catch((error) => console.error("Error loading header:", error));
