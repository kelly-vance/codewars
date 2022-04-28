// solution to the following codewars problem: 
// https://www.codewars.com/kata/624f3171c0da4c000f4b801d

function barista(coffees, cMachines){
    coffees.sort((a,b) => a - b)
      let times = []
      let machDirty = []
    for(let i = 0; i < cMachines; i++){
      times.push([0])               // initialize all the times for the machines @ 0
      machDirty.push(0)            // initialize status of all machines to clean
    }
    
    for(let i = 0; i < coffees.length; i++){
      //find coffee machine to use and find current max time: 
      let machine = 0
      let totalTimes = []
      for(let j = 0; j < times.length; j++){
        let total = 0
        for(let k = 0; k < times[j].length; k++){
          total += times[j][k]
        }
        totalTimes.push(total)
        if(total < totalTimes[machine]){
          machine = j
        }
      }
      if(times[machine].length === 1){
        times[machine].push(coffees[i])
      }else{
        let cleaningTime
        machDirty[machine] === 1 ? cleaningTime = 2 : cleaningTime = 0
        times[machine].push(times[machine][times[machine].length - 1] + cleaningTime + coffees[i])
      }
      coffees[i] === 0 ? machDirty[machine] = 0 : machDirty[machine] = 1
    }
  
    let total = 0
    for(let i = 0; i < times.length; i++){
      total += times[i].reduce((prevVal, currVal) => prevVal + currVal, 0)
    }
  
    return total
  }