"use strict";
/* Module 3: Implement interfaces in TypeScript
   Lab Start  */
/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanTerms) {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interesRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
let loan = {
    principal: 30000,
    interesRate: 5
};
console.log(calculateInterestOnlyLoanPayment(loan));
/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(loanTerms) {
    // Calculates the monthly payment of a conventional loan
    let interest = loanTerms.interesRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
let conventionalPayment = calculateConventionalLoanPayment({ principal: 30000, interesRate: 5, months: 180 });
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24" 
