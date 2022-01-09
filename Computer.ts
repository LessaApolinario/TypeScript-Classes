class Computer {
  brand: string;
  storage: number;
  isItOn: boolean;
  model: string;

  constructor(brand: string, storage: number, isItOn: boolean, model: string) {
    this.brand = brand;

    if (storage > 0) {
      this.storage = storage;
    }

    this.isItOn = isItOn;
    this.model = model;
  }

  turnOn() {
    this.isItOn = true;

    console.log(`Your ${this.brand} computer is turned on!`);
  }

  turnOff() {
    this.isItOn = false;

    console.log(`Your ${this.brand} computer is turned off!`);
  }

  upgradeStorage(addedStorage: number) {
    this.storage += addedStorage;

    console.log(
      `Your ${this.brand} computer has a new storage of ${this.storage} GB`
    );
  }
}

export default Computer;