// Code your solution in this file!
function distanceFromHqInBlocks(block) {
let dist;
 
if (block > 42) {
  dist =  (block - 42);
} else if (block < 42) {
  dist = (42 - block);
}
return dist;
}

function distanceFromHqInFeet(feet) {
let dist;
 
if (feet > 42) {
  dist =  ((feet - 42) * 264);
} else if (feet < 42) {
  dist = ((42 - feet) * 264);
}
return dist;
}

function distanceTravelledInFeet(dist) {
dist = distanceFromHqInFeet(feet) * distanceFromHqInBlocks;
return dist;
}