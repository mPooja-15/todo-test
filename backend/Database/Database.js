const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://pooja1012:Umw7C3I1VJPt62eo@cluster0.ppwwi.mongodb.net/test',(error,connect)=>{
    if(error){
        console.log("Database Is not Connect")
    }
    else{
        console.log("Database Is Connected")
    }
})