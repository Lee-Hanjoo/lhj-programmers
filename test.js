function solution(my_string, num1, num2) {
    var answer = my_string;

    my_string.charAt(num1).replace(my_string.charAt(num1), my_string.charAt(num2))
    my_string.charAt(num2).replace(my_string.charAt(num2), my_string.charAt(num1))

    return answer;
}

console.log(solution("I love you",3,6));
