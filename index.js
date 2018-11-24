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

function distanceTravelledInFeet(hq, block) {
  let dist; 
  if (block > hq) {
  dist = ((block-hq) *264);
  } else if (hq > block){
  dist = ((hq-block) *264);
  }
  return dist;

}

function calculatesFarePrice(start, destination){
let price;

}