import { connect } from "mongoose";
import { app } from "./app";
import "dotenv/config";

const checkEnv = () => {
    const env = ["PORT", "NODE_ENV", "COOKIE_NAME", "MONGO_URI"];
    env.forEach((data) => {
        if (!process.env[data]) {
            console.log(`${data} env not found`);
            process.exit(1);
        }
    });
};

async function InitServer() {
    try {
        checkEnv();
        await connect(process.env.MONGO_URI!);
        console.log("MongoDB connected");
        app.listen(process.env.PORT || 3001, () => {
            console.log("server started");
        });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}
InitServer();
