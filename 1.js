
function getOddEvenNum(arr) {
	

let even = 0;
let odd = 0;
let zero = 0; 

  
for (let i = 0; i < arr.length; i++){
  if (typeof arr[i] == 'number') {
	if (arr[i] % 2 === 0 & arr[i] !== 0){
		even += 1
	}
	else if (arr[i] % 2 !== 0){
		odd += 1;
	}
	else if (arr[i] === 0) {
		zero += 1;
	}
  }
}

if (zero !== 0){
console.log(`Четных чисел - ${even}, нечетных чисел - ${odd}`);
console.log(`Нулей - ${zero}`);
} else{
  console.log(`Четных чисел - ${even}, нечетных чисел - ${odd}`);
}
}

let arr1 = [ 5, null  , 8 , 6 , 0, 10 , 11 , 7 , 0];
getOddEvenNum(arr1);