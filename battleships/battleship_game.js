
// users starting ammo amount
var torpedosLeft = 25;
var board = []

// this function will run when the html on the page is done loading
$(document).ready(function(){
  // begins the function that will create a 10x10 table on the page
  // this for loop will run as long as the number of rows are less than 10
  for (var rowCounter=0; rowCounter<10; rowCounter++) {
    // adds a new row to the table with a id
    $("tbody").append('<tr id="'+ rowCounter +'"></tr>');
    // creates a variable that contains the id of the row
    var newTableRow = $("#" + rowCounter);
    // this for loop is nested inside the row loop
    // creates table data cells inside the row
    for (var colCounter=0; colCounter<10; colCounter++) {
      // Add data cell to row
      newTableRow.append('<td id="' + rowCounter + colCounter + '"></td>');
    }
  } // end rowCounter for-loop

  // for-loop that will run the following code 5 times,.
  for (var i=0; i<5; i++) {
    // random # between 0-9, represents row in table
    var rowIndex = Math.floor(Math.random()*10);
    // random # between 0-9, represents td
    var colIndex = Math.floor(Math.random()*10);
    // random #s are used to target the id of a random cell in the table
    $("#" + rowIndex + colIndex).addClass("ship");
  }
  // function placeShip {
  //   var location
  //   do
  // }
  // start of click function
  // targets the table data cells
  $("td").on("click",
    function() {
      //  once clicked class will only be applied if user has torpedos
      if (torpedosLeft > 0) {
          // class will only be applied if the cell does not already have class
          if (!$(this).hasClass("fire_missiles")) {
            // adds CSS class to the td cells that are clicked
            $(this).addClass("fire_missiles");
            //decrements the torpedo counter
            torpedosLeft--;
            // shows the torpedo counter in the html
            $("#missiles_left").text(torpedosLeft);
            // will run if the clicked cell contains a ship
            if ($(this).hasClass("ship")); {
              // applies the class the the cell is clicked
              $(this).addClass("ship_sunk");
            }
           }
      } else {
        // tells user when they run out of ammo
        $("#missiles_left").text("out of missiles");
      }

    });//end of click function



}); // end ready
