import express from "express"
import { run } from "./db/db.js";
import { router } from "./routes/productroutes.js";
import routerCart from "./routes/cartroutes.js";
import cors from "cors"
import { checkOut } from "./controllers/cartController.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({        
  extended: true
}));

const PORT = process.env.Port || 3000;

app.get("/" , (req , res) => {
  res.send("hello i m live")
});

app.use("/api/products" , router)
app.use("/api/cart" , routerCart)
app.use("/api/checkout" , checkOut)

run();


app.listen(PORT , () => {
    console.log(`Server live on http://localhost:${PORT}`);
})