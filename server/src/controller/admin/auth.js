const User = require("../../models/user");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingAdmin = await User.findOne({ email }).exec();
    if (existingAdmin) {
      return res.status(400).json({
        message: "Admin already registered",
      });
    }

    const newAdmin = new User({
      firstName,
      lastName,
      email,
      password,
      role: "admin",
    });

    await newAdmin.save();

    res.status(201).json({
      message: "Admin created successfully",
      status: "1",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
      status: "0",
    });
  }
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then((user, error) => {
      if (error) return res.status(400).json({ message: "Error Occured" });
      if (user) {
        if (user.authenticate(req.body.password) && user.role === "admin") {
          const {
            _id,
            firstName,
            lastName,
            email,
            role,

            fullName,
          } = user;
          const token = jwt.sign(
            {
              _id: user._id,
              role: user.role,
              firstName: user.firstName,
              lastName: user.lastName,
            },
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

exports.addData = async (req, res) => {
  try {
    const newMartyrData = req.body;

    const newMartyr = new Martyr(newMartyrData);
    await newMartyr.save();

    res.status(201).json({
      message: "Martyr created successfully",
      martyr: newMartyr,
      status: "1",
    });
  } catch (error) {
    console.error("Create martyr error:", error);
    res.status(500).json({ error: "Failed to create martyr" });
  }
};
