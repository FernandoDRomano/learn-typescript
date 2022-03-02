/* Module 4: Develop typed functions using TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare a new function type for the sortDescending and sortAscending functions. */
        
    type orderFunction = (x:number, y:number) => number;

    /*  sortDescending is a comparison function that tells the sort method how to sort 
    numbers in descending order */
    function sortDescending(a:number, b:number) :number
    {
        if (a > b) {
            return -1;
        } else if (b > a) {
            return 1;
        } else {
            return 0;
        }
    }
    
    /*  sortDescending is a comparison function that tells the sort method how to sort 
        numbers in ascending order. */
    function sortAscending(a:number, b:number) :number
    {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    }    
    
/*  TODO: Convert the sortDescending and sortAscending functions to arrow 
    functions. */

    const sortDescendingF:orderFunction = (a, b)  =>
    {
        if (a > b) {
            return -1;
        } else if (b > a) {
            return 1;
        } else {
            return 0;
        }
    }

    const sortAscendingF:orderFunction = (a, b)  =>
    {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    }

/*  The buildArray function builds an array of unique random numbers containing the number 
    of items based on the number passed to it. The sortOrder parameter determines 
    whether to sort the array in ascending or descending order. */

/*  TODO: Update the BuildArray function. */
    function buildArray(items:number, sortOrder: "ascending" | "descending") :number[]
    {
        let randomNumbers :number[] = [];
        let nextNumber:number;

        for (let counter = 0; counter < items; counter++) {
            nextNumber = Math.ceil(Math.random() * (100 - 1));
            if (randomNumbers.indexOf(nextNumber) === -1) {
                randomNumbers.push(nextNumber);
            } else {
                counter--;
            }
        }
        
        if (sortOrder === 'ascending') {
            return randomNumbers.sort(sortAscendingF);
        } else {
            return randomNumbers.sort(sortDescendingF);
        }
    }

    let myArray1 = buildArray(12, 'ascending');
    let myArray2 = buildArray(8, 'descending');

    console.log("ascending", myArray1);
    console.log("descending", myArray2);

/*  EXERCISE 2
    TODO: Update the LoanCalculator function. */
    function loanCalculator (principle:number, interestRate:number, months:number = 12) :number
    {
        let interest:number = interestRate / 1200;   // Calculates the monthly interest rate
        let payment:number;
        payment = principle * interest / (1 - (Math.pow(1/(1 + interest), months)));
        
        return Number (payment.toFixed(2));
    }

    let myLoan = loanCalculator(1000, 5);
    console.log(myLoan);
    