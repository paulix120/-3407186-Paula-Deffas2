// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

const DOMAIN_NAME = "Sistema de Bibliotecas Digitales";

const itemName = "Cien años de soledad";

const itemCategory = "Novela";

const itemQuantity = 3500;

const isItemAvailable = true;

const currentBorrower = null;


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Nombre:    ${itemName}`);
console.log(`Categoría: ${itemCategory}`);
console.log(`Cantidad de descargas: ${itemQuantity}`);
console.log(`¿Disponible?: ${isItemAvailable}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

console.log("typeof itemName:     ", typeof itemName);
console.log("typeof itemQuantity: ", typeof itemQuantity);
console.log("typeof isItemAvailable: ", typeof isItemAvailable);
console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

const quantityAsText = String(itemQuantity);
console.log("Cantidad como texto:", quantityAsText);
console.log("typeof (convertido):", typeof quantityAsText);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Valor pendiente:", currentBorrower);
console.log("typeof null:", typeof currentBorrower);
console.log("¿Es null?:", currentBorrower === null);

console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN ");
console.log("===========================");
