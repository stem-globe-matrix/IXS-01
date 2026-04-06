const express = require("express");
const app = express();
const mainRoute = require("./routes/mainRoute");

const PORT = process.env.PORT || 3000;

// Middleware (we’ll use this later for intelligence)
app.use(express.json());

app.use(express.static("public"));

// Routes
app.use("/", mainRoute);

// Start server
app.listen(PORT, () => {
    console.log(`IXS-01 running on http://localhost:${PORT}`);
});