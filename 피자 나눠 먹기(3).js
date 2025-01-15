/*
머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

>>제한사항
2 ≤ slice ≤ 10
1 ≤ n ≤ 100

>>입출력 예
slice	n	result
7	10	2
4	12	3
*/
function solution(slice, n) {
    var answer = slice > n ? 1 : n % slice === 0 ? n/slice : Math.floor(n/slice) + 1
    
    return answer;
}

//다른사람 풀이
// 난 나머지가 있으면 +1을 해줬는데, 이사람은 올림을 했다.
Math.ceil(n / slice)