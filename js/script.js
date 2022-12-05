// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string){
    const str=string.split('');
    let newString='';
    for(let i=str.length-1;i>=0;i--){
        newString+=str[i];
    }
    return newString;
}
console.log(reverseThisString('Hello'));

// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
    const str=string.split('');
    let newString='';
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(char==char.toUpperCase()){
            char=char.toLowerCase();
            newString+=char;
        } else{
            char=char.toUpperCase();
            newString+=char;
        }
    }
    return newString;
}
console.log(swapCase('Hello World'));
//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array){
    const temp=
    array.map(function(temp){
        let tempC= (temp-32)*(5/9);
        tempC=tempC.toFixed(0);
        return tempC;
    });
    return temp;
}
const array=[23, 32, 41, 50, 59];
console.log(toCelcius(array));

//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array){
    const checkGrade=
    array.map(function(grade){
        if(grade>=75) return true;
        else return false;
    });
    return checkGrade;
}
const grades=[20, 30, 50, 80, 90, 100];
console.log(passOrFail(grades));


//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    let germanNum=[];
    let i;
    for(i=0;i<cardinalNumbers.length;i++){
        
        for(i=0;i<germanNumbers.length;i++){
            germanNum[i]= cardinalNumbers[i] + ' is ' + germanNumbers[i];
        }
    }
   
    return germanNum;
}

console.log(germanNumbers());

// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const prime=
    numbers.filter(function(num){
        if(num===1) return;
        for(let i=2;i<num;i++){
            if(num%i===0){
                return;
            }
        }
        return num;
    });
    return prime;
}
console.log(returnPrimeNumbers());
//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:
for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log('CSC225 RULES I LOVE JAVASCRIPT');
    }
    else if(i%3===0){
        console.log('CSC225 RULES');
    }
    else if(i%5==0){
        console.log('I LOVE JAVASCRIPT');
    }
    else{
        console.log(i);
    }
}