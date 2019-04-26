/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


//eerste poging
    
    //var arrays = [[1, 2, 3], [4, 5], [6]];
//var combine = arrays.concat(arrays);
//
//console.log(combine);
    
    
    var arrays = [[1, 2, 3], [4, 5], [6]];

var flatten = 
    arrays.reduce(function(acc, cur) { 
      return acc.concat(cur);
    });

console.log(flatten);