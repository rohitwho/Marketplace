const {Schema,model} = require('mongoose')


const postingSchema = new Schema({


itemName:{
    type: String,
      required: true,


},
itemDescription:{
    type: String,
      required: true,
},
itemPrice:{
    type:Number,
    required:true
},
itemRating:{
    type:Number
},
createdAt:{
    type: Date,
      default: Date.now,

},
},{
    toJSON:{
        virtuals:true
    }
}
);

const postings = model('posting',postingSchema);

module.exports= postings