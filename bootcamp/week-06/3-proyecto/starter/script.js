// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: [Sistema De Bibliotecas Digitales]
// ============================================
// ============================================
// SECCIÓN 1: Datos del dominio
// ===========================================

// TODO: Define al menos 6 elementos de tu dominio
const items = [

  { name: "Harry Potter y la Cámara Secreta", category: "ficción", value: 251 },
  { name: "Los Juegos del Hambre", category: "ficción", value: 374 },
  { name: "El Código Da Vinci", category: "ficción", value: 454 },
  { name: "Cosmos", category: "ciencia", value: 384 },
  { name: "Armas, gérmenes y acero", category: "historia", value: 480 },
  { name: "Algoritmos: Guía práctica", category: "tecnología", value: 320 }
];

// TODO: Define las categorías relevantes para tu dominio

const categories = ["ficción", "ciencia", "historia", "tecnología"];

const valueLabel = "páginas";
// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO ===");


let lineNumber = 0;

for (const item of items) {
  lineNumber++;
  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: ${item.value}`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================

console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;

  for (const item of items) {
    if (item.category === category) {
      count++;
    }
  }

  console.log(`${category}: ${count} elemento(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio
// ============================================

console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;

for (const item of items) {
  totalValue += item.value;
}

const averageValue = items.length > 0 ? totalValue / items.length : 0;

console.log(`Total ${valueLabel}: ${totalValue}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toFixed(1)}`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================

console.log("=== MÁXIMO Y MÍNIMO ===");

let maxItem = items[0];
let minItem = items[0];

for (const item of items) {
  if (item.value > maxItem.value) {
    maxItem = item;
  }

  if (item.value < minItem.value) {
    minItem = item;
  }
}

console.log(`Libro con MÁS ${valueLabel}: ${maxItem.name} (${maxItem.value})`);
console.log(`Libro con MENOS ${valueLabel}: ${minItem.name} (${minItem.value})`);