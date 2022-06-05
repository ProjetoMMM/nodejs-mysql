const User = require('../models/User')
const Product = require('../models/Product')

module.exports = class ProductController {

    static async dashboard(req, res){
        const userId = req.session.userid

        const user = await User.findOne({
            where: {
                id: userId
            },
            include: Product,
            plain: true,
        })

        // checagem
        if(!user) {
            res.redirect('/login')
        }

        const products = user.Products.map((result) => result.dataValues)

        res.render('products/dashboard', {style: "Dstyles.css", products})
    }
}