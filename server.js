import express from "express";
import handler from "./api/email/send.js";

const app = express();
app.use(express.json());

// Route maps to same handler used by Vercel
app.post("/api/email/send", handler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
