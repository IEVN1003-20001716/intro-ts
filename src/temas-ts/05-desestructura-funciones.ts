export interface Producto {
    desc: string; 
    precio: number; 
}

const telefono: Producto = {
    desc: 'sony erickson', 
    precio: 500
};

const table: Producto = {
    desc: 'Samsumg', 
    precio: 500
};

function calcularIVA(producto: Producto[]): number {
    let total = 0; 
    producto.forEach((producto) => {
        total += producto.precio;
    });
    return total * 0.16; 
}

const articulo1 = [telefono, table]; 
const iva1 = calcularIVA(articulo1);
console.log(`IVA: ${iva1}`);

export function calcularIVA2(productos: Producto[]): [number, number] {
    let total = 0; 
    productos.forEach(({ precio }) => {
        total += precio;
    }); 
    return [total, total * 0.16]; 
}

const articulo2 = [telefono, table];
const [total, iva] = calcularIVA2(articulo2); 
console.log(`Total: ${total}`); 
console.log(`IVA: ${iva}`);
