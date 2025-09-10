const { argv, exit } = require('node:process');

// print process.argv
argv.every((val, index) => {
    if(argv.length == 2){
        return console.log('No argument')
    } else if(argv.length == 3){
        return console.log('Argument found');
    } else if(argv.length > 3){
        return console.log('Arguments found');
    }
  
});