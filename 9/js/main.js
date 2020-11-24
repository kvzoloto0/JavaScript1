/*function checkAge(age) {                          1 одинаковый код
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}


function checkAge(age) {                                 2 одинаковый код
  return (age > 18) ? true : confirm('Родители разрешили?');
}


function checkAge(age) {                                  3 одинаковый код
  return (age > 18) || confirm('Родители разрешили?');
}*/


/*
function min(a, b) {                                    Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
*/




function pow(x, n) {
    let result = x;
    
    for (let i = 1; i < n ; i++){
        result *= x;
    }
    
    return result;
}

let x=prompt('x=', '');
let n=prompt('n=', '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}


