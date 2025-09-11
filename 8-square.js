const { argv, exit } = require('node:process');


let firstDigit = argv[2];

// print process.argv
argv.forEach((val, index) => {
    if(argv.length - 1 == index){

        if(!isNaN(Number(firstDigit))){

            for (let i = 0; i < firstDigit; i++) {

                let word = ''

                for (let i = 0; i < firstDigit; i++) {

                    word = word + 'X';
                }

                console.log(word);
            }
        }else{
            console.log('Missing size');
        }


    }   
});