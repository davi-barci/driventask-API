import express, {Request, Response, json} from "express";
import httpStatus from "http-status";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(httpStatus.OK);
})

const PORT:number = parseInt(process.env.PORT) || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}...`));