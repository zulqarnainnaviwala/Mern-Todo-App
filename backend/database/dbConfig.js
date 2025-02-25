import mongoose from "mongoose";

const Connection = (connectionURL) => {

  mongoose.connect(connectionURL, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected Successfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });
  mongoose.connection.on("error", (error) => {
    console.log("Error while connecting with the database", error);
  });
};
export default Connection;
