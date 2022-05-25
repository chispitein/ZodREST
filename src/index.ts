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
import DetFacturaRoutes from "./routes/Compras/detallefact.routes";
import PedidosRoutes from "./routes/Compras/pedido.routes";
import DetallePedidoRoutes from "./routes/Compras/detalleped.routes";
import EstadoPedidoRoutes from "./routes/Compras/estadoped.routes";
import WishListRoutes from "./routes/Compras/wishlist.routes";
import BoletasRoutes from "./routes/Ventas/boletas.routes";
import DetalleBoletaRoutes from "./routes/Ventas/detallebol.routes";
import TipoVentaRoutes from "./routes/Ventas/tipoventas.routes";
import FiadoresRoutes from "./routes/Fiados/fiadores.routes";
import CantFiadoRoutes from "./routes/Fiados/cantfiado.routes";


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
app.use(DetFacturaRoutes)
app.use(PedidosRoutes)
app.use(DetallePedidoRoutes)
app.use(EstadoPedidoRoutes)
app.use(WishListRoutes)
app.use(BoletasRoutes)
app.use(DetalleBoletaRoutes)
app.use(TipoVentaRoutes)
app.use(FiadoresRoutes)
app.use(CantFiadoRoutes)



app.listen(3000)
console.log("server on port 3000")