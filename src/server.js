import { app } from "./app.js";
import { connectToDB } from "./app/config/db.js";

const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await connectToDB();
    app.listen(PORT, () => {
      console.log("Alhamdulillah server is running on port", PORT);
    });
  } catch (error) {
    console.log(`❌ Failed to connect to MongoDB `, error);
  }
};

startServer();
