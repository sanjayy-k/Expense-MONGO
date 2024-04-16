const mongoose=require('mongoose')
//Defining schema 1.
const expenseDetailsSchema=new mongoose.Schema({
    amount:{
        type:Number
    },
    category:{
        type:String
    },
    date:{
      date:String
    }
})

//2.
const userDetailsSchema=new mongoose.Schema({
    emailID:{
        type:String
    },
user_name:{
    type:String
},
   password:{
    type:String
}
})

//creating a model
const Expense=mongoose.model('ExpenseDeails',expenseDetailsSchema)

const User=mongoose.model('userDetails', userDetailsSchema)


module.exports={Expense,User}

