const providers = [
  {
    initials: "MR",
    name: "María Rodríguez",
    category: "Limpieza",
    zone: "Zona 14",
    price: "Limpieza general desde Q150",
    rating: "4.9 ★",
    reviews: "18 reseñas",
    tasks: ["Limpieza general", "Limpieza profunda", "Lavado de baños"],
  },
  {
    initials: "AG",
    name: "Ana García",
    category: "Niñera",
    zone: "Zona 10",
    price: "Cuidado por tarde desde Q180",
    rating: "4.8 ★",
    reviews: "11 reseñas",
    tasks: ["Cuidado por tarde", "Apoyo con tareas", "Cuidado nocturno"],
  },
  {
    initials: "CL",
    name: "Carlos López",
    category: "Plomería",
    zone: "Zona 14",
    price: "Revisión de fuga desde Q125",
    rating: "4.7 ★",
    reviews: "9 reseñas",
    tasks: ["Revisión de fuga", "Cambio de grifo", "Destape básico"],
  },
  {
    initials: "JP",
    name: "José Pérez",
    category: "Electricidad",
    zone: "Zona 10",
    price: "Instalación básica desde Q175",
    rating: "5.0 ★",
    reviews: "7 reseñas",
    tasks: ["Instalación de lámpara", "Cambio de tomacorriente", "Revisión eléctrica"],
  },
];

const providerGrid = document.querySelector("#providerGrid");
const filterButtons = document.querySelectorAll(".filter-button");

function renderProviders(category = "all") {
  const visibleProviders =
    category === "all"
      ? providers
      : providers.filter((provider) => provider.category === category);

  providerGrid.innerHTML = visibleProviders
    .map(
      (provider) => `
        <article class="provider-card">
          <div class="provider-photo">
            <strong>${provider.initials}</strong>
          </div>
          <div class="provider-body">
            <h3>${provider.name}</h3>
            <div class="tag-row">
              <span>${provider.category}</span>
              <span>${provider.zone}</span>
              <span>DPI revisado</span>
            </div>
            <p class="rating">${provider.rating} · ${provider.reviews}</p>
            <p>${provider.tasks.join(" · ")}</p>
            <p class="price">${provider.price}</p>
            <a class="whatsapp-link" href="https://wa.me/50255555555?text=Hola%2C%20vi%20tu%20perfil%20en%20Zona%20Verificada%20y%20quiero%20consultar%20un%20servicio." target="_blank" rel="noreferrer">
              Contactar por WhatsApp
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProviders(button.dataset.filter);
  });
});

renderProviders();
