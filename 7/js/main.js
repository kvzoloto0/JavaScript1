/*for (let i=2; i<11; i++){                        выводит четкие значение 2,4,6,8,10
    if(i%2 == 1) continue;
    alert (i);
}*/


/*let i=0;                                         переписать код с for в while
while( i<3 ){
    alert(`number ${i}!`);
    i++;
}*/

/*let num;                    Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.       

do {
  num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);*/


let n = 10;
for (let i = 2; i <= n; i++) {
let count = 0;
for ( let j = 2; j < i; j++) {
if (i % j != 0) {
count++;
}
}
if (count == i - 2) {
alert(i)
}
}