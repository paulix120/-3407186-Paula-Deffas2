// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// ============================================

const DOMAIN_NAME = "Biblioteca Digital";
const VALUE_LABEL = "libros";

// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  { id: 1, name: "Harry Potter y la Cámara Secreta", author: "J.K. Rowling", pages: 251, category: "ficción", available: true },
  { id: 2, name: "Los Juegos del Hambre", author: "Suzanne Collins", pages: 374, category: "ficción", available: true },
  { id: 3, name: "El Código Da Vinci", author: "Dan Brown", pages: 454, category: "ficción", available: false },
  { id: 4, name: "Cosmos", author: "Carl Sagan", pages: 384, category: "ciencia", available: true },
  { id: 5, name: "Armas, gérmenes y acero", author: "Jared Diamond", pages: 480, category: "historia", available: true }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  if (removed.length > 0) {
    console.log(`Eliminado por índice: ${removed[0].name}`);
  }
};

const getActiveItems = () => {
  return items.filter(item => item.available === true);
};

const findByName = (name) => {
  return items.find(item => item.name === name);
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.author} — ${item.category} — ${item.pages} páginas — ${item.available ? "Disponible" : "No disponible"}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);

items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// Agregar nuevo libro
addItem({
  id: 6,
  name: "1984",
  author: "George Orwell",
  pages: 328,
  category: "distopía",
  available: true
});

// Agregar prioritario
addPriorityItem({
  id: 0,
  name: "El Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
  category: "fantasía",
  available: true
});

// Eliminar del medio
removeByIndex(2);

// Eliminar último
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");

items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// Buscar libro
const found = findByName("Cosmos");
console.log(found ? `Encontrado: ${formatItem(found)}` : "No encontrado");

// Activos
const activeItems = getActiveItems();
console.log(`Libros disponibles: ${activeItems.length}`);

// Snapshot inmutable
const snapshot = [...items, {
  id: 99,
  name: "Libro Extra",
  author: "Autor X",
  pages: 200,
  category: "otro",
  available: true
}];

console.log("\n--- Transformación con map ---\n");

// Solo nombres
const names = items.map(item => item.name);
console.log("Nombres:", names);

// Páginas con “descuento” (ej: lectura resumida 90%)
const reducedPages = items.map(item => Math.round(item.pages * 0.9));
console.log("Páginas reducidas:", reducedPages);

console.log("\n--- Resumen final ---\n");

console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);