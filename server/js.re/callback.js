// function Child(item){
//   console.log("Sumit")  
//   console.log(item)
// }

// const array = [5,6,7,8,4,6]
// function parent(array,callback){
//     let data = array
//     callback(data)
// }

// parent(array,Child)

// // Map((item)=>{

// // })


// function func(w){
//     console.log(w)
// }


// function parent(a){
//     let q = "praveen"
//     a(q)  
// }


// parent(func)

// function child(item){
//     console.log(item)
// }
// function parent (a){
//     let data = "praveen"
//     a(data)
// }

// // let arr =[2,3,4,5,6,7,89] 
// // arr.Map


// parent((item)=>{
//     console.log(item)
// })

// function map(a){
// a()
// }


// Map((item)=>{

// })


// Array.map((item)=>{

// })


// function dad(myson){
//    let mass = "my son is naughty "
//     myson(mass)
// }

// dad((item)=> {
//     console.log(item)
//    })


// //----------------------------------------------------

// let arr =[3,6,4,5,6]

//    function Mapp(data){
//      let a = 6
//      data(a)
//    }

//    arr.Mapp((item)=>{
//      console.log(item)
//    })

   //Mapp=>higher order function
   //()=>callback function




//------------premitive---------------
// let a  = 3  //bnhhhhh1233

// let b = a
// a = 4
// console.log(a)
// console.log(b)
//------------------------------------------------------
// //non-primitive
// let obj ={name:"preeti"}
// let obj2 = {...obj}  //uuiyut

// obj.name="jyoti"

// console.log(obj2.name)

//-----------------------------------
// var data = [2,3,4,5,6]
// function squareCal(abc){
//  var abcd =  abc.map((item,i,arr)=>{
//         return item*2
//    })
//  console.log(abcd)
// }
// console.log(squareCal(data))


var data = [2,3,4,5,6]
function squareCal(abc){
    var abcd =  abc.map((item,i,arr)=>{
           return item*2
      })
    console.log(abcd)
   }
(squareCal(data))

//--------------------------------------------------
// var data = [2,3,4,5,6]
// function mulTwo(d){
//   return d*2
// }

// function addthree(d){
//     return d+3
//   }

// function fourthdata (a){
//      return a%2==0
// }

// function handleData(d,calculate){
//     let output =[]
//     for(var i=0;i<d.length;i++){
//         output.push("Task Perform",calculate(d[i]))
//     }
//     return output
// }
// // function addCal(d){
// //     let output =[]
// //     for(var i=0;i<d.length;i++){
// //         output.push(addthree(d[i]))
// //     }
// //     return output
// // }

// console.log(handleData(data,mulTwo))
// console.log(handleData(data,addthree))
// console.log(handleData(data,fourthdata))


// const arr = [2,4,5,6,9,7]
// function multi(myarr){
// return myarr*2
// }

// function mode(myarr){      //? para kha se aara 
//   return myarr%2==0
// }



// function higher(myarr,calculate){
//     output = [] 
//    for(let i =0;i<myarr.length;i++){
//       output.push(calculate(myarr[i]))
//    }
//       return output
// }

// console.log(higher(arr,multi))
// console.log(higher(arr,mode))