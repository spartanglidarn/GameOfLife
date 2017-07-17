function mainFunction(){

	//this is where the game logic is executed
	var counter = 0;
	var cells = [];
	var board = {xAxis:5, yAxis:5};

	//creating all the cells
	for(var x = 0; x < board.xAxis; x++){
		for (var y = 0; y < board.yAxis; y++){
			cells.push(new _cell(x, y, false))
		}
	}

	//main loop that will loop and execute the game logic every time
	//start with a 60 fps and see how it preforms
	//while (/* any cells are allice*/){
	for(var xy = 0; xy < cells.length; xy++){	
		var test = cells[xy];
		test.findNeighbours(board);
		console.log("position x: " + test.posX);
		console.log("position y: " + test.posY);

		for (var xyz = 0; xyz < test.neighbours.length; xyz++){
			console.log("		neighbours: " + test.neighbours[xyz]);
		}
		console.log(" ");
		counter ++;
		
	}
}

//run the js code after the document is loaded to the DOM
var tid = setInterval( function () {
    if ( document.readyState !== 'complete' ) return;;
    clearInterval( tid );       
    mainFunction();
}, 100 );
