import mongoose from 'mongoose';
import { ProductSchema } from '../models/productModel.js';

const Product = mongoose.model('Product', ProductSchema );

/**
 *
 * @param req
 * @param res
 */
export const addNewProduct = (req, res) => {
    let newProduct = new Product(req.body) ;

    newProduct.save( (err, product) => {
        if(err){
            res.send(err);
        }
        res.json(product);
    });
};

/**
 *
 * @param req
 * @param res
 */
export const getProducts = (req, res) => {

    Product.find({} ,(err, product) => {
        if(err){
            res.send(err);
        }
        res.json(product);
    });
};

/**
 *
 * @param req
 * @param res
 */
export const getProductById = (req, res) => {

    Product.findById(req.params.proID ,(err, product) => {
        if(err){
            res.send(err);
        }
        res.json(product);
    });
};

/**
 *
 * @param req
 * @param res
 */
export const updateProduct = (req, res) => {

    Product.findOneAndUpdate({_id: req.params.proID} , req.body, {new:true, useFindAndModify: false} ,(err, product) => {
        if(err){
            res.send(err);
        }
        res.json(product);
    });
};

/**
 *
 * @param req
 * @param res
 */
export const deleteProduct = (req, res) => {

    Product.remove({_id: req.params.proID}  ,(err, product) => {
        if(err){
            res.send(err);
        }
        res.json({message:'Product has been removed'});
    });
};