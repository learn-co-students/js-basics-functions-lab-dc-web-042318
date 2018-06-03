// Code your solution in this file!
// Code your solution in this file!

function distanceFromHqInBlocks(endblock) {
  blocks = Math.abs(endblock - 42);
  return blocks;
}

function distanceFromHqInFeet(endblock) {
  blocks = distanceFromHqInBlocks(endblock);
  feet = blocks * 264;
  return feet;
}

function distanceTravelledInFeet(startblock, endblock) {
  blocks = Math.abs(endblock - startblock);
  feet = blocks * 264;
  return feet;
}

function calculatesFarePrice(startblock, endblock) {
  distance = distanceTravelledInFeet(startblock, endblock);
  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    cost = (distance - 400) * .02
    return cost;
  } else if (distance < 2500) {
    cost = 25;
    return cost;
  } else {
    return 'cannot travel that far';
  }
}
