"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const auth_routes_1 = __importDefault(require("./routes/auth/auth.routes"));
const products_routes_1 = __importDefault(require("./routes/Productos/products.routes"));
const register_routes_1 = __importDefault(require("./routes/Register/register.routes"));
const estadouser_routes_1 = __importDefault(require("./routes/Register/estadouser.routes"));
const tipouser_routes_1 = __importDefault(require("./routes/Register/tipouser.routes"));
const cajas_routes_1 = __importDefault(require("./routes/Register/cajas.routes"));
const unidadmedida_routes_1 = __importDefault(require("./routes/Productos/unidadmedida.routes"));
const tipoprod_routes_1 = __importDefault(require("./routes/Productos/tipoprod.routes"));
const history_routes_1 = __importDefault(require("./routes/Productos/history.routes"));
const prov_routes_1 = __importDefault(require("./routes/Compras/prov.routes"));
const factura_routes_1 = __importDefault(require("./routes/Compras/factura.routes"));
const detallefact_routes_1 = __importDefault(require("./routes/Compras/detallefact.routes"));
const pedido_routes_1 = __importDefault(require("./routes/Compras/pedido.routes"));
const detalleped_routes_1 = __importDefault(require("./routes/Compras/detalleped.routes"));
const estadoped_routes_1 = __importDefault(require("./routes/Compras/estadoped.routes"));
const wishlist_routes_1 = __importDefault(require("./routes/Compras/wishlist.routes"));
const boletas_routes_1 = __importDefault(require("./routes/Ventas/boletas.routes"));
const detallebol_routes_1 = __importDefault(require("./routes/Ventas/detallebol.routes"));
const tipoventas_routes_1 = __importDefault(require("./routes/Ventas/tipoventas.routes"));
const fiadores_routes_1 = __importDefault(require("./routes/Fiados/fiadores.routes"));
const cantfiado_routes_1 = __importDefault(require("./routes/Fiados/cantfiado.routes"));
const cors_1 = __importDefault(require("cors"));
class App {
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.use((0, cors_1.default)());
        this.app.set('port', this.port || 3000 || process.env.port);
    }
    routes() {
        this.app.use(express_1.default.json());
        this.app.use(auth_routes_1.default);
        this.app.use(products_routes_1.default);
        this.app.use(register_routes_1.default);
        this.app.use(estadouser_routes_1.default);
        this.app.use(tipouser_routes_1.default);
        this.app.use(cajas_routes_1.default);
        this.app.use(unidadmedida_routes_1.default);
        this.app.use(tipoprod_routes_1.default);
        this.app.use(history_routes_1.default);
        this.app.use(prov_routes_1.default);
        this.app.use(factura_routes_1.default);
        this.app.use(detallefact_routes_1.default);
        this.app.use(pedido_routes_1.default);
        this.app.use(detalleped_routes_1.default);
        this.app.use(estadoped_routes_1.default);
        this.app.use(wishlist_routes_1.default);
        this.app.use(boletas_routes_1.default);
        this.app.use(detallebol_routes_1.default);
        this.app.use(tipoventas_routes_1.default);
        this.app.use(fiadores_routes_1.default);
        this.app.use(cantfiado_routes_1.default);
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log('server on port ', 3000);
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map