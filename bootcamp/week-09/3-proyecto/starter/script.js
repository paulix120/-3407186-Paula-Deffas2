// ============================================
// CONFIGURACIÓN DEL Sistema de bibliotecas digitales
// ============================================

const DOMAIN_NAME = "Sistema de bibliotecas digitales";
const VALUE_LABEL = "libros";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

const items = [
  {
    id: 1,
    name: "Cien años de soledad",
    author: "Gabriel García Márquez",
    pages: 417,
    available: true,
    editorial: "Sudamericana"
  },
  {
    id: 2,
    name: "1984",
    author: "George Orwell",
    pages: 328,
    available: true
  },
  {
    id: 3,
    name: "El principito",
    author: "Antoine de Saint-Exupéry",
    pages: 96,
    available: false
  },
  {
    id: 4,
    name: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    pages: 863,
    available: true,
    editorial: "Francisco de Robles"
  },
  {
    id: 5,
    name: "La sombra del viento",
    author: "Carlos Ruiz Zafón",
    pages: 565,
    available: false
  },
  {
    id: 6,
    name: "El código Da Vinci",
    author: "Dan Brown",
    pages: 454,
    available: true
  }
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

const inspectItem = (item) => {
  console.log(`Detalle de: ${item.name}`);
  Object.entries(item).forEach(([key, value]) => {
    console.log(`${key.padEnd(12)}: ${value}`);
  });
};

const calculateStats = (numericKey) => {
  const values = items.map(item => item[numericKey]);

  const total = values.reduce((acc, val) => acc + val, 0);
  const promedio = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  console.log("ESTADÍSTICAS");
  console.log(`Total: ${total}`);
  console.log(`Promedio: ${promedio.toFixed(2)}`);
  console.log(`Máximo: ${max}`);
  console.log(`Mínimo: ${min}`);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  console.log(`Autor: ${item.author}`);
  console.log(`Páginas: ${item.pages}`);

  if (Object.hasOwn(item, "editorial")) {
    console.log(`Editorial: ${item.editorial}`);
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

const printAllProperties = (item) => {
  console.log(` Propiedades de "${item.name}":`);

  for (let key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(`${key}: ${item[key]}`);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

const updateItem = (item, changes) => {
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

const getAvailable = () => {
  return items.filter(item => item.available);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const addCalculatedProp = () => {
  return items.map(item => ({
    ...item,
    pagesDouble: item.pages * 2
  }));
};

const sortByNumericProp = (ascending = true) => {
  return [...items].sort((a, b) => {
    return ascending ? a.pages - b.pages : b.pages - a.pages;
  });
};

// ============================================
// REPORTE FINAL
// ============================================

const buildReport = () => {
  console.log("" + "=".repeat(50));
  console.log(` CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  console.log(`Total libros: ${items.length}`);

  const disponibles = getAvailable();
  console.log(`Disponibles: ${disponibles.length}`);

  calculateStats("pages");

  const ordenados = sortByNumericProp();
  console.log(" Libros ordenados por páginas:");
  ordenados.forEach(libro => {
    console.log(`${libro.name} - ${libro.pages} páginas`);
  });

  const max = ordenados[ordenados.length - 1];
  const min = ordenados[0];

  console.log(`Más largo: ${max.name}`);
  console.log(` Más corto: ${min.name}`);

  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(` Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`Total de ${VALUE_LABEL}: ${items.length}`);

inspectItem(items[0]);
calculateStats("pages");
items.forEach(showWithOptionals);
printAllProperties(items[0]);

const actualizado = updateItem(items[0], { pages: 500 });
console.log("\n Actualizado:", actualizado);

console.log("\n Disponibles:", getAvailable());

console.log(" Buscar ID 2:", findById(2));
console.log(" Buscar ID 99:", findById(99));

console.log("Con propiedad calculada:", addCalculatedProp());

console.log(" Ordenados:", sortByNumericProp());

buildReport();