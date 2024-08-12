import {describe, it, expect} from "vitest"
import {Dni} from "app.js"

describe('Dni Class', () => {
  
  it('should calculate the correct letter for a valid DNI number', () => {
    const dni = new Dni(12345678);
    expect(dni.calculateLetter()).toBe('Z');
  });

  it('should throw an error if the DNI number is negative', () => {
    expect(() => new Dni(-123456)).toThrow('El número de DNI ingresado es incorrecto');
  });

  it('should throw an error if the DNI number is greater than 99999999', () => {
    expect(() => new Dni(100000000)).toThrow('El número de DNI ingresado es incorrecto');
  });

  it('should throw an error if the DNI number is not an integer', () => {
    expect(() => new Dni(1234.567)).toThrow('El número de DNI ingresado es incorrecto');
  });

  it('should return the correct letter using the getter', () => {
    const dni = new Dni(87654321);
    expect(dni.letter).toBe('X');
  });
  
  it('should validate that the remainder calculation is correct', () => {
    const dni = new Dni(30566515);
    expect(dni.calculateLetter()).toBe('K'); 
  });
}); 