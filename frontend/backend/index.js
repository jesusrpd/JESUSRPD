import config from './config';
import './database';
import app from "./app";

(async () => {
    await app.listen(config.PORT);
    console.log("Server listen on port", config.PORT);
})();
