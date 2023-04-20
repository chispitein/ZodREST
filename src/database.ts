import Connection from "mysql/lib/Connection";
import {createPool} from "mysql2/promise"


export async function connect(){
    const mmelyconnection = await createPool({
        host: 'mmelymysql.cz5fvuemhkod.sa-east-1.rds.amazonaws.com',
        user: 'Chispa',
        password: 'Dalealbo7',
        database: 'mmely',
        connectionLimit: 10
    });

    return mmelyconnection;
}