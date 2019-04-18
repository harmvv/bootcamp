/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var getal = 1;

while (getal <= 100){
    
   
   if (getal % 15 === 0) {
       console.log("fizzzuzz");
        getal = getal +1;
   }
    else if(getal % 3 === 0){
        console.log("fizz");
         getal = getal +1;
    }
    
    else if(getal % 5 === 0){
        console.log("Buzz");
         getal = getal +1;
    }
    else
    {
    console.log(getal);
    getal = getal +1;
    }
}