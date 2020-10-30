import {addNewProduct, getProducts ,getProductById, updateProduct, deleteProduct} from '../controllers/productController.js';

const routes = (app) => {

    app.route('/product')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        },getProducts)

        //Add a new Product
        .post(addNewProduct );

    app.route('/product/:proID')
        //GEt a product by ID
        .get(getProductById)

        // UPdate a product by ID
        .put(updateProduct)

        // Delete a product by id
        .delete(deleteProduct);
};

export default routes;