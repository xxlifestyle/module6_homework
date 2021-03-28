function numInt(num1, num2) {
    let i = num1;
    let numInt = setInterval(function() {
        console.log(i);
        if (i === num2) {
            clearInterval(numInt);
        }
      i++;
    }, 1000);
}
numInt(11, 25);