// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Precio de multa por día de retraso

const FINE_PER_DAY = 2_000;

// Número máximo de préstamos permitidos
const MAX_LOANS = 3;
//maximo de descargas digitales por día
const MAX_DAILY_DOWNLOADS = 3;
// Duración máxima de un préstamo en días
const LOAN_DAYS = 15;
// Edad mínima para registrarse como usuario
const MIN_USER_AGE = 12;

console.log("Multa por día:", FINE_PER_DAY);
console.log("Máximo de préstamos:", MAX_LOANS);
console.log("Máximo de descargas diarias:", MAX_DAILY_DOWNLOADS);
console.log("Días máximos de préstamo:", LOAN_DAYS);
console.log("Edad mínima de usuario:", MIN_USER_AGE);


// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// Ejemplo: usuario tomó 2 préstamos
const borrowedBooks = 2;

// Restar
const remainingLoans = MAX_LOANS - borrowedBooks;
console.log("Préstamos restantes:", remainingLoans);

// Multiplicar (multa por retraso)
const daysLate = 4;
const totalFine = FINE_PER_DAY * daysLate;
console.log("Multa total por retraso:", totalFine);

// Sumar (descargas del día) 
const morningDownloads = 1;
const afternoonDownloads = 1;
const totalDownloads = morningDownloads + afternoonDownloads;
console.log("Descargas totales hoy:", totalDownloads);

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// dinero acumulado en multas
let totalFines = 0;

console.log("Multas iniciales:", totalFines);

// llega una multa por 2 días tarde
totalFines += FINE_PER_DAY * 2;
console.log("Después de primera multa:", totalFines);

// llega otra multa por 1 día tarde
totalFines += FINE_PER_DAY * 1;
console.log("Después de segunda multa:", totalFines);

// se perdona parte de la multa (se resta)
totalFines -= 1000;
console.log("Después de descuento:", totalFines);

// se aplica recargo del sistema (multiplicación)
totalFines *= 2;
console.log("Después de recargo:", totalFines);

// se divide para calcular promedio entre usuarios
totalFines /= 2;
console.log("Promedio final de multas:", totalFines);
// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// días de retraso de un usuario
const DaysLate = 2;

// verificar si el libro se entregó a tiempo
const isOnTime = DaysLate === 0;
console.log("¿Libro entregado a tiempo?", isOnTime);

// verificar si hay multa
const hasFine = DaysLate > 0;
console.log("¿El usuario tiene multa?", hasFine);

// verificar si alcanzó el máximo de préstamos
const BorrowedBooks = 3;
const reachedLoanLimit = BorrowedBooks === MAX_LOANS;
console.log("¿Alcanzó el límite de préstamos?", reachedLoanLimit);

// verificar si un usuario tiene edad suficiente
const userAge = 14;
const canRegister = userAge >= MIN_USER_AGE;
console.log("¿Puede registrarse en la biblioteca?", canRegister);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// usuario actual
const UserAge = 15;
const borrowedbooks = 2;
const downloadsToday = 1;

// condición con &&
const canBorrowBook = UserAge >= MIN_USER_AGE && borrowedbooks < MAX_LOANS;
console.log("¿Puede pedir un libro?", canBorrowBook);

// condición con ||
const canDownload = downloadsToday < MAX_DAILY_DOWNLOADS || borrowedbooks < MAX_LOANS;
console.log("¿Puede descargar un libro?", canDownload);

// condición con !
const isMinor = !(UserAge >= MIN_USER_AGE);
console.log("¿Es menor que la edad mínima?", isMinor);

console.log("");

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================

console.log("=== Resumen ===");

console.log("Multa total calculada:", totalFine);
console.log("Descargas totales hoy:", totalDownloads);
console.log("Préstamos restantes del usuario:", remainingLoans);
console.log("¿Puede pedir un libro?:", canBorrowBook);
console.log("¿Puede descargar un libro?:", canDownload);

console.log("");
