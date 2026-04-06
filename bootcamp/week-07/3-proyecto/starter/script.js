"use strict";

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "Biblioteca Digital";
const VALUE_LABEL = "páginas";

const items = [
  { id: 1, name: "Harry Potter y la Cámara Secreta", category: "ficción", value: 251, active: true },
  { id: 2, name: "Los Juegos del Hambre", category: "ficción", value: 374, active: true },
  { id: 3, name: "El Código Da Vinci", category: "ficción", value: 454, active: false },
  { id: 4, name: "Cosmos", category: "ciencia", value: 384, active: true },
  { id: 5, name: "Armas, gérmenes y acero", category: "historia", value: 480, active: true },
  { id: 6, name: "Algoritmos: Guía práctica", category: "tecnología", value: 320, active: false }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatItem = (book) =>
  `📚 ${book.name} [${book.category}] — ${VALUE_LABEL}: ${book.value}`;

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// Ejemplo: calcular páginas ajustadas (por factor opcional)
const calculateValue = (pages, factor = 1) => pages * factor;

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// Libro válido = disponible
const isValid = (book) => book.active === true;

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatWithDefault = (value, label = VALUE_LABEL, unit = "") => {
  return unit
    ? `${label}: ${value} ${unit}`
    : `${label}: ${value}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\n⚠️  No hay elementos. Agrega datos en la Sección 1.");
} else {
  // --- Listado ---
  console.log("\n📋 Listado:");
  let lineNumber = 1;

  for (const item of items) {
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;

  for (const item of items) {
    if (isValid(item)) {
      validCount++;
    }
  }

  console.log(`\n✅ Libros disponibles: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;

  for (const item of items) {
    totalValue += calculateValue(item.value);
  }

  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);