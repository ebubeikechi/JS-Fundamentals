const { argv, exit } = require('node:process');

// print process.argv
argv.forEach((val, index) => {
    if(index == 1 && argv.at(-1) == val){
        return console.log('No argument')
    } else if(index > 1 && argv.at(-1) == val){
        return console.log(argv[2]);
    } 
  
});