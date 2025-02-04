function solution(rsp) {
    var answer = '';
    
    for(let i=0; i<rsp.length; i++){
        if(rsp[i] === '2'){
            answer += '0'
        } else if(rsp[i] === '0'){
            answer += '5'
        } else if(rsp[i] === '5'){
            answer += '2'
        }
    }

    return answer;
}

console.log(solution('205'));



// 다른사람 풀이
/*
 가위는 2 바위는 0 보는 5
*/
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}
