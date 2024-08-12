const letterDni = [
    "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"
  ];
  
  export class Dni {
    constructor(num) {
      this._validateNumber(num);
      this.num = num;
    }
  
    _validateNumber(num) {
      if (!Number.isInteger(num) || num < 0 || num > 99999999) {
        throw new Error("El número de DNI ingresado es incorrecto. Debe ser un entero entre 0 y 99,999,999.");
      }
    }
  
    get letter() {
      const remainder = this.num % 23;
      return letterDni[remainder];
    }
  
    calculateLetter() {
      console.log(
        `Número: ${this.num}, Resto: ${this.num % 23}, Letra: ${this.letter}`
      );
      return this.letter;
    }
  }