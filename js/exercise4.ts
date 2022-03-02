// interface Vehicle {
//     make: string;
//     color: string;
//     doors: number;
//     accelerate(speed: number): string;
//     brake(): string;
//     turn(direction: 'left' | 'right'): string;
// }

// class Car implements Vehicle{
//     //Propertis
//     private static numberOfCars:number = 0;
//     private _make:string;
//     private _color:string;
//     private _doors:number;

//     //constructor
//     constructor(make:string, color:string, doors:number = 4){
//         this._make = make;
//         this._color = color;
//         this._doors = doors;
//         Car.numberOfCars++;
//     }

//     //Accessors
//     get make() : string {
//         return this._make;
//     }

//     set make(value: string) {
//         this._make = value;
//     }
    
//     get color() : string {
//         return `The color of the car is ${this._color}`;
//     }
    
//     set color(value : string) {
//         this._color = value;
//     }   

//     get doors() : number {
//         return this._doors;
//     }
    
//     set doors(value : number) {
//         if ((value % 2 === 0)) {
//             this._doors = value;
//         }else{
//             throw new Error('Doors must be an even number');
//         }
//     }

//     //Methods
//     accelerate(speed:number) :string
//     {
//         return `${this.worker()} is accelerating to ${speed} MPH.`
//     }

//     brake(): string 
//     {
//         return `${this.worker()} is braking with the standard braking system.`
//     }
    
//     turn(direction: 'left' | 'right'): string 
//     {
//         return `${this.worker()} is turning ${direction}`;
//     }

//     // This function performs work for the other method functions
//     protected worker(): string {
//         return this._make;
//     }

//     public static getNumbersOfCars() :number
//     {
//         return Car.numberOfCars;
//     }
    
// }

// class ElectricCar extends Car{
//     //Propertis
//     private _range:number;

//     //Constructor
//     constructor(make:string, color:string, range: number, doors:number = 2){
//         super(make, color, doors);
//         this._range = range;
//     }

//     //accessors
//     get range() :number
//     {
//         return this._range;
//     }

//     set range(value: number)
//     {
//         this._range = value;
//     }

//     // Methods
//     charge() {
//         console.log(this.worker() + " is charging.")
//     }

//     // Overrides the brake method of the Car class
//     brake(): string {
//         return `${this.worker()}  is braking with the regenerative braking system.`
//     }
// }

// let myCar1 = new Car("Toyota", "Blue", 4);
// let myCar2 = new Car('Galaxy Motors', 'red', 2);
// let myCar3 = new Car('Galaxy Motors', 'red', 2);


// console.log(myCar1.color);
// // console.log(myCar1._color);

// // console.log(myCar2.doors = 3);
// console.log(myCar1.accelerate(35));
// console.log(myCar1.brake());
// console.log(myCar1.turn('right'));

// console.log("Numbers of Cars: ", Car.getNumbersOfCars());

// let spark = new ElectricCar('Spark Motors','silver', 124, 2);
// let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
// console.log(eCar.doors);         // returns the default, 2
// spark.charge();                  // returns "Spark Motors is charging"
// console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"

/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */

/*  EXERCISE 1 */
type sortOrder = "ascending"|"descending";

class BuildArray {
    // TODO Define the properties
    private _items:number;
    private _sortOrder: sortOrder;

    // TODO Define the constructor
    constructor(items:number, sortOrder: sortOrder){
        this._items = items;
        this._sortOrder = sortOrder;
    }

    // TODO Define the accessors
    get items() :number
    {
        return this._items;
    }

    set items(value:number)
    {
        this._items = value;
    }

    get sortOrder() 
    {
        return this._sortOrder;
    }
    
    public set sortOrder(value : sortOrder) {
        this._sortOrder = value;
    }

    // TODO Define the methods

    private sortDescending = (a: number, b: number) :number => {
        if (a > b) {
            return -1;
        } else if (b > a) {
            return 1;
        } else {
            return 0; }
    }

    private sortAscending = (a: number, b: number) :number => {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    }

    buildArray(): number[] {
        let randomNumbers: number[] = [];
        let nextNumber: number;
        for (let counter = 0; counter < this.items; counter++) {
            nextNumber = Math.ceil(Math.random() * (100 - 1));
            if (randomNumbers.indexOf(nextNumber) === -1) {
                randomNumbers.push(nextNumber);
            } else {
                counter--;
            }
        }
        if (this.sortOrder === 'ascending') {
            return randomNumbers.sort(this.sortAscending);
        } else {
            return randomNumbers.sort(this.sortDescending);
        }
    }
}

/*  TODO: Instantiate the BuildArray objects. */

let testArray1 = new BuildArray(12, 'ascending');
let testArray2 = new BuildArray(8, 'descending');
console.log(testArray1.buildArray());
console.log(testArray2.buildArray());