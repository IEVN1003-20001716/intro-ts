
interface Alumno{
    nombre: string; 
    edad:number; 
    email:string; 
    calificacion?: number; 
}

const alumno: Alumno = {
    nombre: 'mario',
    edad:23, 
    email: 'mario@gmail.com',
}

console.table(alumno); 

let mascotas=['perro', 'gato', 'perico']
mascotas[1]='Nuevo gato'; 
mascotas.push('leon'); 
console.log(mascotas); 

//definiendo un array con dos tipos de datos 
let tem:(string|number)[]=[]; 
tem.push(11); 
tem.push('bola'); 
console.log(tem);



