const dotenv = require("dotenv");
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

dotenv.config();

const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!password) return res.status(404).json("Password required");

   const newUser = new User({
        username,
        email,
        password: CryptoJS.AES.encrypt(
          password,
          process.env.SECRET_KEY
        ).toString(),
      });

      
  try {
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Invalid User");

    const originalPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);

    req.body.password !== originalPassword &&
      res.status(401).json("Invalid Password");

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "7d" }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, token });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
module.exports = { register, login };
