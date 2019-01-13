import express from "express"; // express를 1. 폴더 목록에서 먼저 찾고 2. 만약 목록에 없을시, node_modules에서 express를 찾아라는 명령
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";
const app = express(); // var app = express(); 어플리케이션!

const handleHome = (req, res) => {
  // ES6의 Arrow Function. 편함.
  // 서버에서 Route에 응답
  console.log(req);
  res.send("Hello from my home!");
};
/* var handleHome = function handleHome(req, res) {
    console.log(req);
    res.send("Hello from my home!");
}; */

const handleProfile = (req, res) => res.send("You are on my Profile"); // 서버에서 Route에 응답
/* var handleProfile = function handleProfile(req, res) {
  return res.send("You are on my Profile");
}; */

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Route
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome); // Route

app.get("/profile", handleProfile); // Route

app.use("/user", userRouter); // Route

export default app;
