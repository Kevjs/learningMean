// We are checking for matching curly braces, implementing the following
// algorithm to solve, extra practice for parsing
// expr = term term*
// term = { term } | any other character than {} (including empty)

var input;
var index = 0;

function expr(string){
    input = string;
    var result = true;
    while(index < input.length && result){ result = term(); }
    input = null;
    index = 0;
    return result;
}

/*
    If the index is over the length of the input return true to exit out of the function,
    it will be set to false when it checks for closing brackets
*/
function term(){
    if(index >= input.length){ return true; }
    if(input.charAt(index) === "{"){
        index++;
        term();
        if(input.charAt(index) === "}"){
            index++;
            return true;
        }return false;
    }if(input.charAt(index) ==="}"){
        return true;
    }
    index++;
    return term();
}

console.log("Positive result with random letters mixed: " +expr("a{b{ff}}{}{asdfasdfasdf}"));
console.log("Negative result with random letters mixed: " +expr("a{b{}}{a{{asdf{}}"));