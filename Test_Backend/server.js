const express = require("express");

//app initialization
const app = express();

//route initialization
app.use("/", require("./routes/individualPoints"));

//PORT Initialization
const PORT = process.env.PORT || 7000;

//server listing to port
app.listen(PORT, () => {
  console.log(`Server Succesfully Started on PORT ${PORT}`);
});
