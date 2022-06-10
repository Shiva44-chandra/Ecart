const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"please Enter product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter product Description"]
    },
    price:{
        type:Number,
        required:[true,"please Enter product Price"],
        maxlength:[8,"Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        
  {
            public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
   }
 ],
    category:{
          type:String,
          required:[true,"please Enter product category"],
    },
    Stock:
    {
        type:Number,
        required:[true,"please enter product Stock"],
        maxlength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numpfReviews:
    {
        type:Number,
        default:0
    },
    reviews:
    [
        {  user:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
            required:true,
             },
            name:{
                type:String,
                required:true
            },
            ratings:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
     ],
     user:{
           type:mongoose.Schema.ObjectId,
           ref:"User",
           required:true,
     },
     createdAt:{
         type:Date,
         default:Date.now
     }
}) 


module.exports = mongoose.model("product",productSchema);