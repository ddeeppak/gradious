function loadData() {
    if (!localStorage.getItem('json')) {
      var request = new XMLHttpRequest();
      request.open("GET", "./json/data.json", true);
      request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      request.send();
      request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
          show(request.responseText.toString());
          localStorage.setItem('json', request.responseText);
        }
      };
    } else {
      show(localStorage.getItem('json'));
    }
  }
  
  function show(str) {
    var div = document.getElementById('table');
    div.style.display = 'block';
  
    var jsonArray = JSON.parse(str);
  
    for (var ids in jsonArray) {
      if (ids % 2 == 0)
        color = "#F3F9A7";
      else
        color = "#CAC531";
  
      var rows1 = document.createElement('div');
      rows1.id = "rows";
      div.appendChild(rows1);
  
      for (var id2 in jsonArray[ids]) {
        var rows = document.createElement('div');
        rows.className = "row2";
        rows.style.backgroundColor = color;
        rows1.appendChild(rows);
  
        var columns = document.createElement('span');
        columns.innerHTML = jsonArray[ids][id2].firstName + " " + jsonArray[ids][id2].lastName;
        rows.appendChild(columns);
  
        rows = document.createElement('div');
        rows.className = "row2";
        rows.style.backgroundColor = color;
        rows1.appendChild(rows);
  
        columns = document.createElement('span');
        columns.innerHTML = jsonArray[ids][id2].age;
        rows.appendChild(columns);
  
        rows = document.createElement('div');
        rows.className = "row2";
        rows.style.backgroundColor = color;
        rows1.appendChild(rows);
  
        columns = document.createElement('span');
        columns.innerHTML = jsonArray[ids][id2].mobile;
        rows.appendChild(columns);
  
        rows = document.createElement('div');
        rows.className = "row2";
        rows.style.backgroundColor = color;
        rows1.appendChild(rows);
  
        columns = document.createElement('span');
        columns.innerHTML = id2;
        rows.appendChild(columns);
  
        rows = document.createElement('div');
        rows.className = "row2";
        rows.style.backgroundColor = color;
        rows1.appendChild(rows);
  
        columns = document.createElement('span');
        columns.innerHTML = jsonArray[ids][id2].city;
        rows.appendChild(columns);
      }
    }
  }
  