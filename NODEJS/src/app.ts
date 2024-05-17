import AppRoads from "./routes/AppRoads.js";
import { app, port } from "./constants";
import PolygonRoads from "./routes/PolygonRoads.js";

app.use(AppRoads);
app.use(PolygonRoads);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});