import Connection from "mysql/lib/Connection";
import {createPool} from "mysql2/promise"


export async function connect(){
    const mmelyconnection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'mmely',
        connectionLimit: 10
    });

    return mmelyconnection;
}