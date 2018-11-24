// Code your solution in this file!
function distanceFromHqInBlocks(block) {
let dist;
 
if (block > 42) {
  dist =  ((block - 42) * 264);
} else if (block < 42) {
  dist = ((42 - block) *  264);
}
return dist;
}