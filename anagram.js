function anagramHelper(possibilities, location){
    if(possibilities.length <= 0){
        return [location];
    }
    let answers = [];
    for(let i = 0; i < possibilities.length; i++){
        let tempArr = possibilities.filter(v=>v!=possibilities[i]);
        answers = answers.concat(anagramHelper(tempArr ,location+possibilities[i]));
    }
    return answers;
}

function anagram(what){
    let arry = [...what];
    return anagramHelper(arry, "");
}

console.log(anagram("Hello"))