
interface Reproductor{
     volumen:number; 
     segundo:number; 
     cancion: string; 
     detalles:Detalles; 
}

interface Detalles{
    autor: string; 
    year: number; 
}

const reproductor:Reproductor={
    volumen: 50, 
    segundo: 10, 
    cancion: "valiente", 
    detalles:{
        autor:"paty cantu",
        year:2018
    }
}

const{volumen, segundo, cancion, detalles}= reproductor;
const{autor, year} = detalles;

// console.log('El volume actual es: ${reproductor.volumen}');
// console.log('Los segundo son: ${reproductor.segundo}');
// console.log('Los cancion es: ${reproductor.cancion}');
// console.log('Los autor es: ${reproductor.detalles.autor}');
// console.log('El año es: ${reproductor.detalles.year}');

console.log(`El volume actual es: ${volumen}`);
console.log(`Los segundo son: ${segundo}`);
console.log(`Los cancion es: ${cancion}`);
console.log(`Los autor es: ${autor}`);
console.log(`El año es: ${year}`);

const dbz: string[]=['Goku', 'Majinbu', 'Babidy', 'Freezer'];
console.log(`personaje 1 ${dbz[0]}`);
console.log(`personaje 2 ${dbz[1]}`);
console.log(`personaje 3 ${dbz[2]}`);
console.log(`personaje 4 ${dbz[3]}`);

const[a,,b]=dbz; 
console.log(`persona 1 ${a}`);
console.log(`persona 1 ${b}`);





