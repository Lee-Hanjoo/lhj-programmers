function solution(numbers) {
    var answer = 0;

    answer = numbers.sort((a,b)=>b-a);

    numbers[0] * numbers[1] > numbers[numbers.length - 1] * numbers[numbers.length - 2] ? answer = numbers[0] * numbers[1] : answer = numbers[numbers.length - 1] * numbers[numbers.length - 2]

    return answer;
}

console.log(solution([1, 2, -3, 4, -5]));
