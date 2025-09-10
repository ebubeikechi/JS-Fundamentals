const { argv, exit } = require('node:process');

// print process.argv
argv.forEach((val, index) => {

    let lastVal = argv.slice(-1)[0];

    if(index == 1 && lastVal == val){
        return console.log('undefined is undefined')
    } else if(index == 2 && lastVal == val){
        return console.log(argv[2], 'is undefined');
    } else if(index == 3 && lastVal == val){
        return console.log(argv[2], 'is', argv[3]);
    }
  
});