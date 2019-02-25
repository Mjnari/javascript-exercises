const caesar = function (input, shiftFactor) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let j;
    let output = "";
    let upperCaseComparison = input.toUpperCase();
    for (i = 0; i < input.length; i++) {
        j = 0;
        while (upperCaseComparison.charAt(i) != alphabet[j] & j < alphabet.length) {
            j++;
        }
        if (j < alphabet.length) {
            if (input.charAt(i) != upperCaseComparison.charAt(i))
                output += calcShiftValue(alphabet, j, shiftFactor).toLowerCase();
            else
                output += calcShiftValue(alphabet, j, shiftFactor);
        } else {
            output += input.charAt(i);
        }
    }

    return output;
}

const calcShiftValue = function (alphabet, target, shiftFactor) {
    while(shiftFactor > 26)
        shiftFactor -= 26;
    while(shiftFactor < -26)
        shiftFactor += 26;
        
    if(target + shiftFactor >= alphabet.length)
        return alphabet[target + shiftFactor - alphabet.length];
    if(target + shiftFactor < 0)
        return alphabet[alphabet.length + shiftFactor + target];
    return alphabet[target + shiftFactor];
}

module.exports = caesar
