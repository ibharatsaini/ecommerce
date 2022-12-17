// import { model } from "mongoose"

const { model } = require("mongoose")

// const { model } = require("mongoose")

// import { model } from "mongoose"
const updateIt = (model) =>async(id,params) => {return model.findByIdAndUpdate(id,params,{new:true}) } 
const insert = (model) => async(params)=> model.create({...params})
const getById = (model)=>async(params)=> model.findById(params)
const getOne = (model)=> async(params,selected)=>  model.findOne({...params},selected)
const getMany = (model)=> async(params)=>  model.find({...params?.body})
const getAll = (model)=> async(params,select,thresh={}) => model.find(params,select,thresh)
const deleteOne = (model) => async(params) =>  model.findOneAndRemove({...params})
// exports.updateIt = updateIt
const crudOperations = (model)=>({
        updateIt :  updateIt(model),
        insert   :  insert(model),
        getOne   :  getOne(model),
        getAll   :  getAll(model),
        getById  :  getById(model)
        // dontUpdate: (model) => async(req,res)=>await model.create(req.body)
})

module.exports = crudOperations