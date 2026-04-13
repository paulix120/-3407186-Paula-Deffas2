// ============================================

// Dominio: Biblioteca Digital
// ============================================

// ============================================
// SECCIÓN 1: Configuración y Constantes
// ============================================

const DOMAIN_NAME = "DIGITAL_LIBRARY";
const VALUE_LABEL = "libros";
const MAX_ITEMS = 1_000;

// ============================================
// SECCIÓN 2: Datos — Array Principal
// ============================================

const items = [
  {
    id: 1,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    year: 1943,
    pages: 96,
    available: true,
    genre: "Ficción",
  },
  {
    id: 2,
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    year: 1967,
    pages: 417,
    available: true,
    genre: "Realismo mágico",
    notes: "Obra icónica colombiana",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    pages: 328,
    available: false,
    genre: "Distopía",
  },
  {
    id: 4,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    year: 1605,
    pages: 863,
    available: true,
    genre: "Clásico",
  },
  {
    id: 5,
    title: "La Odisea",
    author: "Homero",
    year: -700,
    pages: 500,
    available: false,
    genre: "Épico",
  },
  {
    id: 6,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    pages: 464,
    available: true,
    genre: "Tecnología",
    notes: "Recomendado para programadores",
  },
];

// ============================================
// SECCIÓN 3: Funciones CRUD
// ============================================

const addItem = (item) => {
  if (items.length >= MAX_ITEMS) {
    console.log("❌ No se pueden agregar más libros");
    return;
  }
  items.push(item);
  console.log(`✅ Libro agregado: ${item.title}`);
};

const findById = (id) => {
  return items.find((item) => item.id === id);
};

const getActive = () => {
  return items.filter((item) => item.available);
};

const filterByField = (field, value) => {
  return items.filter((item) => item[field] === value);
};

// ============================================
// SECCIÓN 4: Funciones de Análisis
// ============================================

const updateItem = (id, changes) => {
  return items.map((item) =>
    item.id === id ? { ...item, ...changes } : item
  );
};

const calculateStats = (field) => {
  const values = items.map((i) => i[field]);

  const total = values.reduce((acc, val) => acc + val, 0);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const avg = total / values.length;

  return { min, max, avg, total };
};

// ============================================
// SECCIÓN 5: Funciones de Display
// ============================================

const formatItem = (item) => {
  return `[${item.id.toString().padEnd(3)}] 
${item.title.padEnd(25)} 
${item.author.padEnd(20)} 
Año: ${item.year.toString().padEnd(6)} 
Páginas: ${item.pages.toString().padEnd(5)} 
Estado: ${(item.available ? "Disponible" : "Prestado").padEnd(12)} 
Notas: ${item.notes ?? "N/A"}`;
};

const buildReport = () => {
  console.log(`\n📚 REPORTE DE ${DOMAIN_NAME}`);
  console.log("=".repeat(50));

  // listado
  items.forEach((item) => console.log(formatItem(item)));

  console.log("\n--- ESTADO ---");
  const active = getActive();
  console.log(`Disponibles: ${active.length}`);
  console.log(`Prestados: ${items.length - active.length}`);

  console.log("\n--- ESTADÍSTICAS (PÁGINAS) ---");
  const stats = calculateStats("pages");
  console.log(
    `Min: ${stats.min} | Max: ${stats.max} | Promedio: ${stats.avg.toFixed(
      2
    )}`
  );

  console.log("\n--- PROPIEDADES DEL PRIMER LIBRO ---");
  Object.entries(items[0]).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  console.log("\n" + "=".repeat(50));
  console.log(`Total de ${VALUE_LABEL}: ${items.length}`);
};

// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================

console.log("=".repeat(40));
console.log(`  ${DOMAIN_NAME}`);
console.log("=".repeat(40));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}`);
console.log("");

// PRUEBAS

const found = findById(1);
console.log("Encontrado id=1:", found?.title ?? "no encontrado");
console.log("");

const active = getActive();
console.log(`Disponibles: ${active.length}`);
active.forEach((item) => console.log(" ", formatItem(item)));
console.log("");

const filtered = filterByField("genre", "Ficción");
console.log(`Filtro genre=Ficción: ${filtered.length} resultados`);
console.log("");

const updated = updateItem(1, { pages: 120 });
console.log(
  `Actualizado id=1: páginas=${updated.find((i) => i.id === 1)?.pages}`
);
console.log("");

const stats = calculateStats("pages");
console.log(
  `Estadísticas: min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(
    2
  )}`
);
console.log("");

buildReport();

// agregar nuevo libro
addItem({
  id: 7,
  title: "Sempiterno",
  author: "Johana Marcus",
  year: 2024,
  pages: 550,
  available: true,
  genre: "Ficción",
});