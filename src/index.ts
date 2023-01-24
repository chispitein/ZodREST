import {App} from './app'

async function main(){
    const app = new App(980);
    await app.listen();
}

main();