const { argv, exit } = require('node:process');

// print process.argv
argv.forEach((val, index) => {

    let lastVal = argv.slice(-1)[0];
    let firstDigit = argv[2];


    if(lastVal == val && !isNaN(Number(firstDigit))){
        return console.log('My number:',Number(firstDigit))
    } else if(lastVal == val){
        return console.log('Not a number');
    } 

  
});

//Number.isFinite(firstDigit)