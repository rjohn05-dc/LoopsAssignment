// Part 1

// intialized the variable i to begin at 1
// the for loop then starts at 1 and increases each count until the count reaches 51 which at that point will stop at 50
let i=1

for(;i<51;i++){
    console.log(i)
}

//initialized the variable j to start at 2
// the while loop starts at two and for every number that is less than or equal to 20, it increases by two leading to only list out the even numbers until it reaches 20.
let j=2
while(j<=20){
    console.log(j)
    j+=2
}

//initialized the variable k to start at 10
// this do while loop will run the variable k from 10 and for every number that is greater than 1 , the numbers will decrease unitl it hits one.
let k=10

do{
    alert(k)
    console.log(k)
    k--
}while(k>=1)

//Part 2

//initialized variables m and l to be starting at 1
//  the outer for loop will go through numbers 1 to 5 for the first set of numbers
//the second for loop will go through numbers 1 to 5 for the second set of numbers
// it will then while going through the numbers for both sets, multiply each one , thus creating a  multiplication table 1 to 5
let m=1
let l = 1;

for (; l <= 5; l++) {
    let m = 1; // Reset m to 1 at the start of each outer loop iteration
    for (; m <= 5; m++) {
        console.log(`${l} x ${m} = ${l * m}`);
    }
}

//initialized variable i to start at 1
let rows = prompt("Enter the number of rows: ");

for (let i = 1; i <= rows; i++) {
    let stars = '';  // Reset stars for each row
    for (let j = 1; j <= i; j++) {
        stars += '*';
    }
    console.log(stars);  // Print the stars for the current row after the inner loop completes
}

//Part 3

// This is different from the for loop because in the while loop after we initiliaze the variable while it is going through the numbers it adds one to the variable until it reaches 50.
let n=1

while(n<51){
    console.log(n)
    n++
}


//  We made this conversion by stating that for every value that is less than or equal to 20 , we add 2 to the current value until it reaches 20.
let o=2

for(; o<=20; o+=2){
    console.log(o)
}


