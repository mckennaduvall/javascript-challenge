// from data.js
var tableData = data;
console.log(tableData);


// reference table body 
var tbody = d3.select("tbody");
console.log(data);

// 
tableData.forEach(function(alienSighting) {
    console.log(alienSighting);
    var row = tbody.append("tr");

    Object.entries(alienSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});



//select the button
var button = d3.select("#filter-btn");

button.on("click", function(){

    d3.event.preventDefault();
    d3.select("tbody").html("");



//select input date from HTML & get value property
    var input = d3.select("#datetime");
    var inputValue = input.property("value");


//filter data to equal input value 
    var filterData = tableData.filter(tableData => tableData.datetime === inputValue);

    filterData.forEach(function(chosenDate) {
        var row = tbody.append("tr");
        
        Object.entries(chosenDate).forEach(function([key, value]) {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}); 