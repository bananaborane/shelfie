module.exports = {
    getInventory: (req, res, next)=>{
        req.app.get('db').get_inventory()
        .then(products=>res.status(200).send(products))
        .catch(err=>console.log(`houston we have an error: ${err}`));
    },
    postToInventory: (req, res, next)=>{
        console.log(req.body);
        let { product_name, product_price, product_imgURL } = req.body;
        product_price*=1;
        req.app.get('db').post_to_inventory([product_name, product_price, product_imgURL])
        .then(()=>res.status(200).send('product added to inventory'))
        .catch(err=>console.log(`houston we have an error: ${err}`))
    },
    delete: (req, res, next)=>{
        let {id} = req.params;
        req.app.get('db').delete(id)
        .then(()=>res.status(200).send('product deleted'))
        .catch(err=>console.log(`trying to delete but we got an ${err}`))

    },
    update: (req, res, next)=>{
        console.log(req.body);
        console.log(req.params);
        let {id} = req.params;
        let { product_name, product_price, product_imgURL, } = req.body;
        req.app.get('db')
        .update([product_name, product_price, product_imgURL, id])
        .then((products)=>res.status(200).send(products))
        .catch(err=>console.log(`trying to update product but we got an ${err}`))

    }
}