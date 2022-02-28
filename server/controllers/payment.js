const stripe = require("stripe")(process.env.STRIPE_KEY);

const createPayment = (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "inr",
    },
    (err, payRes) => {
      if (err) {
        res.status(500).json(err);
      } else {
        console.log(payRes);
        res.status(200).json(payRes);
      }
    }
  );
};

module.exports = {
  createPayment,
};
