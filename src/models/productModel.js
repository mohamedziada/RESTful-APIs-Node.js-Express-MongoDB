import mongoose from 'mongoose';

/**
 * _id: the product id
 * lastUpdated: useful timestamp to see recently updated
 * category: the category path made up of hierarchy nodes
 * name: the product name or title
 * brand: the brand
 * description: list of descriptions (website, retail box, etc)
 * assets: list of assets (images, etc)
 * attrs: list of attributes as name-value pairs. Will be used to implement facetting. Note that the brand is also included as one attribute.
 * variants: some information on variants, but not the variants themselves

 String
 Number
 Date
 Buffer
 Boolean
 Mixed
 ObjectId
 Array
 Decimal128
 Map
 Schema
 */

const variantsSchema = new mongoose.Schema({
    name: 'string',
    value: 'string',
    unit_id: String,
    unit_value: String,
});

export const ProductSchema = new mongoose.Schema({

    sku: {
        type: String,
        required: 'Enter a SKU',
        index: true,
        unique: true // Unique index. If you specify `unique: true`
        // specifying `index: true` is optional if you do `unique: true`
    }
    ,
    name: {
        type: String,
        required: 'Enter a name'
    },
    description: String
    ,
    category: String
    ,
    variants: [variantsSchema]
    ,
    updated_date: Date,
    created_date: {
        type: Date,
        default: Date.now
    }
});

