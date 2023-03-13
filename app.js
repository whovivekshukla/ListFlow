require("dotenv").config();

// supabase
const supabase = require("./config/supabaseConfig");
// console.log(supabase)

// controllers
const userRoute = require("./routes/userRoute");

const express = require("express");
const app = express();

app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.send("ListFlow Work Management Tool");
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Server is listening at port ${port}`));
