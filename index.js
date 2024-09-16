const { Person } = require("./person");
//require("./modules/path");
//require("./modules/fs");
//require("./server/http");
require("./server/express");

const person = new Person("Arian");

console.log(person.sayMyName());
