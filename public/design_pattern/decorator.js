class Car {
    getDescription() {
        return this.description;
    }
}
class ModelS extends Car {
    constructor() {
        super(...arguments);
        this.description = "Model S";
    }
    cost() {
        return 73000;
    }
}
class ModelX extends Car {
    constructor() {
        super(...arguments);
        this.description = "Model X";
    }
    cost() {
        return 77000;
    }
}
class CarOption extends Car {
    constructor(car) {
        super();
        this.decoratedCar = car;
    }
}
class EnhancedAutoPilot extends CarOption {
    getDescription() {
        return this.decoratedCar.getDescription() + " this is enhanced car";
    }
    cost() {
        return this.decoratedCar.cost() + 5000;
    }
}
class RearSeatReplaced extends CarOption {
    getDescription() {
        return this.decoratedCar.getDescription() + " this is replaced seat car";
    }
    cost() {
        return this.decoratedCar.cost() + 3000;
    }
}
let modelx = new ModelX();
modelx = new EnhancedAutoPilot(modelx);
modelx = new RearSeatReplaced(modelx);
console.log(modelx.cost());
console.log(modelx.getDescription());
let models = new ModelS();
models = new RearSeatReplaced(models);
console.log(models.cost());
console.log(models.getDescription());
