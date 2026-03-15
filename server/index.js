import { config } from "dotenv";
config();

import app from "./src/app.js";
import connectDB  from "./src/config/db.js";
connectDB();



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  process.on("SIGINT", () => {
    console.log("Shutting down server...");
    process.exit(0);
  });
});