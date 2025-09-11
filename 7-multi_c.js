const { argv, exit } = require('node:process');

let word = 'C is fun';
let firstDigit = argv[2];

// print process.argv
argv.forEach((val, index) => {
    if(argv.length - 1 == index){

        if(!isNaN(Number(firstDigit))){

            for (let i = 0; i < firstDigit; i++) {
            console.log(word);
            }
        }else{
            console.log('Missing number of occurrences');
        }


    }   
});