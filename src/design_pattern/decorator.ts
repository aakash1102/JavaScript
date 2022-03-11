abstract class Car{
    description:string;
    getDescription():string{
        return this.description;
    }

    public abstract cost(): number;

}

class ModelS extends Car{
    description = "Model S";
    cost():number{
        return 73000;
    }
    
}
class ModelX extends Car{
    description = "Model X";
    cost(){
        return 77000;
    }
}

abstract class CarOption extends Car{
    decoratedCar: Car;        //not undustand 
    constructor(car: Car){
        super();
        this.decoratedCar= car;
    }
    abstract getDescription(): string;
    abstract cost(): number;
}

class EnhancedAutoPilot extends CarOption{
    getDescription(): string {
        return this.decoratedCar.getDescription() + " this is enhanced car";
    }
    cost(): number {
        return this.decoratedCar.cost()+5000;
    }

}
class RearSeatReplaced extends CarOption{
    getDescription(): string {
        return this.decoratedCar.getDescription() + " this is replaced seat car";
    }
    cost(): number {
        return this.decoratedCar.cost()+3000;
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