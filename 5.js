const numPow = (firstNum, secondNum) => {
	if(!isFinite(firstNum) || isNaN(firstNum) || firstNum % 1 !== 0 || !isFinite(secondNum) || isNaN(secondNum) || secondNum % 1 !== 0 || firstNum <= 0 || secondNum <= 0){
	  console.log('Число не натуральное')
	} else {
	  console.log(Math.pow(firstNum, secondNum));
	}
	  }
	  numPow(7,5);