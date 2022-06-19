
// ----------answer1-------------

// let num=parseInt(process.argv[2])

// for(let i=1; i<=num ;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
//     }

// ----------answer2-------------

// let num1=parseInt(process.argv[2])
// let num2=parseInt(process.argv[3])
// for (let i = num1; i < num2; i++) {
// if (i%2==0) {
    
//     console.log(i++);    
// }    
// }

// ----------answer3-------------

let num = parseInt(process.argv[2]);
let sum = 0;
let firstdigit;
let lastdigit;

lastdigit = num % 10;
while (num >= 10) {
    num = Math.floor(num / 100);
}
firstdigit = num;
console.log(firstdigit, lastdigit);