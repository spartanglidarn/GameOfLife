function Cell (positionX, positionY, isAlive, board){

	//set Cell attributes
	this.posX = positionX;
	this.posY = positionY;
	this.isAlive = isAlive;

	this.neighbours = [];
	this.neighbours.push.apply(this.neighbours, findNeighbours(this.posX, this.posY, board));

}

function findNeighbours(posX, posY, board){

	var neighbours = [];
	//collect all directions in array so we can loop them when getting positions of neighbours
	var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
	
	//loop all the directions and check at what position every neighbour is at
	for(var x = 0; x < directions.length; x++){
		
		//the neighbours position is returnd as a array with posX and posY (array insteed of object for easier check of length)
		var neighbourPositions = getNeighbourPosition(posX, posY, board, directions[x])
		
		//only return legit neighbours
		if (neighbourPositions != undefined){
			neighbours.push(neighbourPositions);
		}		
	}

	return neighbours;

}

//direction can be one of the following N, NE, E, SE, S, SW, W, NW
function getNeighbourPosition(posX, posY, board, direction){

	var neighbourPosY = posY;
	var neighbourPosX = posX;

	switch(direction){
		case "N": 
			neighbourPosY = posY - 1;
			break;
		case "NE":
			neighbourPosX = posX + 1;
			neighbourPosY = posY - 0;
			break;
		case "E":
			neighbourPosX = posX + 1;
			break;
		case "SE":
			neighbourPosX = posX + 1;
			neighbourPosY = posY + 1;
			break;
		case "S":
			neighbourPosY = posY + 1;
			break;
		case "SW":
			neighbourPosX = posX - 1;
			neighbourPosY = posY + 1;
			break;
		case "W":
			neighbourPosX = posX - 1;
			break;
		case "NW":
			neighbourPosX = posX - 1;
			neighbourPosY = posY - 1;
	}

	if(((neighbourPosY && neighbourPosX) > 0) && ((neighbourPosY && neighbourPosX) <= board.yAxis)){
		position = {posX: neighbourPosX, posY: neighbourPosY};
		return position;
	}

}
