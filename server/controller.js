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
    }
}