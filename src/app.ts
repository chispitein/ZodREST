import express from "express";
import morgan from "morgan";
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

export class App {

    app: express.Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || 3000 || process.env.port);
    }

    routes() {
        this.app.use(express.json())
        this.app.use(authRoutes)
        this.app.use(productRoutes)
        this.app.use(registerRoutes)
        this.app.use(estadoUserRoutes)
        this.app.use(tipoUserRoutes)
        this.app.use(CajasRoutes)
        this.app.use(UnidadMedidasRoutes)
        this.app.use(TipoProductRoutes)
        this.app.use(HistoryRoutes)
        this.app.use(ProvedorRoutes)
        this.app.use(FacturaRoutes)
        this.app.use(DetFacturaRoutes)
        this.app.use(PedidosRoutes)
        this.app.use(DetallePedidoRoutes)
        this.app.use(EstadoPedidoRoutes)
        this.app.use(WishListRoutes)
        this.app.use(BoletasRoutes)
        this.app.use(DetalleBoletaRoutes)
        this.app.use(TipoVentaRoutes)
        this.app.use(FiadoresRoutes)
        this.app.use(CantFiadoRoutes)
    }

    middlewares() {
        this.app.use(morgan('dev'))
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('server on port ', 3000);
    }

}