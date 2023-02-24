/* Se cuenta con la siguiente información: 
Las edades de 5 estudiantes del turno mañana. 
Las edades de 6 estudiantes del turno tarde. 
Las edades de 11 estudiantes del turno noche. 
Nota: Las edades de cada estudiante se deberán ingresar por la web. 
Lo que queremos devolver:
Obtener el promedio de las edades de cada turno (tres promedios).
Imprimir dichos promedios (promedio de cada turno).
Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un 
promedio de edades mayor*/

// Inicializar arrays para almacenar las edades de cada turno
let edadesManana = [];
let edadesTarde = [];
let edadesNoche = [];

// Pedir al usuario que ingrese las edades de los estudiantes de cada turno
for (let i = 0; i < 5; i++) {
  let edad = parseInt(prompt("Ingrese la edad del estudiante del turno mañana " + (i+1)));
  edadesManana.push(edad);
}

for (let i = 0; i < 6; i++) {
  let edad = parseInt(prompt("Ingrese la edad del estudiante del turno tarde " + (i+1)));
  edadesTarde.push(edad);
}

for (let i = 0; i < 11; i++) {
  let edad = parseInt(prompt("Ingrese la edad del estudiante del turno noche " + (i+1)));
  edadesNoche.push(edad);
}

// Calcular promedio de edades de cada turno
let promedioManana = edadesManana.reduce((a, b) => a + b, 0) / edadesManana.length;
let promedioTarde = edadesTarde.reduce((a, b) => a + b, 0) / edadesTarde.length;
let promedioNoche = edadesNoche.reduce((a, b) => a + b, 0) / edadesNoche.length;

// Mostrar los promedios por pantalla
console.log("Promedio de edades turno mañana: " + promedioManana);
console.log("Promedio de edades turno tarde: " + promedioTarde);
console.log("Promedio de edades turno noche: " + promedioNoche);

// Determinar cuál es el mayor promedio y mostrar un mensaje por pantalla
if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
  console.log("El turno mañana tiene el mayor promedio de edades");
} else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
  console.log("El turno tarde tiene el mayor promedio de edades");
} else if (promedioNoche > promedioManana && promedioNoche > promedioTarde) {
  console.log("El turno noche tiene el mayor promedio de edades");
} else {
  console.log("Hay dos o más turnos con el mismo mayor promedio de edades");
}
