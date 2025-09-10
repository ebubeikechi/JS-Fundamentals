const { argv, exit } = require('node:process');

// print process.argv
argv.forEach((val, index) => {
    if(index == 1 && argv.at(-1) == val){
        return console.log('undefined is undefined')
    } else if(index == 2 && argv.at(-1) == val){
        return console.log(argv[2], ' is undefined');
    } else if(index == 3 && argv.at(-1) == val){
        return console.log(argv[2], ' is ', argv[3]);
    }
  
});