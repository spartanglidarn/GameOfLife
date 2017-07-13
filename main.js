//this is where the game logic is executed
var counter = 0;
var cells = [];
var bord = {xAxis:10, yAxis:10};
//main loop that will loop and execute the game logic every time
//start with a 60 fps and see how it preforms
while (counter < 1/* any cells are allice*/){
	
	//creating all the cells
	for(var x = 0; x < 10; x++){
		for (var y = 0; y < 10; y++){
			cells.push(new Cell(x, y, false, "test"))
		}
	}
	var test = cells[1];
	console.log(test.returnCellPosition());

	counter ++;
	console.log("inside main game loop");
}

