import app from "./app";

(async () => {
    await app.listen(4000);
    console.log("Server listen on port", 4000);
})();
