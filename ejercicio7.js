/*Realizar programa para una web, en el cual el usuario introduce 2 notas y su valor 
ponderado (como cuando un examen vale un 30% y otro examen el 70%). Pulsando el 
botón “Calcula”, la web muestra como resultado la nota media ponderada.*/

function calcularNotaMediaPonderada(nota1, valor1, nota2, valor2) {
    const mediaPonderada = ((nota1 * valor1) + (nota2 * valor2)) / (valor1 + valor2);
    return mediaPonderada;
  }
  