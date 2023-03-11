var numbr = 2;
var autoTable = document.getElementById("autoTable");

for(let i = 1; i<11; i++){
	var tString = "<tr><td>" + numbr + "</td><td>" + "x" + "</td><td>" + i + "</td><td>" + "=" + "</td><td>" + numbr*i + "</td></tr>";
	
	autoTable.innerHTML += tString;
}


var showTable = function(){
	autoTable.innerHTML = "";
	var newNumbr = document.getElementById("inpu").value;
	for(let i = 1; i<11; i++){
	var tString = "<tr><td>" + newNumbr + "</td><td>" + "x" + "</td><td>" + i + "</td><td>" + "=" + "</td><td>" + newNumbr*i + "</td></tr>";
	
	autoTable.innerHTML += tString;
}
}


