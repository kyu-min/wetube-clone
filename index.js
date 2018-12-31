import express from "express";
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
}
/* var handleHome = function handleHome(req, res) {
    console.log(req);
    res.send("Hello from my home!");
}; */

const handleProfile = (req, res) => res.send("You are on my Profile");
/* var handleProfile = function handleProfile(req, res) {
  return res.send("You are on my Profile");
}; */

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);