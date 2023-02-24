/*Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: 
La cantidad de valores negativos ingresados.
La cantidad de valores positivos ingresados.
La cantidad de múltiplos de 15.
El valor acumulado de los números ingresados que son pares */

function analizarNumeros() {
    let negativos = 0;
    let positivos = 0;
    let multiplos15 = 0;
    let acumuladorPares = 0;
  
    for (let i = 1; i <= 10; i++) {
      let valor = parseInt(prompt(`Ingrese el valor ${i}:`));
  
      if (valor < 0) {
        negativos++;
      } else if (valor > 0) {
        positivos++;
      }
  
      if (valor % 15 === 0) {
        multiplos15++;
      }
  
      if (valor % 2 === 0) {
        acumuladorPares += valor;
      }
    }
  
    alert(`Resultados:
    - Cantidad de valores negativos ingresados: ${negativos}
    - Cantidad de valores positivos ingresados: ${positivos}
    - Cantidad de múltiplos de 15: ${multiplos15}
    - Valor acumulado de los números ingresados que son pares: ${acumuladorPares}`);
  }
  