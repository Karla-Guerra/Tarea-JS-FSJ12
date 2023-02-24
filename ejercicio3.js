/* CATEGORIA AUMENTO
A 15%
B 30%
C 10%
D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
Para este ejercicio deberá de asignar las siguientes variables: Nombre, Salario, categoría y 
aumento. Deberá demostrar en html los datos del empleado y el aumento salarial.*/

const categorias = {
    A: 0.15,
    B: 0.3,
    C: 0.1,
    D: 0.2
  };
  
  function calcularAumento(nombre, salario, categoria) {
    const aumento = categorias[categoria];
    const nuevoSalario = salario * (1 + aumento);
    const mensaje = `El empleado ${nombre} con salario actual de $${salario}, tiene un aumento del ${aumento*100}% correspondiente a la categoría ${categoria}. Su nuevo salario es de $${nuevoSalario}.`;
    document.getElementById("resultado").innerHTML = mensaje;
  }
  
  function calcular() {
    const nombre = document.getElementById("nombre").value;
    const salario = Number(document.getElementById("salario").value);
    const categoria = document.getElementById("categoria").value;
    calcularAumento(nombre, salario, categoria);
  }
  