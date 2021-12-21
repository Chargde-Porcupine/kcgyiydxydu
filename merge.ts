

var fs = require('fs'); 
var totaldata = fs.readFileSync('elzgen.css').toString().split('');

function merge(classtomerge){
    var correctclass = false;
    var merged = "";
    var current = "";
    var writing = false;
    for (let index = 0; index < totaldata.length; index++) {
        const element = totaldata[index];
        
        if(element == "."){
            writing = true;
        } else if(writing == true){
            if(current == classtomerge){
                correctclass = true;
                writing = false;
                current = "";
            } else{
                current = current.concat(element);
            }
        } else if(correctclass == true){
            if (element == "}"){
                correctclass = false;
                merged = merged.concat(current);
                current = "";
            } else{
                current = current.concat(element);
            }
        }
    }
    // essentially this removes the duplications from the merged element
    return Array.from(new Set(merged.replace(/\n/g,"").split(' '))).toString().replace(/,/g,'');
}
