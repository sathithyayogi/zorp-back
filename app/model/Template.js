const mongoose = require('mongoose');

const TemplateSchema = new mongoose.Schema({
    template_title: {
        type: String,
        required: true
    },
    template_author: {
        type: String,
    },
    template_rating: {
        type: Number,
    },
    template_price:{
        type: Number,
    },
    template_img_url:{
        type: String,
        required: true
    },
    template_description: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Template', TemplateSchema);