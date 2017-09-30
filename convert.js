
var value = "";
var source = "";
var target = "";
var result;

const error = "Invalid Operation";

const readline = require('readline');
const console = require('console');

    value = process.argv[2];
    source = process.argv[3];
    target = process.argv[5];

    if(source == "m" && target == "cm"){
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

    
