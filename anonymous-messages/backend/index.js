import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

// receive message (temporary)
app.post("/send-message", (req, res) => {
  const { name, message } = req.body;

  console.log("Received:", { name, message });

  res.json({
    success: true,
    message: "Message received (not saved yet)",
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
