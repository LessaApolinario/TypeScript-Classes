import Computer from './Computer';

const myComputer = new Computer('Dell', 128, false, 'Inspiron');

// Acessando os atributos da classe Computer
// console.log(myComputer.brand);
// console.log(myComputer.storage);
// console.log(myComputer.isItOn);
// console.log(myComputer.model);

// Acessando os métodos da classe Computer
myComputer.turnOff();
myComputer.turnOn();
myComputer.upgradeStorage(10);
myComputer.upgradeStorage(10);