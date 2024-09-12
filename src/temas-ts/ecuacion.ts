
abstract class Figura {
    abstract calcularArea(): number; 
}

class Circulo extends Figura {
    radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio ** 2;
    }
}


class Rectangulo extends Figura {
    ancho: number;
    alto: number;

    constructor(ancho: number, alto: number) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }
}


function mostrarArea(figura: Figura): void {
    console.log(`El área es: ${figura.calcularArea()}`);
}


const circulo = new Circulo(5);  
const rectangulo = new Rectangulo(4, 6);  


mostrarArea(circulo);
mostrarArea(rectangulo);
