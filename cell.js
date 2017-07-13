var Cell = function(positionX, positionY, isAlive, neighbours){

	var posX = positionX;
	var posY = positionY;
	var isAlive = isAlive;

	function returnCellPosition(){
		var position = {posX: this.posX, posY: this.posY};
		return position;
	};

	function killCell(){
		this.isAlive = false;
	};

	function reviveCell(){
		this.isAlive = true;
	};

	function findCellNeighbours(){
		return //all neighbours
	};
}

