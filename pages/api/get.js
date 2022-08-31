import mongoose from 'mongoose'
import {cartmodel} from '../../Components/model/cartmodel'


export default async function handler(req,res){

    try {
        let data= await cartmodel.find();
        res.json(data)
        
    } catch (error) {
        console.log(error)
    }

}