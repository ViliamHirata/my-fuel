var myVehicles = [];
var table;

function vehicle(name){
    this.name = name,
    this.getName = function(){
        return this.name;
    }
}

function addVehicle()
{
    let name=document.getElementById("vehicleNameInput").value;
    var newVehicle = new vehicle(name);
    myVehicles.push(newVehicle);
    updateVehicleList();
}

function updateVehicleList()
{
    let car = myVehicles[myVehicles.length-1];
    let name = car.getName();
    table = document.getElementById("vehicleTable");
    var tr = document.createElement('tr');
    tr.onclick=loadVehicleData;
    var td = document.createElement('td');
    var textNode = document.createTextNode(name);
    td.appendChild(textNode);
    tr.appendChild(td);
    table.appendChild(tr);
    //list.innerHTML = JSON.stringify(myVehicles);
}

function loadVehicleData()
{
    
}