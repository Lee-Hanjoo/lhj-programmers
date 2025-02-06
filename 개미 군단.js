function solution(hp) {
    var answer = 0;

    let _hp = hp
    
    if(_hp >= 5) {
        answer += Math.floor(_hp / 5)
        _hp = Math.floor(_hp % 5 )
    }
    if(_hp >= 3) {
        answer += Math.floor(_hp / 3)
        _hp = Math.floor(_hp % 3 )
    } 
    if(_hp >= 1) {
        answer += Math.floor(_hp / 1)
        _hp = Math.floor(_hp % 1 )
    }
    
    return {answer, _hp};
}

console.log(solution(999));



// 다른사람 풀이
function solution(hp) {
    return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + (hp % 5) % 3;
}
