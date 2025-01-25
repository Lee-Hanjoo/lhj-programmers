function solution(n, numlist) {
  var answer = [];
  
  for(let i=0; i<numlist.length; i++){
    numlist[i] % n === 0 && answer.push(numlist[i])
  }

  return answer;
}

console.log(solution(12, [2, 100, 120, 600, 12, 12]));
