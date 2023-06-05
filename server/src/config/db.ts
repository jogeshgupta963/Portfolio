import mongoose from "mongoose";
export const connect = (uri: string): Promise<typeof mongoose> => {
    return mongoose.connect(uri);
};
