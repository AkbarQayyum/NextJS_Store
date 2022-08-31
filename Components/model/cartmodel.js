import mongoose from 'mongoose'

let cartSchema=mongoose.Schema({
    p_id:{
        type:String,
        required:true,
    },
    p_name:{
        type:String,
        required:true,
    },
    p_price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    total:{
        type:Number,
        required:true,
    },
})

export let cartmodel=mongoose.models.carttest||mongoose.model('carttest',cartSchema);