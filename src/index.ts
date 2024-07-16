import { initServer } from "./app";

async function init(){
    const app = await initServer();
    app.listen(8000, () => console.log(`hey i am a backend and i am running on the port number 8000`));
}

init();