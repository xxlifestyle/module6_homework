function sumNum(num1) {
    return function (num2){
        return num1 + num2;
    }
}

let first_num = +prompt("Введите значение 1:");
let second_num = +prompt("Введите значение 2:");
let res = sumNum(first_num);
console.log(res(second_num));