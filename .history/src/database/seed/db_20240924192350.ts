import mongoose from "mongoose";
import { globalConfig } from "../../constants/configs";
import Student from "../../models/student.model";

const MONGO_CONNECT =
  "mongodb+srv://pakonka:QCNEPM68e7sV5ZxY@nodejs.pgygr.mongodb.net/Nodejs?retryWrites=true&w=majority&appName=Nodejs";
const mongooseDbOptions = {
  autoIndex: true, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(MONGO_CONNECT as string, mongooseDbOptions)
  .then(() => {
    console.log("Connected to MongoDB");
    //should listen app here
  })
  .catch((err) => {
    console.error("Failed to Connect to MongoDB", err);
  });

const students = [
  {
    id: "1",
    fullName: "Ngô Quốc Long",
    age: 25,
    email: "long.nq@gmail.com",
    mobile: "0988777666",
    class: "batch179",
  },
  {
    id: "2",
    fullName: "Trần Văn A",
    age: 22,
    email: "tran.va@gmail.com",
    mobile: "0123456789",
    class: "batch180",
  },
  {
    id: "3",
    fullName: "Lê Thị B",
    age: 23,
    email: "le.thi.b@gmail.com",
    mobile: "0987654321",
    class: "batch181",
  },
];
const runDB = async () => {
  console.log("runDB running....");
  await Student.insertMany(students);
};

try {
  runDB();
} catch (error) {
  console.log(error);
}
