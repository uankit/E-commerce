const { createPayment } = require("../controllers/payment");

const router = require("express").Router();

router.post('/payment' , createPayment);
module.exports = router;