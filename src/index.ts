import express from "express"
import authRoutes from "./routes/auth/auth.routes";
import productRoutes from "./routes/Productos/products.routes";
import registerRoutes from "./routes/Register/register.routes";
import estadoUserRoutes from "./routes/Register/estadouser.routes";
import tipoUserRoutes from "./routes/Register/tipouser.routes";
import CajasRoutes from "./routes/Register/cajas.routes";
import UnidadMedidasRoutes from "./routes/Productos/unidadmedida.routes";
import TipoProductRoutes from "./routes/Productos/tipoprod.routes";
import HistoryRoutes from "./routes/Productos/history.routes";
import ProvedorRoutes from "./routes/Compras/prov.routes";
import FacturaRoutes from "./routes/Compras/factura.routes";


const app = express()
app.use(express.json())
app.use(authRoutes)
app.use(productRoutes)
app.use(registerRoutes)
app.use(estadoUserRoutes)
app.use(tipoUserRoutes)
app.use(CajasRoutes)
app.use(UnidadMedidasRoutes)
app.use(TipoProductRoutes)
app.use(HistoryRoutes)
app.use(ProvedorRoutes)
app.use(FacturaRoutes)


app.listen(3000)
console.log("server on port 3000")