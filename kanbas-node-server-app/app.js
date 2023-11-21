import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./Lab5.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
Lab5(app);
Hello(app);
app.listen(4000);

app.listen(process.env.PORT || 4000);
