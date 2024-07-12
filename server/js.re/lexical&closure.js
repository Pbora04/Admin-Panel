// console.log(this)
// javascrpt mai everything is an object .
// excution context = memory space and code excution

// var a = 20
// function outer(){
    
//     function inner(){

//         console.log(a)
//     }
// inner()
// }
// outer()



//  function abc(){
//     console.log("hiii")
//  }
// console.log(abc)


function outer(){
    var a = 20    
    function inner(){
      console.log(a)
    }
 return inner
}
var result = outer()
console.dir(result)
result()
    
