import{calcularIVA2, Producto} from "./05-desestructura-funciones"

const carrito:Producto[]=[
    {
        desc: 'telefono1', 
        precio: 100
    },
    {
        desc: 'telefono2', 
        precio: 200
    }, 
    {
        desc: 'telefono3', 
        precio: 300
    }
]
const [total, iva] = calcularIVA2(carrito); 
console.log(`Total: ${total}`); 
console.log(`IVA: ${iva}`);

