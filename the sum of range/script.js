/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
var i = 0;
 var sumarray = [];

function range(a,b){
  for(i = 0 ; i<=b; i++){
    if (a <= b){
        console.log(a);
        sumarray.push(a);
    a = a + 1;
         }
      else {
          console.log("done");
      }
  }
}

console.log(range(1, 10));
console.log(sumarray);

var uitkomst = 0;

for( i = 0; i < sumarray.length; i++){

  uitkomst += sumarray[i];

}

console.log('uitkomst is ' + uitkomst);