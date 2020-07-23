const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const adminProductRouter = require("./routes/admin/products");
const productRouter = require("./routes/products");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["kfiigof996"],
  })
);

app.use(authRouter);
app.use(adminProductRouter);
app.use(productRouter);

app.listen(3000, () => {
  console.log("Listening");
});
