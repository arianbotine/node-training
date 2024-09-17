const { Person } = require("./person");
//require("./modules/path");
//require("./modules/fs");
//require("./server/http");
//require("./server/express");
//require("./src/database/connect");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");
dotenv.config();
require("./server/express");
connectToDatabase();

//const person = new Person("Arian");

//console.log(person.sayMyName());
