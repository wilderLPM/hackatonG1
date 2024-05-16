import AppRoads from "./routes/AppRoads.js";
import { app, port } from "./constants";

app.use(AppRoads);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});