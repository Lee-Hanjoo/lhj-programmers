function solution(my_string) {
    var answer = 0;

    const regex = /[0-9]/g

    for(let i=0; i<my_string.match(regex).length; i++){
        answer += parseInt(my_string.match(regex)[i])
    }
    
    return answer;
}

console.log(solution("aAb1B2cC34oOp"));
