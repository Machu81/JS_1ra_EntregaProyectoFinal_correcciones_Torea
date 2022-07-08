//SALUDO

let saludo = "* * * * * *  Bienvenido/a al sitio de Programas Profesionales  * * * * * * \n \n            TE PRESENTAMOS NUESTROS PROGRAMAS VIGENTES";
alert(saludo);

//Creo la clase de objeto producto como base para cargar los productos 
class Capacitacion {
    constructor(id, nombre, duracionHoras, precioPorHora) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.duracionHoras = duracionHoras;
        this.precioPorHora = precioPorHora;
        this.precioTotal = this.precioPorHora * this.duracionHoras;
    }    
}

//Inicializo los arrays para las categorías 

const PROGRAMAS = [];
const CURSOS = [];
const CHARLAS = [];

//PROGRAMAS
PROGRAMAS.push(new Capacitacion(1, "Asesor Financiero Certificado", 48, 1500));
PROGRAMAS.push(new Capacitacion(2, "Tu Nuevo Rol", 56, 2000));
PROGRAMAS.push(new Capacitacion(3, "Generación X", 56, 1400));

//CURSOS
CURSOS.push(new Capacitacion(4, "Asociatividad", 24, 1500));
CURSOS.push(new Capacitacion(5, "Tiempo de Balances", 48, 1000));
CURSOS.push(new Capacitacion(6, "Proyección Profesional", 48, 1500));

//CHARLAS
CHARLAS.push(new Capacitacion(7, "Mi Vocación", 2, 1100));
CHARLAS.push(new Capacitacion(8, "Mujeres de vuelta a la profesión", 6, 1600));
CHARLAS.push(new Capacitacion(9, "Mi Primer Estudio", 2, 1500));

console.log(PROGRAMAS)
console.log(CURSOS)
console.log(CHARLAS)

//Recorro los arrays para presentar las capacitaciones
for (const PROGRAMA of PROGRAMAS) {
    alert("ID #" + PROGRAMA.id + " - " + PROGRAMA.nombre + " " + PROGRAMA.duracionHoras +" hs." + " $" + PROGRAMA.precioTotal) ;
}
for (const CURSO of CURSOS) {
    alert("ID #" + CURSO.id + " - " + CURSO.nombre + " " + CURSO.duracionHoras +" hs." + " $" + CURSO.precioTotal);
}
for (const CHARLA of CHARLAS) {
    alert("ID #" + CHARLA.id + " - " + CHARLA.nombre + " " + CHARLA.duracionHoras +" hs." + " $" + CHARLA.precioTotal);
}

//Función para calcular el precio final
function calcularPrecio(precioTotal, cantidadInscripciones) {
    return (precioTotal * cantidadInscripciones);
}

//Solicito al usuario el ID de la capacitación 
let capacitacionSeleccionada = parseInt(prompt("Ingrese el ID del Programa que desea inscribirse"));
const PROGRAMA_BUSCADO = PROGRAMAS.find(PROGRAMA => PROGRAMA.id === capacitacionSeleccionada);
const CURSO_BUSCADO = CURSOS.find(CURSO => CURSO.id === capacitacionSeleccionada);
const CHARLA_BUSCADA = CHARLAS.find(CHARLA => CHARLA.id === capacitacionSeleccionada);
console.log("ID #" + capacitacionSeleccionada);

//Solicito al usuario la cantidad de inscripciones
let cantidadInscripciones = parseInt(prompt("Ingrese la cantidad de inscripciones para la capacitación seleccionada:"));
console.log("Inscripciones = " + cantidadInscripciones);

//Salidas indicando el precio final de la inscripción según la capacitación elegida
if (capacitacionSeleccionada <= 0) {
    alert("Ingresa un ID valido");
} else if (capacitacionSeleccionada <= 3) {
    alert("El precio final a abonar es: $" + calcularPrecio(PROGRAMA_BUSCADO.precioTotal, cantidadInscripciones));
    alert("Te dirijimos a la plataforma de pago. \n ¡Gracias por inscribirte!"); 
} else if (capacitacionSeleccionada <= 6) {
    alert("El precio final a abonar es: $" + calcularPrecio(CURSO_BUSCADO.precioTotal, cantidadInscripciones));
    alert("Te dirijimos a la plataforma de pago. \n ¡Gracias por inscribirte!");
} else if (capacitacionSeleccionada <= 9) {
    alert("El precio final a abonar es: $" + calcularPrecio(CHARLA_BUSCADA.precioTotal, cantidadInscripciones));
    alert("Te dirijimos a la plataforma de pago. \n ¡Gracias por inscribirte!");  
} else {
    alert("Ingresa un ID valido");
}



