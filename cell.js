function _cell (positionX, positionY, isAlive){

	//set Cell attributes
	this.posX = positionX;
	this.posY = positionY;
	this.isAlive = isAlive;
	this.neighbours = [],

	//create function to find the Cell's neighbours
	this.findNeighbours = function (board){
		//collect all directions in array so we can loop them when getting positions of neighbours
		var directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

		//loop all the directions and check at what position every neighbour is at
		var neighbourCount = 0;
		for(var x = 0; x < directions.length; x++){
			//the neighbours position is returnd as a Object with posX and posY 
			var neighbourPositions = getNeighbourPosition(this.posX, this.posY, board, directions[x]);
			
			//only return legit neighbours
			if (neighbourPositions != undefined){
				console.log("	posX: " + neighbourPositions.posX + " posY: " + neighbourPositions.posY);
				neighbourCount ++;
			};	

		};
		this.neighbours.push(neighbourCount);	
	};
};



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
			neighbourPosY = posY - 1;
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

	if(neighbourPosX >=0 && neighbourPosX <= (board.xAxis - 1)){
		if (neighbourPosY >= 0 && neighbourPosY <= (board.yAxis - 1)){
			var position = {posX: neighbourPosX, posY: neighbourPosY};
			return position;
		}
	}

}
