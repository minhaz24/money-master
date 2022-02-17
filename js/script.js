/*****************************\
    Function for cost calculation
\*****************************/
function CalculateCost() {
    const totalIncome = document.getElementById('income');
    const incomeValue = totalIncome.value;

    const foodCost = document.getElementById('food-cost');
    const foodCostValue= foodCost.value;

    const rentCost = document.getElementById('rent-cost');
    const rentCostValue= rentCost.value;

    const clothCost = document.getElementById('cloth-cost');
    const clothCostValue= clothCost.value;

    const totalCost = foodCostValue + rentCostValue + clothCostValue;

}

