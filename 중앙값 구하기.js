function solution(array) {
  var answer = 0;
  array.sort((a,b)=> a-b)
  console.log(array);
  
  console.log(array[Math.floor(array.length / 2)]);
  
  return answer;
}

console.log(solution([1,2,3,4,5]	));
