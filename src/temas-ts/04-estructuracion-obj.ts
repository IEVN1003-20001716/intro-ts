interface Reproductor {
    volumen: number; 
    segundo: number; 
    cancion: string; 
    detalles: Detalles; 
}

interface Detalles {
    autor: string; 
    year: number; 
}

const reproductor: Reproductor = {
    volumen: 50, 
    segundo: 10, 
    cancion: "valiente", 
    detalles: {
        autor: "paty cantu",
        year: 2018
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, year } = detalles;

// Corrección de la interpolación de cadenas
console.log(`El volumen actual es: ${volumen}`);
console.log(`Los segundos son: ${segundo}`);
console.log(`La canción es: ${cancion}`);
console.log(`El autor es: ${autor}`);
console.log(`El año es: ${year}`);

const dbz: string[] = ['Goku', 'Majinbu', 'Babidy', 'Freezer'];
console.log(`Personaje 1: ${dbz[0]}`);
console.log(`Personaje 2: ${dbz[1]}`);
console.log(`Personaje 3: ${dbz[2]}`);
console.log(`Personaje 4: ${dbz[3]}`);

const [a, , b] = dbz; 
console.log(`Persona 1: ${a}`);
console.log(`Persona 3: ${b}`);
