interface Subject {
    registerObserver(o: Observer): any;
    removeObserver(o: Observer): any;
    notifyObservers(): any;
}
interface Observer {
    update(temperature: number): any;
}
declare class WeatherStation implements Subject {
    observers: Observer[];
    temperature: number;
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObservers(): void;
    setTemperature(temp: number): void;
}
declare class TemperatureDisplay implements Observer {
    private subject;
    constructor(weatherStation: Subject);
    update(temperature: number): void;
}
declare class Fan implements Observer {
    private subject;
    constructor(weatherStation: Subject);
    update(temperature: number): void;
}
declare let weatherStation: WeatherStation;
declare let tempDisplay: TemperatureDisplay;
declare let fan: Fan;
