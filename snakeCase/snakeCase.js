const snakeCase = function(phrase) {
    phrase = phrase.toLowerCase();
    let snakePhrase = "";

    for(let i = 0; i < phrase.length(); i++){
        if(isSpace(phrase.charAt(i)))
            snakePhrase += "\_";
        if(isLetter(phrase.charAt(i)))
            snakePhrase += phrase.charAt(i);
    }
}

function isSpace(str){
    return str.match(" ");
}

function isLetter(str) {
    return str.match(/[a-z]/i);
}

module.exports = snakeCase
