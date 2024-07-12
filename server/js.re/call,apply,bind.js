
function abc(Name,city,nam){
    console.log(this.Age)
    console.log(Name,city,nam)
}
abc


var obj1 = {
    Name : "Sumit",
    Age :23
}

var obj2 = {
    Name : "raj2",
    Age :23
}

// let a = abc.bind(obj1,"sumit","delhi")
// a()
abc.apply(obj2,["raj","preeti","praveen"])







function hh(callback){  //paraameter
    callback()
}

hh(()=>{
    console.log("this is call back function")
});//argument