import {App} from './app'

async function main(){
    const app = new App(process.env.port);
    await app.listen();
}

main();