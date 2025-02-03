const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 3000;

app.use(express.static("dist"));

// Add version endpoint
app.get('/version', (req, res) => {
  res.send('5')
});

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

