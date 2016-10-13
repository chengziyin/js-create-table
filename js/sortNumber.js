// function sortNum(){
var Btn = document.getElementsByTagName('body')[0];
var numberBtn = document.createElement('button');

numberBtn.innerHTML = 'sort Number';
numberBtn.setAttribute('ID','sortNumber');
numberBtn.style.marginTop = '30px';

var object = Btn.appendChild(numberBtn);

var showDiv = document.createElement('div');

numberBtn.onclick = function(){
	
	sortNumberFun();
}


function sortNumberFun(){
	var arr = new Array();	
	showDiv.innerHTML = '';
	var object = Btn.appendChild(showDiv);
	var tdNumber = document.getElementsByTagName('td');
	for(var i = 0; i < tdNumber.length; i ++){
		arr[i] = tdNumber[i].innerHTML;
	}
	arr.sort(numberSort);
	// showDiv.innerHTML = arr;
	var arr2 = '';
	for(var i = 0; i < arr.length; i ++){
		arr2 += arr[i] + '&nbsp;';
	}
	showDiv.innerHTML = arr2;
	showDiv.style.wordBreak = 'break-all';
}

function numberSort(a,b){
	return a - b;
}
