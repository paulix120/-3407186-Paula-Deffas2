// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// Elemento: libro digital

const elementName = "Harry Potter y la Piedra Filosofal";  
const elementStatus = "available";                         
const elementValue = 9.5;                                  
const elementType = "fantasía";                            
const elementInfo = { 
    author: "J.K. Rowling",                               
    publicationYear: 1997,                                 
    language: "español",                                 
    pages: 309                                    
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification;

if (elementValue >= 9) {
    classification = "Excelente";     
} else if (elementValue >= 7) {
    classification = "Bueno";          
} else {
    classification = "Regular";        
}

console.log(`El libro "${elementName}" tiene una clasificación: ${classification}`);


// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

const statusLabel = elementStatus === "available" ? "Disponible" : "No disponible";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel = "Sin tipo";

switch (elementType) {
    case "fantasía":
        typeLabel = "Libro de Fantasía";
        break;
    case "ciencia ficción":
        typeLabel = "Libro de Ciencia Ficción";
        break;
    case "romance":
        typeLabel = "Libro Romántico";
        break;
    case "misterio":
        typeLabel = "Libro de Misterio";
        break;
    default:
        typeLabel = "Tipo desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

const displayName = elementName ?? "Sin nombre";
const infoDetail = elementInfo?.author ?? "Sin información adicional";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = elementInfo?.pages ?? "Número de páginas no disponible";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));

console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Propiedad adicional: ${safeProperty}`);

console.log("=".repeat(40));