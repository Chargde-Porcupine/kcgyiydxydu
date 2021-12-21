var fs = require('fs'); 

//may want to include error handling
var totaldata = fs.readFileSync('elzgen.css').toString().split('');
function getclasses(){
    var classes = [];
    var current = "";
    var writing = false;
    for (let index = 0; index < totaldata.length; index++) {
    const element = totaldata[index];
    if(element == '.'){
        writing = true;
    } else if(writing == true){
        if(element == '{'){
            writing = false;
            classes.push(current);
            current = "";
        } else{
            current = current.concat(element)
        }
    }
}
    return classes;
}

function findduplicates(classes){
    const nodups =  Array.from(new Set(classes));
    var offendingclasses = []
    
    if (nodups.length == classes.length){
        return offendingclasses;
    } else if(nodups.length != classes.length){
        for (let index = 0; index < classes.length; index++) {
            try {
                if (nodups[index] != classes[index]) {
                offendingclasses.push(classes[index]);
                nodups.splice(index, 0, classes[index]);
            } 
            } catch (error) {
                offendingclasses.push(classes[classes.length - 1]);
            }   
        }

    }
    return offendingclasses;
}
