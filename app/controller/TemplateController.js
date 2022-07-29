const Template = require('../model/Template');

exports.getAllTemplate = async (req, res) => {
    try {


        const {pageOffset, pageLimit, search, sort, sort_order} = req.query;

        const sortObject = { [sort]: sort_order }

        const searchObject = {
            $or: [
                { template_title: { $regex: '.*' + search + '.*' } },
                { template_description: { $regex: '.*' + search + '.*' } }
            ]
        }


        const templateList = await Template
            .find(searchObject)
            .sort(sortObject)
            .limit(pageLimit)
            .skip(pageOffset);
            
        const templateListCount = await Template
            .find(searchObject)
            .count();

        return res.status(200).json({ success: 1, templateList, templateListCount });
    } catch (err) {
        return res.status(400).json({
            success: 0,
            message: err.message
        });

    }
}

// for testing purpose - to generate data
exports.insertData = async (req, res) => {

    for (let index = 0; index < 150; index++) {
        const rating = Math.floor(Math.random() * 5);
        const price = Math.floor(Math.random() * 1500);

        const addTemplate = new Template({
            template_title: "our template cost is " + price + '/-',
            template_author: "New mart",
            template_rating: rating,
            template_price: price,
            template_img_url: "https://global-uploads.webflow.com/5d123a0e13543962b1665276/5f6a2a3588e5901eb2293446_Templates-10-p-800.png",
            template_description: `our template is now currently having rating of ${rating} and cost around Rs ${price}, to explore more pls click below button`
        });
        const insertTemplate = await addTemplate.save();
    }
    return res.status(201).json({ success: 1, message:"Success" });

}
