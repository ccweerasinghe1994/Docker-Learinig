const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bi There Bro ");
});
app.listen(8080, () => console.log(`listening on http://localhost:${8080}`));
