// import env from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import todoRoutes from "./routes/todoRoutes"
import express, { Request, Response } from "express"
// import express, { Request, Response } from "express"

dotenv.config()

const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://iamfaiz:HvQskESnw6u0nKTT@cluster0.prdtjuj.mongodb.net/micro-service-1-todo"
const PORT = process.env.PORT || 5001
mongoose.connect(MONGO_URL);

const app = express();
app.use(express.json());
app.use(cors({
    origin: true
}));

app.use("/api", todoRoutes);

app.use("*", (_req: Request, res: Response) => {

    res.status(404).json({ message: "Resource Not Found" })
});

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED");
    app.listen(PORT, () => {
        console.log("SERVER RUNNING")
    });
});
