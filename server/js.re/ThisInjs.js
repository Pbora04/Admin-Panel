





// console.log(this)  this == obj  this always

const obj2 = {
  name:"sumit",
   func : function abc (){
    console.log(this)
   }
}
console.log(obj2)

const obj = {
    name : "preeti",
    x :function(){
     let a = ()=>{
        console.log(this)
      }
      a()
    }
   }
  obj.x()


// "use strict"
// function  abc(){
//     console.log(this)
// }
// abc()

// "use strict"
// var a  = 23;
// console.log(a)


class abc{
  constructor(){
    let name;
    console.log("constructor call")
  }
  hello(){
    console.log("hello" + this.name)
  }
}



let a = new abc()
a.name="sumit"
console.log(a.name)
a.hello();



let b = new abc()
b.name="praveen"
console.log(b.name)
b.hello();

