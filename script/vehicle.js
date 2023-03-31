var myVehicles = [];
var list;

function vehicle(name){
    this.name = name;
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
    list = document.getElementById("vehicleList");
    list.innerHTML = JSON.stringify(myVehicles);
}