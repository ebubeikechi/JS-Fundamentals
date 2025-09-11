const { argv, exit } = require('node:process');

function add(a, b){
    return Number(a) + Number(b)
}

argv.forEach((val, index) =>{

    if(argv.length - 1 == index){
        
        let num1 = argv[2];
        let num2 = argv[3];

        return console.log(add(num1, num2));

    }

});