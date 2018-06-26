
 
    
 

    function Add() {

        var name = document.getElementById('name').value;
        var last = document.getElementById('lastname').value;
        var mail = document.getElementById('mail').value;
        if(name && lastname && mail) {
            var tr = document.createElement('tr');

            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
             var td4 = document.createElement('td');
            
            var text1 = document.createTextNode(name);
            var text2 = document.createTextNode(last);
            var text3 = document.createTextNode(mail);
            var text4 = document.createElement("button");
            text4.style.cssText="color: white !important; \
    border: 1px solid red; \
    background-color: red; \
    width: 100px; \
    text-align: center; \
    blabla: 5; \
  ";
            var buttext = document.createTextNode("Удалить");
            var atr = document.createAttribute('onclick');
            atr.value = 'deleteRow(this);';
            text4.appendChild(buttext);
            text4.setAttributeNode(atr);

            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            var table = document.getElementById('table');
            table.appendChild(tr);
           console.log("added");
        }
    }
    function delall() {
        var table = document.getElementById('table');

        for (var i=table.rows.length-1;i>0;i--){
            table.deleteRow(i);
        }
    }
    function deleteRow(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("table").deleteRow(i);
    }