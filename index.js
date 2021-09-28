const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const faker = require("faker");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const certificateId = faker.datatype.number();
  const name = faker.name.findName();
  const startMonth = faker.date.past();
  const endMonth = faker.date.future();
  res.status(200).json({
    certificateId,
    name,
    startMonth,
    endMonth,
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is up and running");
});
