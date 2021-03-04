class Vehicle{
    constructor(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year
}
honk(){
    return 'beep';
}
toString(){
    return `The Vehicle is a ${this.make} ${this.model} from ${this.year}`
}
}

class Car extends Vehicle{
  constructor(make,model,year){
      super(make,model,year);
      this.numWheels = 4;
  }
}
class Motorcycle extends Vehicle{
    constructor(make,model,year){
    super(make,model,year);
    this.numWheels = 2;
    }
    revEngine(){
        return 'VROOM!!!';
    }
}

class Garage{
    constructor(cap){
        this.vehicles = [];
        this.cap = cap;
    }
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return 'Sorry only Cars are allowed in here!'
        }
        else if(this.vehicles.length>=this.cap){
            return 'sorry we are full!'
        }
    this.vehicles.push(newVehicle);
    return 'Nice Car!';    

    }
}