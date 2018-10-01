// We are checking for matching curly braces, implementing the following
// algorithm to solve, extra practice for parsing
// expr = term* 
// term = { expr } | any other character than {} (including empty)

var input;
var index = 0;

function checkBraces(string){
    input = string;
    index = 0;
    let answer = true;
    while(index < input.length && answer) { answer = term(); };
    return answer;
}

function term(){
    if(input.charAt(index) === "{"){
        index++;
        let backtrack = index;
        while(term2()){
            backtrack = index;
        }
        index = backtrack;
        if(input.charAt(index) === "}"){
            index++;
            return true;
        }else{
            return false;
        }
    }else if(input.charAt(index) === "["){
        index++;
        let backtrack = index;
        while(term2()){
            backtrack = index;
        }
        index = backtrack;
        if(input.charAt(index) === "]"){
            index++;
            return true;
        }else{
            return false;
        }
    }else if(input.charAt(index) === "("){
        index++;
        let backtrack = index;
        while(term2()){
            backtrack = index;
        }
        index = backtrack;
        if(input.charAt(index) === ")"){
            index++;
            return true;
        }else{
            return false;
        }
    }
    return false;
}

console.log(checkBraces("{{}{}[]()}((({})))"));

// console.log("Positive result with random letters mixed: " +expr("a{b{ff}}{}{asdfasdfasdf}"));
// console.log("Negative result: " +expr("({[)}]"));
// console.log("Positive result with random letters mixed: "+expr("({[{[{[(a)]}]}]}()){}"))
// console.log("Negative result with random letters mixed: " +expr("a{b{}}{a{{asdf{}}"));