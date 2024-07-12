var arr = [4,3,7,6,9,8,5,4,2,1,3,4,5];

const result = arr.map((item)=>{
return item<6

})
console.log("initial :",arr);
console.log("final:",result);

// =====================================

var array = [4,3,7,6,9,8,5,4,2,1,3,4,5];

const final = array.filter((hi)=>{
return hi<6

})
console.log("initial :",array);
console.log("final:",final);

//=============================

var array1 = [4,3,7,6,9,2,1,3,4,5];

const answer1 = array1.map((it)=>{

 return it%2==0

})
console.log("before : ",array1)
console.log("final answer : ",answer1) 

// ========================================
var array2 = [4,3,7,6,9,2,1,3,4,5];

const answer2 = array1.filter((ar)=>{

 return ar%2==0

})
console.log("before : ",array1)
console.log("final answer : ",answer2) 

// ========================================
// Input array
// let arr = [10, 20, 30, 40, 50, 60];

// function sumofArray(sum, num) {
//     return sum + num;
// }

// function myfunc(item) {
//     console.log(arr.reduce(sumofArray));
// }
// myfunc();


//================================================
// var arr = [ 1,3,9,5,6,7,8,3,4,6];

// const abc = arr.map((item)=>{
//     return item > 8
// })
 
// console.log(abc)

//=====================================
//  var arrayA=[
//     {name : "preeti Bora" , age : 14 ,contact : 79574735348},
//     {name : "jyoti" , age : 12 ,contact : 998735348}
//  ]
// arrayA.map((data)=>{
//     console.log(data)
//     // console.log(data.name)
//     console.log(data.age)
// })

//////////////////////////////////////////////


// var a = [1,3,5,4,0];
// sum=0;

// const Func=a.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue
// },0)
//  console.log(Func)

/////////////////////////////////////////////////////////////////



// var abc = [8,4,3,2,1,2,4,3];

// const reduceFunc = abc.reduce((accumulator,num)=>{
//  return abc%2===0
// },0)

// console.log(reduceFunc())

/////////////////////////////////////////////////////////////////////

//  fetch ("https://jsonplaceholder.typicode.com/users")

//  .then((Result)=>{
//     return Result.json()
//  })
//  .then((asliResult)=>{
//     console.log(asliResult)
//  })
//  .catch((error)=>{
//     console.log("error")
//  })

////////////////////////////////////////////////////////////////////
    // function parameterbjri(parameter){
    //    return new Promise((res,rej)=>{
    //     if(parameter){
    //         res(console.log("response"))
    //     }else{
    //         rej(console.log("reject"))
    //     }
    //    })

    // }
    // let yes = (yesData)=>{
    //     console.log(yesData)
    //  }
    //  let no = (noData)=>{
    //     console.log( noData)
    //  }

    //  parameter(true).then(yes).catch(no)


