/* Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente: 
Examen =20%
Tareas = 40%
Asistencia = 10%
Investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.*/ 

function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    const notaFinal = examen * 0.2 + tareas * 0.4 + asistencia * 0.1 + investigacion * 0.3;
    console.log(`Nombre: ${nombre}`);
    console.log(`Carnet: ${carnet}`);
    console.log(`Nota final: ${notaFinal}`);
  }

  