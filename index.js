// Code your solution in this file!
function distanceTravelledInFeet(block1, block2) {
	return Math.abs((block2 - block1)*264);
}

function calculatesFarePrice(start, destination) {
	totalDistance = distanceTravelledInFeet(start, destination);

	if (totalDistance <= 400) {
		return 0;
	} else if (totalDistance <= 2000) {
		return 0.02 * (totalDistance-400);
	} else if (totalDistance <= 2500) {
		return 25;
	} else {
		return 'cannot travel that far'
	}
}

function distanceFromHqInBlocks(block) {
	const hq =42;
	return Math.abs(block - hq);
}

function distanceFromHqInFeet(block) {
	return distanceTravelledInFeet(42, block);
}