/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

    var counterb = 0;
    var i = 0;

function countBs(a){

    for (i = 0; i < a.length; i++){
        if(a[i]==="B"){
            counterb = counterb + 1;
          
    }   
          console.log("zover zijn we met I " + i);
}
    return counterb; 
}

console.log(countBs("ASDBBASBbB"));

