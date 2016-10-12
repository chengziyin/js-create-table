
var Btn = document.getElementsByTagName('body')[0];
var oDiv = document.createElement('div');
var object = Btn.appendChild(oDiv);

    function Table(row,col){
        this.row = row;
        this.col = col;

    }

    Table.prototype.color = '#f00';
    Table.prototype.backgroundColorColor = '#ccc';

    Table.prototype.create = function(){

        var result = '';
        result += "<table>";

        result += "<caption>";

        result += '随机数组表';

        result += "</caption>";

       for (var i = 0; i < this.row; i ++){
           result += "<tr>";
           for(var j = 0; j < this.col; j ++){
               result += "<td>";
              result += parseInt(Math.random() * 100);
               result += "</td>";
           }
           result += "</tr>";
       }


       result += "</table>";
        oDiv.innerHTML = result;
        oDiv.style.marginTop = '40px';
    }

    Table.prototype.changeStyle = function(width){
        var tab = document.getElementsByTagName('table')[0];
        tab.onmouseover = function(){
        	this.title = '显示m行n列的随机数，背景色为红色的表示能被10整除';
        }

       
        tab.style.borderCollapse = 'Collapse';
        var td = document.getElementsByTagName('td');

        for(var i = 0; i < td.length; i ++){
            td[i].style.border = '2px solid #000';
            td[i].width = width + 'px';

            if(td[i].innerHTML % 10 == 0 ){
            	td[i].style.color = "#fff";
            	td[i].style.backgroundColor = "#f00";
            	td[i].style.opacity = '.5';
            	td[i].onmouseover = function(){
            		this.title = '这个数是十的倍数' + this.innerHTML;
            	}
            }
        }

    }

    var Bc = document.getElementById('btn');

    Bc.onclick = function(){
        var rowN = document.getElementById('row');
        var rowNum = Number(rowN.value);
        var colN = document.getElementById('col');
        var colNum = colN.value;
	    	if(rowNum == '' || colNum == ''){
	    		oDiv.innerHTML = '';
	    		return;
	    	}
        if(oDiv.innerHTML == '') {
            var table = new Table(rowNum, colNum);
            table.create();
            table.changeStyle(100);
        }else{
            oDiv.innerHTML = '';
            var table2 = new Table(rowNum, colNum);
            table2.create();
            table2.changeStyle(100);
        }

    }

    var colorBtn = document.getElementById('changeColor');
    colorBtn.onclick = function(){
    	var showC = document.getElementById('showColor').value;
    	var td2 = document.getElementsByTagName('td');
    	for(var i = 0; i < td2.length; i ++){
    		td2[i].style.borderColor = showC;
    	}
    }