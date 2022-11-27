// 6 => 1 + 2 + 3 + 4 + 5 + 6 => 21
// 6 => 2 , 4 , 6 ;   11=> 2, 4, 6, 8, 10

let numbers = [1,2,3,4,5,6]
let yigindi = 0

for(let number of numbers) {
    if(number % 2 == 0) {
        console.log(number);
    }
}




for(let num of numbers) {
    yigindi += num
}
console.log(yigindi);


let juftYigindi = 0


for(let num of numbers){
    if(num % 2 == 0) {
         yigindi += num
     } else {
juftYigindi += num
     }
       
}
console.log(`Juftlar yigindisi: ${juftYigindi}`);


let sonlar = [1,2,3,4,5,6,7,8,9,10,11]
let all = 0

for(let number of sonlar) {
    if(number % 2 == 0) {
        console.log(number);
    }
}