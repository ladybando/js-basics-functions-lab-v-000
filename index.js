// Code your solution in this file!
function distanceFromHqInBlocks(block) {
let dist;
 
if (hq > 42) {
  dist =  ((block - hq) * 264);
} else if (hq < 42) {
  dist = ((hq - block) *  264);
}
return dist
}