import mongoose from 'mongoose'
import {cartmodel} from '../../Components/model/cartmodel'
import connection from '../../util/connection'
export default async function handler(req,res){
   try {
    await connection();

    let del=await cartmodel.findByIdAndDelete(req.body.id)
    res.json('deleted')
   } catch (error) {
    res.json(error)
   }
}