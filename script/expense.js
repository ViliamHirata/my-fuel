var myExpenses = [];
var expenseTable;

function expense(fuel_type,fuel_amount,fuel_cost,travelled_distance){
    this.type = fuel_type,
    this.amount = fuel_amount,
    this.cost = fuel_cost,
    this.distance = travelled_distance,
    this.getType = function(){
        return this.type;
    }
    this.getAmount = function(){
        return this.amount;
    }
    this.getCost = function(){
        return this.cost;
    }
    this.getDistance = function(){
        return this.distance;
    }
}

function addExpense()
{
    var newExpense;
    let type = document.getElementById("fuel_type").value;
    let amount = document.getElementById("fuel_amount").value;
    let cost = document.getElementById("fuel_cost").value;
    let distance = document.getElementById("travelled_distance").value;
    if(type!="" && amount!="" && cost!="" && distance!="")
    {
        newExpense = new expense(type,amount,cost,distance);
        myExpenses.push(newExpense);
        updateExpenseTable();
    }
    else{
        alert("There are missing values!");
    }
}

function updateExpenseTable()
{
    let expense = myExpenses[myExpenses.length-1];
    let type = expense.getType();
    let amount = expense.getAmount();
    let cost = expense.getCost();
    let distance = expense.getDistance();
    expenseTable = document.getElementById("expenseTable");
    var tr = document.createElement('tr');
    var tdType, tdAmount, tdCost, tdDistance; 
    tdType = document.createElement('td');
    tdAmount = document.createElement('td');
    tdCost = document.createElement('td');
    tdDistance = document.createElement('td');
    var textType = document.createTextNode(type);
    var textAmount = document.createTextNode(amount);
    var textCost = document.createTextNode(cost);
    var textDistance = document.createTextNode(distance);
    tdType.appendChild(textType);
    tr.appendChild(tdType);
    tdAmount.appendChild(textAmount);
    tr.appendChild(tdAmount);
    tdCost.appendChild(textCost);
    tr.appendChild(tdCost);
    tdDistance.appendChild(textDistance);
    tr.appendChild(tdDistance);
    expenseTable.appendChild(tr);
    //list.innerHTML = JSON.stringify(myExpenses);
}