//Task 1
console.log("////Task 1");
const user = {};

Object.defineProperties(user, {
  name: { value: "Mike", writable: false },
  age: { value: "25", writable: false },
});

Object.defineProperty(user, "id", {
  value: "12345",
  writable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, "name"));
console.log(Object.getOwnPropertyDescriptor(user, "age"));
console.log(Object.getOwnPropertyDescriptor(user, "id"));

//Task 2
console.log("/////Task 2");
const dataBase = {
  dbName: "user",
  dbType: "MySQL",
};
const configurateDB = {
  token: "123",
  password: "567",
  user: "admin",
};

Object.freeze(dataBase);
dataBase.dbName = "admin";
console.log(dataBase.dbName);
console.log(Object.isFrozen(dataBase));
console.log(dataBase);

Object.seal(configurateDB);
delete configurateDB.token;
configurateDB.user = "admin2";
console.log(configurateDB.token);
console.log(Object.isSealed(configurateDB));
console.log(configurateDB);

//Task 3
console.log("///Task 3");
let salaries = {
  frontend: 2000,
  backend: 1500,
  design: 1000,
};

Object.defineProperty(salaries, "sum", {
  get() {
    let sum = 0;
    for (const salary in this) {
      sum += this[salary];
    }
    return sum;
    // console.log(sum);
  },
  enumerable: false,
});

Object.defineProperty(salaries, "addSalaries", {
  set(value) {
    for (let i = 0; i < value.length; i++) {
      const salary = value[i].split(": ");
      this[salary[0]] = +salary[1];
    }
  },

  enumerable: false,
});

console.log(salaries.sum);
console.log(salaries);

salaries.addSalaries = [
  "frontend: 2500",
  "backend: 1750",
  "design: 1300",
  "manager: 800",
];

console.log(salaries);
console.log(salaries.sum);

//Task 4
console.log("/////Task 4");
const user1 = {
  name: "Mike",
  surname: "Davis",
  age: 25,
};

Object.defineProperty(user1, "userInfo", {
  get() {
    let userInfo = "";
    for (key of Object.keys(user1)) {
      userInfo += `${key}: ${user1[key]}, `;
    }
    return userInfo;
  },

  enumerable: false,
});

console.log(user1.userInfo);
user1.login = "Mk_18";
console.log(user1.userInfo);
