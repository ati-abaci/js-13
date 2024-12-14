/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:
function generateSequence() {

    const num1 = Math.floor(Math.random() * 16);
    const num2 = Math.floor(Math.random() * 16);
    const sequence = [num1, num2];
    console.log(`the first random num is:${num1} and the second random num is ${num2}`)
    for (let i = 2; i < 10; i++) { //لوپ از ۲ تا ۹ اجرا میشه تا ۱۰ تا عدد بسازه
        const nextNum = (sequence[i - 1] + sequence[i - 2]) * 2;
        sequence.push(nextNum);
    }

    return sequence;
}
console.log(generateSequence());