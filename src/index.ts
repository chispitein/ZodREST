import express from "express"
import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/products.routes";
import registerRoutes from "./routes/register.routes";
import estadoUserRoutes from "./routes/reg.estadouser.routes";
import tipoUserRoutes from "./routes/reg.tipouser.routes";

const app = express()
app.use(express.json())
app.use(authRoutes)
app.use(productRoutes)
app.use(registerRoutes)
app.use(estadoUserRoutes)
app.use(tipoUserRoutes)

app.listen(3000)
console.log("server on port 3000")