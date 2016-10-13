var rowAddBtn = document.getElementById('rowAdd');

var colAddBtn = document.getElementById('colAdd');

var rowV = document.getElementById('row');


var colV = document.getElementById('col');
rowAddBtn.onclick = function(){
 	addNumber(rowV);
}

colAddBtn.onclick = function(){
 addNumber(colV);
}

function addNumber(attr){
	var number = Number(attr.value);
	number += 1;
	attr.value = number;

	var table5 = new Table(rowV.value,colV.value);
	table5.create();
    table5.changeStyle(100);
}