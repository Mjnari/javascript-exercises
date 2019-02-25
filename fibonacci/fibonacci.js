const fibonacci = function(memberNumber) {
    if(memberNumber < 0)
        return 'OOPS';

    let i = 1;
    let sum = 1;
    let lastSum = 1;
    while(i < memberNumber - 1){
        sum = sum + lastSum;
        lastSum = sum - lastSum;
        i++;
    }
    return sum;
}

module.exports = fibonacci
