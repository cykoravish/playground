import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.error("MongoDB error ❌", err));

// Message schema
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Anonymous",
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messageSchema);

// test route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

// save message
app.post("/send-message", async (req, res) => {
  try {
    const { name, message } = req.body;

    if (!message) {
      return res
        .status(400)
        .json({ success: false, message: "Message required" });
    }

    const newMessage = new Message({
      name: name || "Anonymous",
      message,
    });

    await newMessage.save();

    res.json({
      success: true,
      message: "Message saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// get all messages (secret route)
app.get("/secret/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: messages.length,
      messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch messages",
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
