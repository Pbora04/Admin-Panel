const express = require("express");
const cors = require("cors");
const app = express();
const Jwt = require("jsonwebtoken");
const jwtkey = "preeti-key";
const mymodel = require("./model");
const myproducts = require("./Product");
app.use(cors());

app.use(express.json());

app.post("/register", async (req, resp) => {
  let result = mymodel(req.body);
  result = await result.save();
  result = result.toObject();
  delete result.password;
  Jwt.sign({ result }, jwtkey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      resp.send("invalid authentication");
    }
    resp.send({ result, auth: token });
  });

  // resp.send(result)
  // console.log(result)
});
app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.email && req.body.password) {
    let user = await mymodel.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtkey, { expiresIn: "2h" },(err,token)=>{
        if (err) {
          resp.send("invalid authentication");
        }
        resp.send({user,auth:token})

      });
    } else {
      resp.send("invalid user details");
    }
  } else {
    resp.send("invalid user details");
  }
});

app.post("/addProduct", async (req, resp) => {
  console.log(req.body);
  let result1 = myproducts(req.body);
  let result = await result1.save();
  resp.send(result);
});

app.get("/product-list",  async (req, resp) => {
  let result = await myproducts.find();
  resp.send(result);
});

app.delete("/delete/:id", async (req, resp) => {
  console.log(req.params.id);
  let result = await myproducts.deleteOne({ _id: req.params.id });
  resp.send("del");
});

app.get("/product/:id", async (req, resp) => {
  let result = await myproducts.findOne({ _id: req.params.id });
  console.log(result);
  resp.send(result);
});

app.put("/updateProduct/:id", async (req, resp) => {
  let result = await myproducts.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  console.log(result);

  resp.send(result);
});

// app.get('/profile/:id',async(req,resp)=>{
//     let result = await mymodel.findOne({_id:req.params.id})
//     resp.send(result)
//     console.log(result)
// })
app.get('/get-profile/:id',async(req,resp)=>{
    console.log(req.params.id)
    let result = await mymodel.findOne({_id:req.params.id}).select("-password");
    console.log(result)
    resp.send(result)
})

app.put('/update-user/:id',async(req,resp)=>{
   let result = await mymodel.updateOne(
     {_id : req.params.id},{$set : req.body}
   )
   resp.send(result)
})

app.get("/search/:key", async (req,resp) => {
  let result = await myproducts.find({
    $or: [
      { name: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
});
// function veriflymiddleware(req, resp, next) {
//   // console.log("middleware called")
//   // next()
//   let token = req.headers["authorization"];
//   // console.log("Middleware token : ",token)
//   // next()
//   if (token) {
//     // token = token.split(' ')
//     // console.log(token[1])
//     //    token = token.split(' ')[1];
//     console.log(token);

//     Jwt.verify(token, jwtkey, (err, valid) => {
//       if (err) {
//         resp.status(401).send({ result: " Please provide valid token" });
//       } else {
//         resp.send(token);
//         next();
//       }
//     });
//   } else {
//     resp.status(403).send({ result: "please send token with headers " });
//   }
// }
app.listen(5000, () => {
  console.log("server is running");
});
