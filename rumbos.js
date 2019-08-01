/**
* Herramientas para crear poligonales basadas en rumbo y distancia

Los rumbos se calculan a partir de cuatro cuadrantes y angulos menores de 90

Ejemplos:  

N 45 E   Coincide con el uso de azimuth y distancia
S 45 W   Se cuenta igual que el azimuth y distancia, salvo que se le suman 180 grados o Pi

N 45 W Se comienza al reves que azimuth, es decir, Pi/2 + en lugar de -


*/

/**
* La funcion de azimutDistancia a coordenadas calcula a partir de un punto de inicio, azimuth y azimutDistancia
 la coordenada del punto indicado.
*/

//const math = require('mathjs')


/**
 * Funcion auxiliar que permite dibujar para un punto de inicio cualquiera la siguiente coordenada basada en un origen, un rumbo y una distancia.
 * 
 * @param {*} x 
 * @param {*} y 
 * @param {*} referencia 
 * @param {*} angulo 
 * @param {*} rumbo 
 * @param {*} distancia 
 */

function siguienteCoordenadaRumboDistancia(x, y, referencia, angulo, rumbo, distancia) {
    distancevector = vectorRumboDistancia(referencia, angulo, rumbo, distancia);
    let new_x = x + distancevector[0];
    let new_y = y + distancevector[1];

    return [new_x, new_y];
}

/**
* Funcion que calculoa el vector de distancia anclado al origen.
*/

function vectorRumboDistancia(referencia, angulo, rumbo, distancia) {

    let vector = vectorRumbo(referencia, angulo, rumbo);
    let new_x = distancia * vector[0];
    let new_y = distancia * vector[1];
    return [new_x, new_y];
}


/**
 * 
 * Function que obtiene el vector unitario de Rumbo a partir de una referencia, un angulo el rumbo E o W
 * @param {*} referencia 
 * @param {*} angulo 
 * @param {*} rumbo 
 */
function vectorRumbo(referencia, angulo, rumbo) {

    let deg = angulo * 0.01745329252;

    if (referencia == 'N' & rumbo == 'E') {
        console.log('vectorRumbo: N' + angulo + ' E');
        let x = Math.cos((Math.PI / 2) - deg);
        let y = Math.sin((Math.PI / 2) - deg);
        return [x, y];

    }
    if (referencia == 'S' & rumbo == 'W') {
        console.log('vectorRumbo: S ' + angulo + ' W');
        let x = Math.cos((3 * Math.PI / 2) - deg);
        let y = Math.sin((3 * Math.PI / 2) - deg);

        return [x, y];


    }
    if (referencia == 'N' & rumbo == 'W') {
        console.log('vectorRumbo: N ' + angulo + ' W');

        let x = Math.cos((Math.PI / 2) + deg);
        let y = Math.sin((Math.PI / 2) + deg);

        return [x, y];

    }
    if (referencia == 'S' & rumbo == 'E') {
        console.log('vectorRumbo S ' + angulo + ' E + ');

        let x = Math.cos((3 * Math.PI / 2) + deg);
        //console.log(x);
        let y = Math.sin((3 * Math.PI / 2) + deg);
        //console.log(x);

        return [x, y];

    }

}


// console.log("---------------------")

// headingVector1 = vectorRumbo('N', 60, 'E');
// headingVector2 = vectorRumbo('N', 60, 'W');
// headingVector3 = vectorRumbo('S', 60, 'W');
// headingVector4 = vectorRumbo('S', 60, 'E');

// console.log("N 30 E: " + headingVector1[0] + " " + headingVector1[1]);
// console.log("N 30 W: " + headingVector2[0] + " " + headingVector2[1]);
// console.log("S 30 W: " + headingVector3[0] + " " + headingVector3[1]);
// console.log("S 30 E: " + headingVector4[0] + " " + headingVector4[1]);