// this is a solution to the following codewars challenge to calculate the determinate of a matrix: 
//      https://www.codewars.com/kata/52a382ee44408cea2500074c

function determinant(m) {
    const size = m.length
    
    if(size === 1){
      return m[0][0]
    }
    
    // if the matrix is 2 x 2, then the determinate is the a*d - b*c:
    else if(size === 2){
      return m[0][0] * m[1][1] - m[0][1] * m[1][0]
    }
    
    // if the matrix is greater than size 2 x 2, then sum the coefficents multiplied by the determinates of the sub-matrices (calculate recursively), make sure to alternate +/- sign of the coefficents:
    else{
      let det = 0
      for(let i = 0; i < size; i++){
        // get the sign of coefficient for the current digit:
        const sign = (-1)**i
        
        // get the sub matrix to calculate the determinate - the size is n-1 x n-1: 
        let subMatrix = []
        for(let a = 0; a < size - 1; a++){
          subMatrix.push([])
        }
        
        for(let row = 1; row < size; row++){
          for(let index = 0; index < size; index++){
            if(index != i){
              subMatrix[row - 1].push(m[row][index])
            }
          }
        }
        det += sign * m[0][i] * determinant(subMatrix)
      }
      return det
    }
  }