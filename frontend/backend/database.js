import config from "./config";
import mongoose from "mongoose";

mongoose
    .connect(config.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((db) => console.log("Database is conected"))
    .catch((err) => console.log(err, "Database is not conected"));
