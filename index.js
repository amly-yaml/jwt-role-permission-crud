import http from "http";
import app from "./routes/app.js";

const server = http.createServer(app);

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
