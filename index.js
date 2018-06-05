function distanceFromHqInBlocks(blockOne) {
  return Math.abs(blockOne - 42);
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(blockOne, blockTwo) {
  return Math.abs(blockTwo - blockOne) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  }
  return 'cannot travel that far';
}
