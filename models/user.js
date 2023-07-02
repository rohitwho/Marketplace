const {Schema,model}= require('mongoose');



const userSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true 
    },
    lastName:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true 
    },
  
},{
    toJSON:{
        virtuals:true
    }
})

const userschemaa = model("users",userSchema);

module.exports = userschemaa