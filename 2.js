function isNumSimple(num) {
	if (num > 1000 || typeof num != 'number'){
		console.log('Данные неверны'); 
	} else if (num === 1 || num === 0) {
			console.log('Число не является ни составным, ни простым.');
		} else {
      if (num === 2 || num === 3){
        console.log('Число простое')
      } else if (num % 2 == 0 || num % 3 == 0){
				console.log('Число составное');
			} else {
				console.log('Число простое');
			}
		}
	
}
let num1 =  0;
isNumSimple(num1);