/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for(let i = 0; i<preferences.length; i++){
    let first = i+1; 
    let second = preferences[i]; 
    let third = preferences[second-1];

    if(first === preferences[third-1] & second != third){
        count++
        
    }
  };  
  return count/=3;
};
