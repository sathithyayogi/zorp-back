const router = require("express").Router();
const TemplateController = require('../controller/TemplateController');

router.get('/',TemplateController.getAllTemplate);
router.post('/',TemplateController.insertData);


module.exports = router;
