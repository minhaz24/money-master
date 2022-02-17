/*****************************\
    Function for cost calculation
\*****************************/
let p = 1;
function CalculateCost() {
    const totalIncome = document.getElementById('income');
    const incomeValue = parseInt(totalIncome.value);

    const foodCost = document.getElementById('food-cost');
    const foodCostValue = parseInt(foodCost.value);

    const rentCost = document.getElementById('rent-cost');
    const rentCostValue = parseInt(rentCost.value);

    const clothCost = document.getElementById('cloth-cost');
    const clothCostValue = parseInt(clothCost.value);

    const totalCost = foodCostValue + rentCostValue + clothCostValue;

    const stillBalance = incomeValue - totalCost;


    if (rentCostValue >= 0 && foodCostValue >=0 && clothCost >=0 && incomeValue>=0){

    }
    else if (rentCostValue < 0 || foodCostValue <0 || clothCost <0 || incomeValue < 0){
        swal("Warning!", "You have enter Negetive Number", "error");
    }
    else{
        swal("Warning!", "You have enter String", "error");
    }

    if (stillBalance < 0) {
        swal("Warning!", "You have Negetive Balance", "error");
    }

    if (stillBalance + totalCost == incomeValue && p == 1) {
        TotalBalance(stillBalance);
        TotalExpense(totalCost, incomeValue);
        p = 0;
    }


}

//SaveBalance

function SaveBalance() {
    const saveIncome = document.getElementById('saving');
    const saveValue = parseInt(saveIncome.value);

    const totalIncome = document.getElementById('income');
    const incomeValue = parseInt(totalIncome.value);

    const totalBalence = document.getElementById('total-balence');
    const balenceValue = parseInt(totalBalence.innerText);

    const saveAmountBalance = (incomeValue * saveValue) / 100;
    SavingAmount(saveAmountBalance);
    RemainingBalance(balenceValue - saveAmountBalance);
}

// Total Expenses

function TotalExpense(expense, incomeValue) {
    const totalExpense = document.getElementById('totalCost');
    const expenseValue = parseInt(totalExpense.innerText);
    totalExpense.innerText = expense + expenseValue;
}

// Total Balance

function TotalBalance(balance) {
    const totalBalence = document.getElementById('total-balence');
    const balenceValue = parseInt(totalBalence.innerText);
    totalBalence.innerText = balance + balenceValue

}

//Saving Amount

function SavingAmount(save) {
    const savingAmount = document.getElementById('saving-amount');
    const savingValue = parseInt(savingAmount.innerText);
    savingAmount.innerText = save;
}

//Remaining Amount

function RemainingBalance(remaining) {
    const remainingBalance = document.getElementById('remaining-balance');
    const remainingValue = parseInt(remainingBalance.innerText);
    remainingBalance.innerText = remaining;
}