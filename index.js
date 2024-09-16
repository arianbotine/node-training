const { Person } = require("./person");
//require("./modules/path");
//require("./modules/fs");

require("./server/http");

const person = new Person("Arian");

console.log(person.sayMyName());
