/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var breedte = 4;
var i = 0;
while (i < 8 ){
    
    if(i % 2 === 0){
        console.log(("#" + " ").repeat(breedte));
    }
    else {
        console.log((" " + "#").repeat(breedte));
    }
    i++;
}

