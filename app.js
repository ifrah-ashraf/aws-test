const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Deployment Successful! App is running on EC2 via GitHub Actions.");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
