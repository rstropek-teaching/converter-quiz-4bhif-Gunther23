
// Why do you assign an empty string to `value` here? Just add `var` or `let`
// to the assignment below (e.g. `value = process.argv[2]`).
var value = "";
var source = "";
var target = "";
// Tip: Prefer `let` instead of `var`
var result;

const error = "Invalid Operation";

const readline = require('readline');
const console = require('console');

    value = process.argv[2];
    source = process.argv[3];
    target = process.argv[5];

    // Currently, you do not check process.argv[4]

    if(source == "m" && target == "cm"){
        // Remember: Don't repeat yourself. You have the business logic `result = parseInt(value)` multiple
        // times in the next few lines of code. Try avoiding repeating code over and over again.
        result = parseInt(value)*100;
        console.log(result);
    }

    else if(source == "m" && target == "mm"){
        result = parseInt(value)*1000;
        console.log(result);
    }

    else if(source == "cm" && target == "mm"){
        result = parseInt(value)*10;
        console.log(result);
    }

    else if(source == "cm" && target == "m"){
        result = parseInt(value)*0.01;
        console.log(result);
    }

    else if(source == "mm" && target == "cm"){
        result = parseInt(value)*0.1;
        console.log(result);
    }

    else if(source == "mm" && target == "m"){
        result = parseInt(value)*0.001;
        console.log(result);
    }
    else if(source == "g" && target == "kg"){
        result = parseInt(value)*0.001;
        console.log(result);
    }
    else if(source == "kg" && target == "g"){
        result = parseInt(value)*1000;
        console.log(result);
    }
    else{
        console.log(error);
    }

    
