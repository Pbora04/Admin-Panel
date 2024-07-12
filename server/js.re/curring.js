// function Outer(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// const res = Outer(2);
// const result = res(3);
// console.log(result);

// function Outer(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(Outer(2)(3)(5));
// intead of  sending all the func in one go we send the arhuements sepereately with every layer of inner funtion is curring function.
function abc(a){
  return function (b){
         return function (c){
                   return a+b+c
         }
  }
}
// console.log(abc(2)(3)(4))
// let def = abc(2)
// let res = def(3)
// let resp = res(2)
// console.log(resp)