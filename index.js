let saludo = "* * * * * *  Bienvenido/a al sitio de Programas Profesionales  * * * * * * \n \n            TE PRESENTAMOS NUESTROS PROGRAMAS VIGENTES";
alert(saludo);

class Capacitacion {
    constructor(id, nombre, duracionHoras, precioPorHora) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.duracionHoras = duracionHoras;
        this.precioPorHora = precioPorHora;
        this.precioTotal = this.precioPorHora * this.duracionHoras;
    }
};

const programas = [];
const cursos = [];
const charlas = [];

programas.push(new Capacitacion(1, "Asesor Financiero Certificado", 48, 1500));
programas.push(new Capacitacion(2, "Tu Nuevo Rol", 56, 2000));
programas.push(new Capacitacion(3, "Generación X", 56, 1400));

cursos.push(new Capacitacion(4, "Asociatividad", 24, 1500));
cursos.push(new Capacitacion(5, "Tiempo de Balances", 48, 1000));
cursos.push(new Capacitacion(6, "Proyección Profesional", 48, 1500));

charlas.push(new Capacitacion(7, "Mi Vocación", 2, 1100));
charlas.push(new Capacitacion(8, "Mujeres de vuelta a la profesión", 6, 1600));
charlas.push(new Capacitacion(9, "Mi Primer Estudio", 2, 1500));

console.log(programas);
console.log(cursos);
console.log(charlas);

for (const programa of programas) {
    alert("ID #" + programa.id + " - " + programa.nombre + " " + programa.duracionHoras +" hs." + " $" + programa.precioTotal);
};
for (const curso of cursos) {
    alert("ID #" + curso.id + " - " + curso.nombre + " " + curso.duracionHoras +" hs." + " $" + curso.precioTotal);
};
for (const charla of charlas) {
    alert("ID #" + charla.id + " - " + charla.nombre + " " + charla.duracionHoras +" hs." + " $" + charla.precioTotal);
};

function calcularPrecio(precioTotal, cantidadInscripciones) {
    return (precioTotal * cantidadInscripciones);
};

let capacitacionSeleccionada = parseInt(prompt("Ingrese el ID del Programa que desea inscribirse"));

const programaBuscado = programas.find(programa => programa.id === capacitacionSeleccionada);
const cursoBuscado = cursos.find(curso => curso.id === capacitacionSeleccionada);
const charlaBuscada = charlas.find(charla => charla.id === capacitacionSeleccionada);
console.log("ID #" + capacitacionSeleccionada);

let cantidadInscripciones = parseInt(prompt("Ingrese la cantidad de inscripciones para la capacitación seleccionada:"));
console.log("Inscripciones = " + cantidadInscripciones);

if (capacitacionSeleccionada <= 0) {
    alert("Ingresa un ID valido");
} else if (capacitacionSeleccionada <= 3) {
    alert("El precio final a abonar es: $" + calcularPrecio(programaBuscado.precioTotal, cantidadInscripciones));
    alert("Te dirijimos a la plataforma de pago. \n ¡Gracias por inscribirte!"); 
} else if (capacitacionSeleccionada <= 6) {
    alert("El precio final a abonar es: $" + calcularPrecio(cursoBuscado.precioTotal, cantidadInscripciones));
    alert("Te dirijimos a la plataforma de pago. \n ¡Gracias por inscribirte!");
} else if (capacitacionSeleccionada <= 9) {
    alert("El precio final a abonar es: $" + calcularPrecio(charlaBuscada.precioTotal, cantidadInscripciones));
    alert("Te dirijimos a la plataforma de pago. \n ¡Gracias por inscribirte!");  
} else {
    alert("Ingresa un ID valido");
};



