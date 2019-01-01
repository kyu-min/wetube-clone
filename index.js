import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express(); // var app = express();
const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}
/* function handleListening() {
  console.log("Listening on: http://localhost:" + PORT);
} */

const handleHome = (req, res) => {
  console.log(req);
  res.send("Hello from my home!");
};
/* var handleHome = function handleHome(req, res) {
    console.log(req);
    res.send("Hello from my home!");
}; */

const handleProfile = (req, res) => res.send("You are on my Profile");
/* var handleProfile = function handleProfile(req, res) {
  return res.send("You are on my Profile");
}; */

app.use(cookieParser());
app.use(bodyParser());
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
