declare abstract class Car {
    description: string;
    getDescription(): string;
    abstract cost(): number;
}
declare class ModelS extends Car {
    description: string;
    cost(): number;
}
declare class ModelX extends Car {
    description: string;
    cost(): number;
}
declare abstract class CarOption extends Car {
    decoratedCar: Car;
    constructor(car: Car);
    abstract getDescription(): string;
    abstract cost(): number;
}
declare class EnhancedAutoPilot extends CarOption {
    getDescription(): string;
    cost(): number;
}
declare class RearSeatReplaced extends CarOption {
    getDescription(): string;
    cost(): number;
}
declare let modelx: ModelX;
declare let models: ModelS;
