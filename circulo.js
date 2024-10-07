class circulo {
    constructor(radio) {
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

let miCirculo = new Circulo(5);
console.log("El area del circulo es: ${miCirculo.calcularArea().toFixed(2)}");