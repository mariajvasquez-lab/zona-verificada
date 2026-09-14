const providers = [
  {
    name: "María Rodríguez",
    category: "Limpieza",
    zone: "Zona 14",
    image: "limpieza.jpg",
    imageAlt: "Prestadora de limpieza con suministros en un apartamento",
    price: "Limpieza general desde Q150",
    rating: "4.9 ★",
    reviews: "18 reseñas",
    tasks: ["Limpieza general", "Limpieza profunda", "Lavado de baños"],
  },
  {
    name: "Ana García",
    category: "Niñera",
    zone: "Zona 10",
    image: "ninera.jpg",
    imageAlt: "Niñera profesional en una sala con materiales infantiles",
    price: "Cuidado por tarde desde Q180",
    rating: "4.8 ★",
    reviews: "11 reseñas",
    tasks: ["Cuidado por tarde", "Apoyo con tareas", "Cuidado nocturno"],
  },
  {
    name: "Carlos López",
    category: "Plomería",
    zone: "Zona 15",
    image: "plomeria.jpg",
    imageAlt: "Plomero profesional con herramienta junto a un lavamanos",
    price: "Revisión de fuga desde Q125",
    rating: "4.7 ★",
    reviews: "9 reseñas",
    tasks: ["Revisión de fuga", "Cambio de grifo", "Destape básico"],
  },
  {
    name: "José Pérez",
    category: "Electricidad",
    zone: "Zona 16",
    image: "electricidad.jpg",
    imageAlt: "Electricista profesional revisando un tomacorriente",
    price: "Instalación básica desde Q175",
    rating: "5.0 ★",
    reviews: "7 reseñas",
    tasks: ["Instalación de lámpara", "Cambio de tomacorriente", "Revisión eléctrica"],
  },
  {
    name: "Luis Martínez",
    category: "Carpintería",
    zone: "Mixco",
    image: "carpinteria.jpg",
    imageAlt: "Carpintero profesional midiendo madera en un taller",
    price: "Reparación de muebles desde Q220",
    rating: "4.8 ★",
    reviews: "13 reseñas",
    tasks: ["Reparación de muebles", "Instalación de repisas", "Ajuste de puertas"],
  },
  {
    name: "Mario Hernández",
    category: "Albañilería",
    zone: "Carretera a El Salvador",
    image: "albanileria.jpg",
    imageAlt: "Albañil profesional reparando una pared exterior",
    price: "Reparación de pared desde Q250",
    rating: "4.7 ★",
    reviews: "10 reseñas",
    tasks: ["Reparación de pared", "Resane", "Instalación de azulejo"],
  },
  {
    name: "Rosa Jiménez",
    category: "Jardinería",
    zone: "Zona 15",
    image: "jardineria.jpg",
    imageAlt: "Jardinero profesional podando plantas en un jardín residencial",
    price: "Mantenimiento de jardín desde Q175",
    rating: "4.9 ★",
    reviews: "16 reseñas",
    tasks: ["Poda", "Riego y limpieza", "Mantenimiento mensual"],
  },
  {
    name: "Diego Morales",
    category: "Pintura",
    zone: "Villa Nueva",
    image: "pintura.jpg",
    imageAlt: "Pintor profesional sosteniendo un rodillo frente a una pared",
    price: "Pintura de cuarto desde Q350",
    rating: "4.8 ★",
    reviews: "12 reseñas",
    tasks: ["Pintura interior", "Retoques", "Preparación de pared"],
  },
  {
    name: "Andrés Castillo",
    category: "Cerrajería",
    zone: "Antigua Guatemala",
    image: "cerrajeria.jpg",
    imageAlt: "Cerrajero profesional revisando una cerradura residencial",
    price: "Cambio de chapa desde Q180",
    rating: "4.9 ★",
    reviews: "14 reseñas",
    tasks: ["Cambio de chapa", "Apertura de puerta", "Duplicado de llave"],
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
            <img src="${provider.image}" alt="${provider.imageAlt}" loading="lazy" />
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
            <a class="whatsapp-link" href="https://wa.me/50255555555?text=Hola%2C%20vi%20tu%20perfil%20en%20Taski%20y%20quiero%20consultar%20un%20servicio." target="_blank" rel="noreferrer">
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
