/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.
    
    TODO: Add and apply a type variable. */
    class DataStore <T> {

        private _data:T[] = new Array<T>(10);
        
        AddOrUpdate(index: number, item: T) {
            if(index >=0 && index <=10) {
                this._data[index] = item;
            } else {
                console.log('Index is greater than 10')
            }
        }

        GetData(index: number) {
            if(index >=0 && index <= 10) {
                if(!this._data[index]){
                    return `Do not exists item for index ${index}`
                }

                return this._data[index];
            } else {
                return `Index is greater than 10`
            }
        }
    }
    
    let cities = new DataStore();

    cities.AddOrUpdate(0, "Mumbai");
    cities.AddOrUpdate(1, "Chicago");
    cities.AddOrUpdate(11, "London");       // item not added
    cities.AddOrUpdate(3, "Tucumán");

    console.log(cities.GetData(1));         // returns 'Chicago'
    console.log(cities.GetData(3));         // returns 'Chicago'
    console.log(cities.GetData(12));        
    
    // TODO Test items as numbers.

    let numbers = new DataStore<number>();
    
    numbers.AddOrUpdate(1, 200);
    numbers.AddOrUpdate(2, 30);
    numbers.AddOrUpdate(4, 40);
    numbers.AddOrUpdate(10, 150);

    console.log(numbers.GetData(1));
    console.log(numbers.GetData(10));
    console.log(numbers.GetData(14));
    console.log(numbers.GetData(4));
    
    // TODO Test items as objects.
    interface Person{
        name: string; 
        age: number;
    }

    let persons = new DataStore<Person>();

    persons.AddOrUpdate(1, { name: "fernando", age: 29 })
    persons.AddOrUpdate(5, { name: "daniel", age: 32 })
    persons.AddOrUpdate(10, { name: "romano", age: 31 })

    console.log(persons.GetData(1));
    console.log(persons.GetData(5));
    console.log(persons.GetData(10));
    console.log(persons.GetData(4));