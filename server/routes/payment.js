const { createPayment } = require("../controllers/payment");

const router = require("express").Router();

router.post('/' , createPayment);
module.exports = router;