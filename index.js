const express = require("express");
const cors = require("cors");
const app = express();

// cors setup
app.use(
  cors({
    origin: "*",
  })
);

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "A joke", content: "this is a joke" },
    { id: 2, title: "Another joke", content: "this is another joke" },
    { id: 3, title: "third joke", content: "this is 3rd joke" },
    { id: 4, title: "4th joke", content: "this is 4th joke" },
    { id: 5, title: "5th joke", content: "this is 5th joke" },
  ];
  res.send(jokes);
  console.log("recieved");
});

const PORT = process.env.PORT || 8000;
console.log("here is clg");
app.listen(PORT, () => {
  console.log("serve at 8000");
});
/*
=> Change Get request to /api/jokes and test




*/
