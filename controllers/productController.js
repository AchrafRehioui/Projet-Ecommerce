const Product = require('../models/product');
const fs = require('fs');

const formidable = require('formidable');

exports.createProduct = (req, res) => {

    let form = new formidable.IncomingForm();

    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {

        if (err) {
            return res.status(400).json({
                error: 'Image could not uploaded !'
            })
        }

        let product = new Product(fields);

        if (fields.photo) {
            product.photo.data = fs.readFileSync(files.photo.path)
            product.photo.contentType = files.photo.type
        }

        photo.save((err, product) => {
            if (err) {
                return res.status(400).json({
                    err: 'product not persist'
                })
            }

            res.json({
                product
            })
        })

    })
}