const express = require("express");
const http = require("http");

const app = express();
const cors = require("cors");
const env = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const userRoutes = require('./routes/user/auth')
const adminRoutes = require('./routes/admin/auth')
const applicationRoutes = require('./routes/admin/application')
env.config({path:'./.env'})
 
const server = http.createServer(app);
app.use(cors()); 


mongoose
  .connect(
   process.env.DATABSE_URL
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use('/api', userRoutes)
app.use('/api', adminRoutes)
app.use('/api', applicationRoutes)
server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
