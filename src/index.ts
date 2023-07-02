import express, {json} from "express";
import "express-async-errors"; 
import cors from "cors";
import router from "@/routers/index.router";
import errorMiddleware from "@/middlewares/error.middleware";

const app = express();
app.use(cors());
app.use(json());
app.use(router);

app.use(errorMiddleware);

const PORT:number = parseInt(process.env.PORT) || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}...`));