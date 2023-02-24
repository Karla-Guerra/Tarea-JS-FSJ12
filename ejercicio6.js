/*Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo 
siguiente: 
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el 
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino 
es Puerto el Triunfo el descuento será del 15%.*/

function calcularDescuento(origen, destino) {
    let descuento = 0;
    
    if (origen.toLowerCase() === 'palma' && destino.toLowerCase() === 'la costa del sol') {
      descuento = 5;
    } else if (destino.toLowerCase() === 'panchimalco') {
      descuento = 10;
    } else if (destino.toLowerCase() === 'puerto el triunfo') {
      descuento = 15;
    }
    
    return descuento;
  }

 