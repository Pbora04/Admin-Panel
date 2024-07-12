// var a = prompt("enter score")

// if(a>=80 && a<=100){
//     console.log("grade : A")
// }else if(a>=60 && a<=80){
//     console.log("grade : B")

// }else if(a>=40&& a<=60){
//     console.log("grade : c")

// }else{
//     console.log("grade : fail")

// }


// for (let i = 0 ; i<=100 ; i++){
//    if(i%2===0){
// //     console.log("even ", i)
  

// let obj = {
//    name : "preti",
//    age : 23 , 
//    core : "MERN stack" 
// }

// let obj2 = {
//    ...obj,
//    name : "preeti"
// }
// var a = obj2.name
// console.log(a)
// console.log(obj)
// console.log(obj2)

// let a = "preeti"

// console.log(a)

// function abc(name , ...others){  // rest operator
//    let a = 21 
//    console.log(name)
//    console.log(others[3])
// }
// var arr = [3,5,2,"Preeti"]  //spread operator 
// abc("age",...arr )


// var a = "preeti"
 
// var a = "yes"



// const array = ['green','blue','red','red','blue']
// let avc = array.map((item,i)=>{
        
//         if(array[i]===array[i+1]){
//             return    "white"
//         }
//        else{
//            return item
//               }
    
// })
// console.log(avc)


// const array3= ['green','blue','red','red','blue']

// let output = array3.filter((item,i)=>{
//             return 
// })


// function removeduplicate(array3){
//       return array3.filter((item,i)=>{
//                  item==
//       })
// }
// var arr=[3,5,4,6,2,4]
// let maxfunc = function maxium(arr){
//     let max=arr[0]
//     for(i=0;i<arr.length;i++){
//       if(arr[i+1]>max){
//         max=arr[i]
//       }
//     }
//     return max
// }
// var arr=[3,5,4,6,2,4]
// console.log(maxfunc)

// var arr=[3,5,4,6,2,4]

   /////////////////////////////////////
//1  //logic hosting

// function fruit(){
//     console.log(name)
//     console.log(price)

// }
// fruit()
// var name = "apple";
// let price = 40;

//2   
//reverse each word in sting 

// var  a = "preeti is a good girl"

// let output = a.split(" ").map((item)=>{   //split on the bases of space
//    return item.split("").reverse().join("")
// })

// console.log(output.join(" "))//join on the bases of space


// var a = "preeti is preeti bora preeti is a good girl"

// let output = a.split(" ").filter((iten,i,arr)=>{
   
//   for(i=0;i<arr.length;i++){
//            if(arr.indexOf(iten)==i){
            
             
//            } 
//     }
//     return  indexOf

    
// })

// console.log(output.join(" "))

//3
// removing duplicates
// let arr = [3,4,2,3,4,5,6,7,9,4];
// let output = arr.filter((item,index,array)=>{
//        return array.indexOf(item)==index
//  })
//  console.log(output)

//4
//  only duplicates
// let arr = [3,4,2,3,4,5,6,7,9,4];
// let output = arr.filter((item,index,array)=>{
//        return array.indexOf(item)!==index
//  })
//  console.log(output)

// 5
// max in array

// let array = [5,66,33,8776,4321,4423];

// function output(arr){
//        return arr.reduce((result,curval)=>{
//              return result<curval ? curval:result 
//         })
// }
// console.log(output(array))


//6

// let array = [5,66,33,8776,4321,4423];

// function output(arr){
//        return arr.reduce((result,curval)=>{
//              var first= result<curval ? curval:result 
//              return first>curval? curval:first
//         })
// }
// console.log(output(array))

//7
//how to find if an obj is array or not

// function identi(para){
//     return  Array.isArray(para)
// }
// console.log(identi([]))
// console.log(identi({}))

//8
//empty a array in js

// let array = [3,4,2,4,1]
// array.length=0
// console.log(array)

//9
//same val in two array
  
// let arr1 = [1,3,5,7,9,2]
// let arr2 = [1,4,8,2]

// let arr3 = arr1.concat(arr2)
// // console.log(arr3)
// var output = arr3.filter((item,i,arr)=>{
//        return arr.indexOf(item)!==i
// })
// console.log(output)


// let arr1 = [2,4,5,6,8,10]
// let arr2 = [2,4,6,8,10,76]

// let arr3 =arr1.concat(arr2)
// function abc (arr3){
//     for(var i = 0; i<arr3.length;i++){
//             var  output = [];
//          if(arr3.indexOf(arr3[i])!==arr3[i]){
//            var ans =   output.push(arr3[i])
         
//       // var  output = 0;
//       //    var ans =  output<arr3[i] ? arr3[i] : output
 
      
//    }
//       return ans
// }}

// console.log(abc(arr3))

// let arr1 = [2,4,5,6,8,10]
// let arr2 = [2,4,6,8,10]

// let arr3 =arr1.concat(arr2)


// let output = arr3.filter((item,index,array)=>{
//        return array.indexOf(item)!==index
//  })
//  console.log(output)




// let a = ["P","r","e","e","t","i"]
//  console.log(a.reverse())

// let b = "preeti" ;
// console.log(b.split("").reverse().join(""))

// let c = [2,4,6,8,5,4,3]
// console.log(c.sort())


// let Array = [2,4,6,8,90,40,6,,4,3,4,2,6,8]

// let output =Array.filter((item,index,arr)=>{
//   return arr.indexOf(item)!==index
        
  
            
    
// })

//  only duplicates
// let arr = [3,4,2,3,4,5,6,7,9,4];
// let output = arr.filter((item,index,array)=>{
//        return array.indexOf(item)!==index
//  })
//  console.log(output)
// let atr = "preeti";

// let reverse= atr.split('').reverse()
//  console.log(reverse.join(''))

let arr = [ 2,4,5,6,3,9];
var a;
for( arr[a]=0 ;a<=5 ;a++)
   {
   if(a%2==0){
      console.log("even",a)
   }
   
}
