console.log("Checking");
for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= i; j++) {
        console.log("# \n");
        // document.write('*')
    }
}
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}
for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i ** 2}  ${i ** 3}`);
}
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// Printing Odd Numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
// Printing Prime Numbers from 0 to 100
// let isPrime = true
// for(let i = 2 ; i<=100 ; i++)
// {
//     for(let j = 1 ; j <= i ; j++)
//     {
//         if(i % j == 0)
//         {
//             break
//         }

//     }
//     console.log(j)
// }
let count = 0;
for (let i = 2; i <= 100; i++) {
    for (let j = 2; j <= i; j++) {
        if (i % j == 0)
            count++
    }
    if (count == 1)
        console.log(i);
    count = 0;
}
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log("The sum of o to 100 is", sum);
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) evenSum += i;
    else oddSum += i;
}
console.log(evenSum, oddSum);
let arr = [evenSum, oddSum];
console.log(arr);
// Generating Random Array
let num = [];
for (let i = 0; i <= 5; i++) {
    num.push(Math.floor(Math.random() * 15))
}
console.log(num)
// Generating Random Array Number will be unique
let uniNum = []
for (let i = 0; i <= 5; i++) {
    let number = Math.floor(Math.random() * 15)
    let check = uniNum.includes(number)
    if (check == true)
        i = i - 1
    else
        uniNum.push(number)
}
console.log(uniNum)
let char = "abcdefghijkmnopqrstuvwx0123456789"
let charLength = char.length
let result = ''
for (let i = 0; i <= 5; i++) {
    result += char.charAt(Math.floor(Math.random() * charLength))
}
console.log(result)