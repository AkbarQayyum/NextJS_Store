import {cartmodel} from '../../Components/model/cartmodel'
import mongoose from 'mongoose'
import connection from '../../util/connection'
export default async function handler(req,res){

    try {
        await connection();
        let cart=  new cartmodel(req.body)
        let save=await cart.save();
        res.status(200).json('saved')
    } catch (error) {
        res.status(500).json(error)
    }

}