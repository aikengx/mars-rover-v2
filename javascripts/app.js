// Rover Object Goes Here
// ======================
var rover = {
	direction: "N",
	position: [0, 0],
	travelLog: "0,0 "
};
// ======================
var coordinates = ["N", "S", "E", "W"];

var grid = [10, 10];

var edge = "Edge of the grid, please turn around";

function test(){
	console.log("TEST!");
}


function commandSequence(cmd) {
	console.log("Initializing command sequence");
	for (var i = 0; i < cmd.length; i++){
		console.log(cmd[i]);
		switch(cmd[i]) {
			case "f":
				moveForward(rover);
			break;
			case "r":
				turnRight(rover);
			break;
			case "l":
				turnLeft(rover);
			break;
		}
	}
} 


function turnLeft(rover){
  	console.log("turnLeft was called!");
  	switch(rover.direction) {
  		case "N":
  			rover.direction = coordinates[3];
  			console.log(rover.direction);
  		break;
  		case "W":
  			rover.direction = coordinates[1];
  			console.log(rover.direction);
  		break;
  		case "S":
  			rover.direction = coordinates[2];
  			console.log(rover.direction);
  		break;
  		case "E":
  			rover.direction = coordinates[0];
  			console.log(rover.direction);
  		break;
  		}
  	}


function turnRight(rover){
	console.log("turnRight was called!");
	switch(rover.direction) {
  		case "N":
  			rover.direction = coordinates[2];
  			console.log(rover.direction);
  		break;
  		case "W":
  			rover.direction = coordinates[0];
  			console.log(rover.direction);
  		break;
  		case "S":
  			rover.direction = coordinates[3];
  			console.log(rover.direction);
  		break;
  		case "E":
  			rover.direction = coordinates[1];
  			console.log(rover.direction);
  		break;
  		}
  	}


function gridX() {
  var arrayX = [];
	for (var i = 1; i <= (grid[0] - 1); i++) {
		arrayX.push(i);
	}
	return arrayX;
}


function gridY() {
  var arrayY = [];
	for (var i = 1; i <= (grid[1] - 1); i++) {
		arrayY.push(i);
	}
	return arrayY;
}


function moveForward(rover){
  console.log("moveForward was called")
	xMax = gridX();
	yMax = gridY();
	if (rover.direction[0] == 0 && rover.direction == 0) {
		switch(rover.direction) {
			case "N":
			case "W":
				console.log(edge);
			break;
			case "S":
				rover.position[0]++;
			break;
			case "E":
				rover.position[1]++;
			break;
		}
		console.log(rover.position);
	} else if (rover.direction[0] == 0 && rover.direction[1] == (grid[1] - 1)) {
		switch(rover.direction) {
			case "S":
			case "W":
				console.log(edge);
			break;
			case "N":
				rover.position[0]--;
			break;
			case "E":
				rover.position[1]++;
			break;
		}
		console.log(rover.position);
	} else if (rover.direction[0] == (grid[0] - 1) && rover.direction[1] == 0) {
		switch(rover.direction) {
			case "N":
			case "E":
				console.log(edge);
			break;
			case "S":
				rover.position[1]++;
			break;
			case "W":
				rover.position[0]--;
			break;	
		}
		console.log(rover.position);
	} else if (rover.direction[0] == (grid[0] - 1) && rover.direction[1] == (grid[1] - 1)) {
		switch(rover.direction) {
			case "S":
			case "E":
				console.log(edge);
			break;
			case "N":
				rover.position[1]--;
			break;
			case "W":
				rover.position[0]--;
			break;	
		}
		console.log(rover.position);
	} else if (rover.position[0] == 0 || rover.position[1] == 0) {
		switch(rover.direction) {
			case "N":
				if (rover.position[1] >=1) {
					rover.position[1]--;	
				} else {
					console.log(edge);	
				}
			break;
			case "W":
				if (rover.position[0] >=1) {
					rover.position[0]--;	
				} else {
					console.log(edge);	
				}
			break;
			case "S":
				if (rover.position[1] < (grid[1] - 1)) {
					rover.position[1]++;
				} else {
					console.log(edge);
				}	
			break;
			case "E":
				if (rover.position[0] < (grid[0] - 1)) {
					rover.position[0]++;
				} else {
					console.log(edge);
				}	
			break;
		}
		console.log(rover.position);
	} else {
			switch(rover.direction) {
				case "N":
					if (rover.position[1] >= 1) {
						rover.position[1]--;
					} else {
						console.log(edge);
					}	
				break;
				case "S":
					if (rover.position[1] < (grid[1] - 1)) {
						rover.position[1]++;
					}	else {
						console.log(edge);	
					}
				break;
				case "E":
					if (rover.position[0] < (grid[0] - 1)) {
						rover.position[0]++;
					} else {
						console.log(edge);	
					}	
				break;
				case "W":
					if (rover.position[0] >= 1) {
						rover.position[0]--;
					} else {
						console.log(edge);
					}
				break;
			}	
			console.log(rover.position);
	}
	rover.travelLog += (rover.position + " ");
	console.log(rover.travelLog);
}
