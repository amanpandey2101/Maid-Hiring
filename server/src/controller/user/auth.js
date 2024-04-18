const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then((error, user) => {
      if (user) {
        return res.status(400).json({
          message: "user already registered",
        });
      }
      const {
        firstName,
        lastName, 
        email,
        phone,
        password,
        address,
        city,
        state,
        pincode,
        job,
        gender,
        message,
      } = req.body;

      const _user = new User({
        firstName,
        lastName,
        email,
        phone,
        password,
        address,
        city,
        state,
        pincode,
        job,
        gender,
        message,

        role: "user",
      });

      _user.save().then((data, error) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
        if (data) {
          return res.status(201).json({
            message: "user created successfully",
          });
        }
      });
    });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then((user, error) => {
      if (error) return res.status(400).json({ message: "Error Occured" });
      if (user) {
        if (user.authenticate(req.body.password) && user.role === "user") {
          const { _id, firstName, lastName, email, role, fullName, status } =
            user;
          const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
          );

          return res.status(201).json({
            token,
            user: {
              _id,
              firstName,
              lastName,
              email,
              role,
              fullName,
              status,
            },
          });
        } else {
          return res.status(400).json({
            message: "Invalid Password!",
          });
        }
      } else {
        return res.status(400).json({ message: "Something went wrong" });
      }
    });
};
