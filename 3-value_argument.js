const { argv, exit } = require('node:process');

// print process.argv
argv.forEach((val, index) => {

    let lastVal = argv.slice(-1)[0];

    if(index == 1 && lastVal == val){
        return console.log('No argument')
    } else if(index > 1 && lastVal == val){
        return console.log(argv[2]);
    } 
  
});