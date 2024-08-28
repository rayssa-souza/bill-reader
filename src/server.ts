import "dotenv/config";
import app from "./app";
import { sequelize } from "./config/db";

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been estabalished successfully");
  } catch (error: unknown) {
    console.log({ message: error });
  }
});
