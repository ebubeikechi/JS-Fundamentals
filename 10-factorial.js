const { argv, exit } = require('node:process');

function factorialFunction(a){
    
    if(!isNaN(Number(a))){
        numb = parseInt(a);

        return findFactRecursively(numb)

    } else return 1
          
}

function findFactRecursively(a){
    
    if(a === 1){
        return 1
    } else {
        return a * findFactRecursively(a - 1);
    }
    
}

argv.forEach((val, index) =>{

    if(argv.length - 1 == index){
        
        let num1 = argv[2];
        //let num2 = argv[3];

        return console.log(factorialFunction(num1));

    }

});