import express from "express";
import cors from "cors";
import uploadRoutes from "./routes/upload.routes";
import optimizationRoutes from "./routes/optimization.routes";


const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://gridwise-ai-cyan.vercel.app"
  ],
  methods: ["GET", "POST"]
}));

app.use(express.json());

app.use("/api/upload", uploadRoutes);
app.use("/api/optimize", optimizationRoutes);

export default app;
