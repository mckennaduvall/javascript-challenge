// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
console.log(data);


data.forEach(function(alienSighting) {
    console.log(alienSighting);
    var row = tbody.append("tr");

    Object.entries(alienSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
