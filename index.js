//1.npm init -y
//2.npm i express
//3.npm install nodemon --save--dev
//4.npx nodemon index.js

// to connect to database:
//5. npm i mongoose


//crud operations
// adding new expenses->//(post)
// view ->(get)
// edit->upfate(patch)
// delete->(delete)


// adding new expense
//view existing ones
//edit,delete


//creating new user
//validating existing usser
//monthly analysis

const bodyParser=require('body-parser')
const express=require('express')



const mongoose=require('mongoose')
const {Expense,User} = require('./schema.js')
const app=express()
app.use(bodyParser.json())

//Database = Expense Tracker
//Collection = ExpenseDetails
//ExpenseDeails
//    -amount(number)
//    -category(string)
//    -date(string)

//users
//   -name
//   -password
async function connecttoDb(){
try{
    await mongoose.connect('mongodb+srv://sanju:sanju29@sanjay.z0v9yfy.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=sanjay')
//only when await function completes the app.listen will get executed this is called "await"
app.listen(3000,function(){
    console.log("Listening to 3000...")
})
}catch(error){
   console.log(error)
   }
}

connecttoDb()

app.post('/add-expense',async function(req,res){
   try{
    await Expense.create({
        "amount": req.body.amount,
            "category": req.body.category,
            "date": req.body.date
    })
    res.status(201).json({
        "status" : "success",
        "message" : "entry successfully added"
    })
   }
   catch(error){
    res.status(500).json({
        "status" : "failure",
        "message" : "entry not created",
        "error" : error
    })
   }
})


app.get('/get-expenses',async function(req,res){
   try{
    const ex=await Expense.find()
    res.status(200).json(ex)
   }
   catch(error){
     res.status(500).json({
        "status":"failure",
        "error":error
     })
   }
})


app.delete('/delete-expense/:id',async function(req,res){
    try{
await Expense.findByIdAndDelete(req.params.id) //deletes 
res.status(200).json({
"message":"Successfully deleted"
})
}
catch(error){
res.status(500).json({
    "Status":"Failure"
})
}
})
