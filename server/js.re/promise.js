//        PROMISE

// function promData(checkData){
//     return new Promise(function (res,rej){
//         if (checkData){
//             res(console.log("success"))

//         }else{
//             rej(console.log("fail here"))
//       }
//      } )
//     }
//      let yes = (yesData)=>{
//         console.log(yesData)
//      }
//      let no = (noData)=>{
//         console.log( noData)
//      }
      

//       promData(false).then(yes).catch(no)

// =======================================================



      //=================================================

      // function parameterbhejnewala(parameter){
      //   return new Promise(function(res,rej){
      //    if (parameter){
      //       res(console.log("true"))
      //    }else{
      //       rej(console.log("false"))
      //    }
      //   })
      // } 
      // let hello=(trueWalaAns)=>{
      //    console.log("mai hu ture argurment wlaa output")
      // }
      // let Gudbye=(falseWalaAns)=>{
      //    console.log("mai hu false argurment wlaa output")
      // }


      // parameterbhejnewala(true).then(hello).catch(Gudbye)


      //=================================================================
                     //   fetch

      // fetch ("https://jsonplaceholder.typicode.com/users")  
      // .then((result)=>{
      //    // console.log(result)
      //    return result.json()
      // })
      // .then((finalResult)=>{
      //    console.log(finalResult)
      // }).catch((error)=>{document.write("something went wrong")})
   
      //================================================================              
                     // async await
 
   //   async function maiHufunc(){
   //       let maihuAPI = await fetch("https://jsonplaceholder.typicode.com/users")
         
   //       maihuAPI= await maihuAPI.json()

   //       console.log(maihuAPI)
   //    }
   //    maiHufunc()

         //================================================================

      //    fetch("https://jsonplaceholder.typicode.com/users")
      //    .then((Ans)=>{
      //       console.log(Ans)
      //       return Ans.json()
      //    })
      //    .then((maihuAns)=>{
      //       console.log(maihuAns)
      //    })
      //    .catch((gltAns)=>{
      //       console.log("404 error in this sentence",gltAns)
      //    })

// ===================================================================
//////////////////////promise///////////////////////////////
 

// function parameterbhejnewala(parameter){
//     return new Promise(function(res,rej){
//          if(parameter){
//            res(console.log("resolved"))
//          }else{
//           rej(console.log("rejected"))
//          }
//     })
// }

// let haan = (truearguement)=>{
// console.log("true arguement")
// }
// let naah=(falsearguement)=>{
//       console.log("false Arguement")
// }
// parameterbhejnewala(false).then(haan).catch(naah);

//////////////fetch////////////////////////

// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then((ans)=>{
//       console.log(ans)
// return ans.json()
// })
// .then((answer)=>{
//       console.log(answer)
// })
// .catch((error)=>{
//       console.log(error,"something went wrong")
// })


//////////////////////////PROMISE////////////////////////////////////////////

function para(parameter){
   return new Promise(function(res,rej){
   if(parameter){
      res(console.log("responsed"))
   }else{
      rej(console.log("rejected"))
   }

   })


   let hlo =  (hello)=>{
     console.log(hello)
   }

   let gudbye = (bye)=>{
      console.log(bye)
   }



}
para(true).then(hlo).catch(gudbye)





