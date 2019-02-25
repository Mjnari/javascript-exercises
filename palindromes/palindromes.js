const palindromes = function (palindrome) {
    let j = 1;
    palindrome = palindrome.toLowerCase();
    for (let i = 0; i < palindrome.length / 2; i++) {
        while (i < palindrome.length && !isLetter(palindrome.charAt(i)))
            i++;
        if (i == palindrome.length)
            return true;
        while (j < palindrome.length && !isLetter(palindrome.charAt(palindrome.length - j)))
            j++;
        if (j == palindrome.length)
            return true;
        if (palindrome.charAt(i) != palindrome.charAt(palindrome.length - j)) {
            return false;
        }
        j++;
    }
    return true;
}

function isLetter(str) {
    return str.match(/[a-z]/i);
}

module.exports = palindromes
